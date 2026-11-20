import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { resources } from "./locales/resources.js"
import { PINYIN } from "./locales/languages.js"
import zhPinyin from "./locales/zh-pinyin.json"

i18n.use(initReactI18next).init({
    resources: { ...resources, [PINYIN]: { translation: zhPinyin } },
    lng: "pt-BR",
    fallbackLng: "pt-BR",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
