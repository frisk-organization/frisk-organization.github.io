import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ptBR from './locale/ptBR'
import enUS from './locale/enUS'

i18n.use(LanguageDetector).init({
  debug: false,
  ns: ['common'],
  defaultNS: 'common',
  fallbackLng: 'ptBR',
  resources: { ptBR, enUS },
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    useSuspense: true
  }
})

export default i18n
