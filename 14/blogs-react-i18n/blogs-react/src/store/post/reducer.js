import { 
  ACT_FETCH_ARTICLES, 
  ACT_FETCH_ARTICLE_LATEST, 
  ACT_FETCH_ARTICLE_POPULAR, 
  ACT_FETCH_POST_DETAIL,
  ACT_FETCH_RELATED_POSTS,
  ACT_INCREASE_COMMENT_COUNT
} from "./actions";


const initState = {
  articleLatest: [],
  articlePopular: [],
  // articleGeneral: [],
  articlePaging: {
    list: [],
    currentPage: 1,
  },
  postDetail: null,
  relatedPostsByAuthor: []
}

function reducer(postState = initState, action) {
  switch (action.type) {
    case ACT_INCREASE_COMMENT_COUNT:
      return {
        ...postState,
        postDetail: {
          ...postState.postDetail,
          commentCount: postState.postDetail.commentCount + 1
        }
      }
    case ACT_FETCH_ARTICLES:
      return {
        ...postState,
        articlePaging: {
          ...postState.articlePaging,
          list: action.payload.currentPage === 1 
            ? action.payload.posts 
            : [
              ...postState.articlePaging.list,
              ...action.payload.posts
            ],
          total: action.payload.total,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage
        }
      }
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,
        articleLatest: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_POPULAR:
      return {
        ...postState,
        articlePopular: action.payload.posts
      }
    case ACT_FETCH_POST_DETAIL:
      return {
        ...postState,
        postDetail: action.payload.post
      }
    case ACT_FETCH_RELATED_POSTS:
      return {
        ...postState,
        relatedPostsByAuthor: action.payload.posts
      }
    default:
      return postState
  }
}

export default reducer