import { authService } from "../../services/auth";
import { postService } from "../../services/post";


// Action Types
export const ACT_FETCH_POST = 'ACT_FETCH_POST'
export const ACT_FETCH_POST_SEARCH = 'ACT_FETCH_POST_SEARCH'
export const ACT_FETCH_POST_DETAIL = 'ACT_FETCH_POST_DETAIL'
export const ACT_FETCH_RELATED_POSTS = 'ACT_FETCH_RELATED_POSTS'
export const ACT_FETCH_USER_BY_ID = 'ACT_FETCH_USER_BY_ID'


// Action
export function actFetchSearchPost({
  posts
}) {
    return {
        type: ACT_FETCH_POST_SEARCH,
        payload:{
          posts
        }
    }
}
export function actFetchPost({
  posts,
  currPage
}) {
    return {
        type: ACT_FETCH_POST,
        payload:{
            posts,
            currPage
        }
    }
}
export function actFetchPostDetail(post) {
  return {
    type: ACT_FETCH_POST_DETAIL,
    payload: { 
      post
    }
  }
}
export function actFetchUserById(post,user) {
  return {
    type: ACT_FETCH_USER_BY_ID,
    payload: { 
      post,
      user
     }
  }
}
export function actFetchRelatedPosts(posts) {
  return {
    type: ACT_FETCH_RELATED_POSTS,
    payload: { posts }
  }
}
//  Action Async
export function actFetchPostAsync({
    perPage = 4,
    currPage = 1,
    ...restParams
  } = {}){
    return async (dispatch) => {
      try {
        const response = await postService.getArticles({
            perPage,
            currPage,
            ...restParams
        })
        const posts = response.data.posts
        dispatch(actFetchPost({
          posts,
          currPage
        }))
      } catch(err) {
        // TODO 
      }
    }
  }

  export function actFetchPostSearchAsync({
    query
  } = {}){
    return async (dispatch) => {
      try {
        const response = await postService.getListSearch({
          query
        })
        const posts = response.data.posts
        dispatch(actFetchSearchPost({
          posts
        }))
      } catch(err) {
        // TODO 
      }
    }
  }
  export function actFetchUserByIdAsync(post,userid){
    return async dispatch =>{
      try{
        const response = await authService.fetchUserByID(userid)
        console.log('responseUSERID',response);
        dispatch(actFetchUserById(post,userid))
      }
      catch{
        return { ok: false }
      }
    }
  }
  export function actFetchPostDetailAsync(slug) {
    return async dispatch => {
      try {
        const response = await postService.getDetail(slug)
        const post = response.data.data.post
        if (!post) {
          throw new Error('Post Not Found')
        }
        const postId = post.PID
        const authorId = post.USERID
  
        dispatch(actFetchPostDetail(post))
        // dispatch(actFetchUserByIdAsync(post,authorId))
        // dispatch(actFetchCommentsAsync({ postId }))
        // dispatch(actFetchRelatedPostsAsync({ authorId, postId }))
  
        return { ok: true }
      } catch (err) {
        return { ok: false }
      }
    }
  }
  export function actFetchRelatedPostsAsync(authorId) {
    return async dispatch => {
      try {
        const response = await postService.fetchPostByUserID(authorId)
        const posts = response.data
        console.log('posts',posts);
        dispatch(actFetchRelatedPosts(posts))
      } catch(err) {
  
      }
    }
  }
  // export function actFetchRelatedPostsAsync({ authorId, postId }) {
  //   return async dispatch => {
  //     try {
  //       const response = await postService.getList({ 
  //         author: authorId,
  //         exclude: postId,
  //         per_page: 3
  //       })
  //       const posts = response.data.map(mappingPostData)
  
  //       dispatch(actFetchRelatedPosts(posts))
  //     } catch(err) {
  
  //     }
  //   }
  // }