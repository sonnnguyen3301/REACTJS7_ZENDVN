import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import postReducer from './post/reducer' 
import categoryReducer from './category/reducer'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({
  Post: postReducer,
  Category: categoryReducer,
  Auth: authReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)


export default store