
export const LANGUAGE_SWITCHER = 'LANGUAGE_SWITCHER'

export const actLangSwitcher = (newLang) => {
  return {
    type: LANGUAGE_SWITCHER,
    payload: { lang: newLang }
  }
}