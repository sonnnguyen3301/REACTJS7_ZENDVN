import { defaultLocale } from "../../i18n"
import { LANGUAGE_SWITCHER } from "./actions"

const initState = {
  lang: defaultLocale
}

function reducer(state = initState, action) {
  if (action.type === LANGUAGE_SWITCHER) {
    localStorage.setItem('lang', action.payload.lang)
    return {
      ...state,
      lang: action.payload.lang
    }
  }
  return state
}

export default reducer