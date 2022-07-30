import { ACCESS_TOKEN, MESSAGE_FORM_ERROR } from "../../constants"
import { authService } from "../../services/auth"


// Action Types
export const ACT_LOGIN_SUCCESS = 'ACT_LOGIN_SUCCESS'
export const ACT_LOGOUT = 'ACT_LOGOUT'
export const ACT_REGISTER = 'ACT_REGISTER'
export const ACT_SET_TOKEN = 'ACT_SET_TOKEN'


// Action
export function actLoginSuccess({ user, token }) {
    return {
      type: ACT_LOGIN_SUCCESS,
      payload: {
        user,
        token
      }
    }
}

export function actLogout() {
    return {
      type: ACT_LOGOUT
    }
}

export function actSetToken(token) {
return {
    type: ACT_SET_TOKEN,
    payload: { token }
    }
}

// Action Async
export function actFetchMeAsync(token) {
    return async dispatch => {
      if (token === undefined) {
        token = localStorage.getItem(ACCESS_TOKEN)
      }
      try {
        const response = await authService.fetchMe(token)
        // const user = mappingCurrentUser(response.data)
        debugger
        dispatch(actLoginSuccess({ response, token }))
        return {
          ok: true
        }
      } catch(err) {
        // dispatch(actLogout())
        return {
          ok: false,
          error: 'Username hoặc Password không hợp lệ!'
        }
      }
    }
  }
  
  export function actLoginAsync(username, password) {
    return async dispatch => {
      try {

        const response = await authService.login(username, password)
        var token = response.data.token
        const user = response.data.user
        if (token === undefined) {
          token = localStorage.getItem(ACCESS_TOKEN)
        }
        dispatch(actSetToken(token))
        // const responseMe = await dispatch(actFetchMeAsync(token))
        dispatch(actLoginSuccess({ user , token }))
        return {
          ok: response.data.status,
          error: response.data.error
          // ok: responseMe.ok,
          // error: responseMe.error
        }
      } catch(err) { 
        return {
          ok: false,
          error: 'Username hoặc Password không hợp lệ!'
        }
      }
    }
  }
  
  export function actRegisterAsync({
    email,
    fullname,
    password,
    repassword
  }) {
    return async dispatch => {
      try {
        await authService.register({
          email,
          fullname,
          password,
          repassword
        })
        const responseLogin = await dispatch(actLoginAsync(email, password))
        
        if (responseLogin.ok === 200) {
          return { ok: true }
        }
        else{
          if(responseLogin.error) return responseLogin.error
          throw new Error(MESSAGE_FORM_ERROR.default)
        }
      } catch(err) {
        let errorMessage = MESSAGE_FORM_ERROR.default
        if (err.response && err.response.data && err.response.data.code) {
          const errorCode = err.response.data.code
          if ( MESSAGE_FORM_ERROR[errorCode] ) {
            errorMessage = MESSAGE_FORM_ERROR[errorCode]
          }
        }
        return {
          ok: false,
          error: errorMessage
        }
      }
    }
  }
  