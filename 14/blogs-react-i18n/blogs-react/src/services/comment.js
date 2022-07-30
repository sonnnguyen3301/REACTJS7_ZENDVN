import { api } from './api'

const commentService = {
  getList({
    perPage = 2,
    currentPage = 1,
    postId,
    parentId,
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/comments', {
      params: {
        per_page: perPage,
        page: currentPage,
        post: postId,
        parent: parentId,
        order: 'asc',
        lang: "vi",
        ...restParams
      }
    })
  },
  createOne({
    authorId,
    content,
    postId,
    parentId
  }) {
    return api.callWithToken().post('/wp/v2/comments', {
      author: authorId,
      content,
      post: postId,
      parent: parentId
    })
  }
}

export default commentService