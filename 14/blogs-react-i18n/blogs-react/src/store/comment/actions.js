import { mappingComment } from "../../helpers"
import commentService from "../../services/comment"
import { actIncreaseCommentCount } from "../post/actions"

// Action Types
export const ACT_INIT_CHILDREN_PAGING = 'ACT_INIT_CHILDREN_PAGING'
export const ACT_FETCH_COMMENTS_PARENT = 'ACT_FETCH_COMMENTS_PARENT'
export const ACT_FETCH_COMMENTS_REPLY = 'ACT_FETCH_COMMENTS_REPLY'
export const ACT_NEW_PARENT_COMMENT = 'ACT_NEW_PARENT_COMMENT'
export const ACT_NEW_REPLY_COMMENT = 'ACT_NEW_REPLY_COMMENT'

// Action Creator
export function actFetchComments({
  comments,
  total,
  totalPages,
  currentPage,
  parentId
}) {
  return {
    type: parentId === 0 ? ACT_FETCH_COMMENTS_PARENT : ACT_FETCH_COMMENTS_REPLY,
    payload: {
      comments,
      total,
      totalPages,
      currentPage,
      parentId
    }
  }
}
export function actInitChildrenPaging(comments) {
  return {
    type: ACT_INIT_CHILDREN_PAGING,
    payload: { comments }
  }
}
export function actPostNewComment(comment) {
  return {
    type: comment.parentId === 0 ? ACT_NEW_PARENT_COMMENT : ACT_NEW_REPLY_COMMENT,
    payload: { comment }
  }
}

// Action Async

export function actFetchCommentsAsync({
  perPage = 2,
  currentPage = 1,
  postId,
  parentId = 0,
  exclude = []
}) {
  return async dispatch => {
    try {
      if (!postId) {
        throw new Error('Invalid PostId')
      }

      const response = await commentService.getList({
        perPage,
        currentPage,
        postId,
        parentId,
        exclude
      })
      const total = Number(response.headers['x-wp-total'])
      const totalPages = Number(response.headers['x-wp-totalpages'])
      const comments = response.data.map(mappingComment)

      if (parentId === 0) {
        dispatch(actInitChildrenPaging(comments))
      }

      dispatch(actFetchComments({
        comments,
        total,
        totalPages,
        currentPage,
        parentId
      }))

    } catch (err) {
      // TODO ...
    }
  }
}

export function actPostNewCommentAsync({
  authorId,
  content,
  postId,
  parentId = 0
}) {
  return async dispatch => {
    try {
      if (!authorId || !content || !postId) {
        throw new Error('Invalid Data')
      }

      const response = await commentService.createOne({
        authorId,
        content,
        postId,
        parentId
      })
      const comment = mappingComment(response.data)

      dispatch(actPostNewComment(comment))
      dispatch(actIncreaseCommentCount())

      return {
        ok: true
      }
    } catch(err) {
      // TODO ...
      // comment_duplicate
      return {
        ok: false
      }
    }
  }
}