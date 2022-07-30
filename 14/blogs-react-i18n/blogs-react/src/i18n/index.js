import { i18n } from '@lingui/core';
import { vi, en, fr, zh } from 'make-plural/plurals'

export const locales = {
  vi: "Tiếng Việt",
  en: "English",
  fr: "French",
  zh: "中国人"
};
export const getLocale = () => {
  const langFromStorage = localStorage.getItem('lang')

  if (langFromStorage in locales) {
    return langFromStorage
  }

  return 'vi';
}

export const defaultLocale = getLocale()

i18n.loadLocaleData({
  vi: { plurals: vi },
  en: { plurals: en },
  fr: { plurals: fr },
  zh: { plurals: zh },
})

/**
* We do a dynamic import of just the catalog that we need
* @param locale any locale string
*/
i18n.activate('vi')
export async function dynamicActivate(locale) {
  const { messages } = await import(`../locales/${locale}/messages`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}