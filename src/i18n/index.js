import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// the translations
// (tip move them in a JSON file and import them)
import en from './langs/en'
import zh from './langs/zh_hk'
const language = localStorage.getItem('lang') || 'zh_hk'
// const language = localStorage.getItem('lang') || 'en'
const resources = {
  en: {
    translation: {
      ...en
    }
  },
  zh_hk: {
    translation: {
      ...zh
    }
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: language,
  // fallbackLng: language,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
