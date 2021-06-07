import { useState, useEffect } from 'react'

import prBR from 'moment/locale/pt-br'
import { useTranslation } from 'react-i18next'

const languages = {
  ptBR: [prBR, 'pt-br']
}

export const useLocateMoment = () => {
  const [translate] = useTranslation()
  const [location, setLocation] = useState(languages.ptBR)

  const language = translate('project:language')

  useEffect(() => {
    setLocation(languages[language])
  }, [language])

  return [location, language]
}
