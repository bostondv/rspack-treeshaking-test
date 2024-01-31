import { enUS, frCA } from 'date-fns/locale'

export function getLocale() {
  const locale = (window as any).locale
  switch (locale) {
    case 'fr_CA':
      return frCA
    default:
      return enUS
  }
}