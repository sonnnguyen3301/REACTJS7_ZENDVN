import { ACT_FETCH_CATEGORY, ACT_FETCH_CATEGORY_CHOOSE } from "./actions"

const initState = {
    ArticleCategory: [],
    ArticleCategoryChoosen: []
} 


function reducer(postState = initState, action){
    switch (action.type) {
        case ACT_FETCH_CATEGORY:
            return{
                ...postState,
                ArticleCategory: action.payload.categories
            }
        case ACT_FETCH_CATEGORY_CHOOSE:
            console.log('action.payload.categories',action.payload.categories);
            return{
                ...postState,
                ArticleCategoryChoosen: action.payload.categories
            }
        default:
            return postState
    }
}

export default reducer