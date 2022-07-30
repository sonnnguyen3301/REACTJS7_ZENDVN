import { mappingPostData, mappingPostDetailData } from "../../helpers"
import postService from "../../services/post"
import { actFetchCommentsAsync } from "../comment/actions"

// Action Types
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST'
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR'
export const ACT_FETCH_ARTICLES = 'ACT_FETCH_ARTICLES'
export const ACT_FETCH_POST_DETAIL = 'ACT_FETCH_POST_DETAIL'
export const ACT_FETCH_RELATED_POSTS = 'ACT_FETCH_RELATED_POSTS'
export const ACT_INCREASE_COMMENT_COUNT = 'ACT_INCREASE_COMMENT_COUNT'

// Action
export function actIncreaseCommentCount() {
  return { type: ACT_INCREASE_COMMENT_COUNT }
}
export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      posts
    }
  }
}
export function actFetchArticlePopular(posts) {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      posts
    }
  }
}
export function actFetchArticles({
  posts,
  total,
  totalPages,
  currentPage
}) {
  return {
    type: ACT_FETCH_ARTICLES,
    payload: {
      posts,
      total,
      totalPages,
      currentPage
    }
  }
}
export function actFetchPostDetail(post) {
  return {
    type: ACT_FETCH_POST_DETAIL,
    payload: { post }
  }
}
export function actFetchRelatedPosts(posts) {
  return {
    type: ACT_FETCH_RELATED_POSTS,
    payload: { posts }
  }
}

// Action Async
export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest()
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchArticleLatest(posts))
    } catch(err) {
      // TODO 
    }
  }
}
export function actFetchArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular()
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchArticlePopular(posts))
    } catch(err) {
      // TODO 
    }
  }
}
export function actFetchArticlesAsync({
  perPage = 2,
  currentPage = 1,
  ...restParams
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticles({
        perPage,
        currentPage,
        ...restParams
      })
      const total = Number(response.headers['x-wp-total'])
      const totalPages = Number(response.headers['x-wp-totalpages'])
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchArticles({
        posts,
        total,
        totalPages,
        currentPage
      }))
    } catch(err) {
      // TODO 
    }
  }
}
export function actFetchPostDetailAsync(slug) {
  return async dispatch => {
    try {
      const response = await postService.getDetail(slug)
      const post = response.data[0]

      if (!post) {
        throw new Error('Post Not Found')
      }

      const postId = post.id
      const authorId = post.author

      dispatch(actFetchPostDetail(mappingPostDetailData(post)))
      dispatch(actFetchCommentsAsync({ postId }))
      dispatch(actFetchRelatedPostsAsync({ authorId, postId }))

      return { ok: true }
    } catch (err) {
      return { ok: false }
    }
  }
}
export function actFetchRelatedPostsAsync({ authorId, postId }) {
  return async dispatch => {
    try {
      const response = await postService.getList({ 
        author: authorId,
        exclude: postId,
        per_page: 3
      })
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchRelatedPosts(posts))
    } catch(err) {

    }
  }
}