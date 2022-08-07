import { ACT_FETCH_POST, ACT_FETCH_POST_SEARCH , ACT_FETCH_POST_DETAIL, ACT_FETCH_POST_USER_BY_ID, ACT_FETCH_RELATED_POSTS } from "./actions"

const initState = {
    ArticlePostsPaging:{
        list: [],
        currPage: 1,
    },
    ArticlePostsSearch: [],
    ArticlePostsDetail:{
        post : [],
        user : []
    },
    ArticlePostUser: [],
} 


function reducer(postState = initState, action){
    switch (action.type) {
        case ACT_FETCH_POST:
            return{
                ...postState,
                ArticlePostsPaging: {
                    ...postState.ArticlePostsPaging,
                    list: action.payload.currPage === 1
                        ? action.payload.posts
                        :[
                            ...postState.ArticlePostsPaging.list,
                            ...action.payload.posts
                        ],
                    currPage: action.payload.currPage
                }
            }
        case ACT_FETCH_POST_SEARCH:
            return{
                ...postState,
                ArticlePostsSearch: action.payload.posts
            }
        case ACT_FETCH_POST_DETAIL:
            return{
                ...postState,
                ArticlePostsDetail: action.payload.post
            }
        case ACT_FETCH_POST_USER_BY_ID:
            return{
                ...postState,
                ArticlePostUser: action.payload.posts
            }
        default:
            return postState
    }
}

export default reducer