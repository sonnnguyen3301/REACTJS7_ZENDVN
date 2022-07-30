import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDefaultCmtPaging } from "../helpers"
import { actFetchCommentsAsync } from "../store/comment/actions"

const fnPostIdSelector = state => state.Post.postDetail && state.Post.postDetail.id
const fnParentPagingSelector = state => state.Comment.parentPaging
const fnChildPagingSelector = (state, parentId) => state.Comment.hashChildPaging[parentId]

export function useCommentsPaging({
  parentId = 0
} = {}) {
  const dispatch = useDispatch()
  const postId = useSelector(fnPostIdSelector)
  const { 
    list: comments, 
    currentPage,
    totalPages,
    total: _total,
    exclude
  } = useSelector(state => {
    if (parentId === 0) {
      return fnParentPagingSelector(state)
    }

    return fnChildPagingSelector(state, parentId) || getDefaultCmtPaging()
  })

  const [loading, setLoading] = useState(false)
  const hasMoreComments = currentPage < totalPages

  function handleLoadMore() {
    if (loading) {
      return
    }

    setLoading(true)
    const params = { 
      currentPage: currentPage + 1,
      postId,
      parentId,
      exclude
    }

    dispatch(actFetchCommentsAsync(params))
      .then(() => {
        setLoading(false)
      })
  }

  return {
    comments,
    total: _total + exclude.length,
    exclude,
    loading,
    totalPages,
    hasMoreComments,
    handleLoadMore
  }
}