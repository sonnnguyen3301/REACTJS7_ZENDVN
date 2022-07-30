import { useState } from "react"
import { useCommentsPaging } from "../../hooks/useCommentsPaging"
import CommentAction from "./CommentAction"
import CommentForm from "./CommentForm"
import CommentSection from "./CommentSection"


function CommentItem(props) {
  const [isShowForm, setIsShowForm] = useState(false)
  const isThisParent = props.parentId === 0
  const {
    comments: replyComments,
    loading,
    exclude,
    handleLoadMore
  } = useCommentsPaging({ 
    parentId: props.comment.id 
  })

  function handleOnReplyClick() {
    setIsShowForm(!isShowForm)
  }

  return (
    <li className="item">
      <CommentSection 
        comment={props.comment}
        onReplyClick={handleOnReplyClick}
      />

      {/* Reply Comments */}
      {
        isThisParent && replyComments && replyComments.length > 0 && (
          <ul className="comments">
            {
              replyComments.map(replyCmtItem => {
                return (
                  <CommentItem 
                    key={replyCmtItem.id} 
                    parentId={props.comment.id} 
                    comment={replyCmtItem} 
                  />
                )
              })
            }
          </ul>
        )
      }

      {
        isThisParent && replyComments && props.comment.replyCount > 0 && (
          <CommentAction
            loading={loading}
            count={props.comment.replyCount - replyComments.length + exclude.length}
            onClick={handleLoadMore} 
          />
        )
      }
      {/* Reply form */}
      { isThisParent && isShowForm && <CommentForm parentId={props.comment.id} /> }
    </li>
  )
}

export default CommentItem