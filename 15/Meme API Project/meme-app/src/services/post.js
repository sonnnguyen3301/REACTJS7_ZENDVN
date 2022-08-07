import { api } from "./api";


export const postService = {
    getList(params){
            return api.call().get('/post/getListPagination.php',{
                params: {
                    ...params,
                }
            })
    },
    getListSearch(params){
        return api.call().get('/post/search.php',{
            params: {
                ...params,
            }
        })
    },
    getArticles({
        perPage = 2,
        currPage = 1,
        ...restParams
    } = {}){
        return postService.getList({
            currPage: currPage,
            pagesize: perPage,
            ...restParams
        })
    },
    getDetail(postid) {
        return api.call().get('/post/post.php',{
            params: {
                postid
            }
        })
    },
    fetchPostByUserID(userid) {
        return api.callWithToken().get('/post/getListPostUserID.php',{ params: { userid } })
    },
}

