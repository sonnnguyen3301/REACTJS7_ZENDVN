import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { genUserLink } from "../../helpers"
import { actPostNewCommentAsync } from "../../store/comment/actions"
import Button from '../shared/Button'

function CommentForm({ parentId }) {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const postId = useSelector(state => state.Post.postDetail?.id)
  const currentUser = useSelector(state => state.Auth.currentUser)

  const isThisParent = parentId === 0
  const placeholder = isThisParent ? 'Viết bình luận...' : 'Viết phản hồi...'
  const btnLabel = isThisParent ? 'Bình luận' : 'Phản hồi'

  function handleChange(evt) {
    setContent(evt.target.value)
  }

  function handleSubmitComment() {
    if (loading) return

    setLoading(true)

    const actionAsync = actPostNewCommentAsync({
      authorId: currentUser.id,
      parentId,
      content,
      postId
    })
    dispatch(actionAsync).then(res => {
      if (res.ok) {
        setContent('')
      } else {
        // TODO: Handle Error ...
      }
      setLoading(false)
    })
  } 

  if (!currentUser && isThisParent) {
    return <p>Bạn phải <Link to="/login">đăng nhập</Link> để bình luận bài viết này.</p>
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <Link to={genUserLink(currentUser.id)}>
            <img src={currentUser.avatar} alt={currentUser.nickname} />
          </Link>
        </div>
        <textarea placeholder={placeholder} value={content} onChange={handleChange} />
      </div>
      <div className="text-right">
        <Button onClick={handleSubmitComment} loading={loading}>{btnLabel}</Button>
      </div>
    </div>
  )
}

export default CommentForm