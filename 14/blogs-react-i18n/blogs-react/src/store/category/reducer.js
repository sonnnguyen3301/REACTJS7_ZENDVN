import { ACT_FETCH_ALL_CATEGORIES } from "./actions";

const initState = {
  hashCategoryById: {},
  isFetched: false
}

function reducer(categoryState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...categoryState,
        isFetched: true,
        hashCategoryById: action.payload.hashCategoryById
      }
    default:
      return categoryState
  }
}

export default reducer