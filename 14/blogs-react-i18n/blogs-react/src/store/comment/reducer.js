import { getDefaultCmtPaging } from "../../helpers";
import { ACT_FETCH_COMMENTS_PARENT, ACT_FETCH_COMMENTS_REPLY, ACT_INIT_CHILDREN_PAGING, ACT_NEW_PARENT_COMMENT, ACT_NEW_REPLY_COMMENT } from "./actions";

const initState = {
  parentPaging: getDefaultCmtPaging(),
  hashChildPaging: { }
}

function reducer(commentState = initState, action) {
  let parentId
  switch (action.type) {
    case ACT_NEW_REPLY_COMMENT:
      parentId = action.payload.comment.parentId
      let currentChildPaging = commentState.hashChildPaging[parentId]

      if (!currentChildPaging) {
        currentChildPaging = getDefaultCmtPaging()
      }

      return {
        ...commentState,
        hashChildPaging: {
          ...commentState.hashChildPaging,
          [parentId]: {
            ...currentChildPaging,
            list: [
              ...currentChildPaging.list,
              action.payload.comment
            ],
            exclude: [
              ...currentChildPaging.exclude,
              action.payload.comment.id
            ]
          }
        }
      }
    case ACT_NEW_PARENT_COMMENT:
      return {
        ...commentState,
        parentPaging: {
          ...commentState.parentPaging,
          list: [
            action.payload.comment,
            ...commentState.parentPaging.list
          ],
          exclude: [
            ...commentState.parentPaging.exclude,
            action.payload.comment.id
          ]
        }
      }
    case ACT_FETCH_COMMENTS_REPLY:
      parentId = action.payload.parentId
      return {
        ...commentState,
        hashChildPaging: {
          ...commentState.hashChildPaging,
          [parentId]: {
            ...commentState.hashChildPaging[parentId],
            list: (
              action.payload.currentPage === 1 
                && commentState.hashChildPaging[parentId].exclude.length === 0
            )
              ? action.payload.comments 
              : [
                ...commentState.hashChildPaging[parentId].list,
                ...action.payload.comments
              ],
            total: action.payload.total,
            totalPages: action.payload.totalPages,
            currentPage: action.payload.currentPage
          }
        }
      }
    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...commentState,
        parentPaging: {
          ...commentState.parentPaging,
          list: action.payload.currentPage === 1 
            ? action.payload.comments 
            : [
              ...commentState.parentPaging.list,
              ...action.payload.comments
            ],
          total: action.payload.total,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage
        }
      }
    case ACT_INIT_CHILDREN_PAGING:
      return {
        ...commentState,
        hashChildPaging: {
          ...commentState.hashChildPaging,
          ...action.payload.comments.reduce((output, commentItem) => {
            if (commentItem.replyCount > 0) {
              output[commentItem.id] = getDefaultCmtPaging()
            }
            return output
          }, {})
        }
      }
    default:
      return commentState
  }
}
export default reducer