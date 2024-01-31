import './render.css'
import { formatRelative } from 'date-fns'
import { getLocale } from './getLocale'

export function render() {
  const el = document.createElement('div')
  el.id = 'root'
  const time = formatRelative(new Date('2024-10-11T00:00:00'), new Date(), { locale: getLocale() })
  el.innerHTML = time
  document.getElementsByTagName('body')[0].appendChild(el)
}
