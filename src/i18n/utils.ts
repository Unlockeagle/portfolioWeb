import { labels } from "./ui";

const defaultLang = 'es'

export function useTranslations(lang: keyof typeof labels) {  // recibe "es" o "it" o "en"
  return function translate(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}