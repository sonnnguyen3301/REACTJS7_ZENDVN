import categoryService from "../../services/category";


// Action Types
export const ACT_FETCH_CATEGORY = 'ACT_FETCH_CATEGORY'
export const ACT_FETCH_CATEGORY_CHOOSE = 'ACT_FETCH_CATEGORY_CHOOSE'
// Action
export function actFetchCategories(
  categories
) {
    return {
        type: ACT_FETCH_CATEGORY,
        payload:{
          categories
        }
    }
}

export function actFetchCategoriesPost(
  categories
) {
    return {
        type: ACT_FETCH_CATEGORY_CHOOSE,
        payload:{
          categories
        }
    }
}


//  Action Async
export function actFetchCategoryAsync(){
    return async (dispatch) => {
      try {
        const response = await categoryService.getCategories()
        const categories = response.data.categories
        dispatch(actFetchCategories(categories))
      } catch(err) {
        // TODO 
      }
    }
  }
export function actFetchCategoryPostAsync({
  tagIndex
}){
  return async (dispatch) => {
    try {
      const response = await categoryService.getCategoriesPost({
        tagIndex
      })
      const categories = response.data.posts
      dispatch(actFetchCategoriesPost(categories))
    } catch(err) {
      // TODO 
    }
  }
}
