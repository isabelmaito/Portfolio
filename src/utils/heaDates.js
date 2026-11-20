import { PINYIN } from '../locales/languages.js';

export const BODY_MAX = 500;
export const TITLE_MAX = 120;

export function contentLang(language = '') {
    if (language === PINYIN) return 'py';
    if (language.startsWith('zh')) return 'zh';
    if (language.startsWith('es')) return 'es';
    if (language.startsWith('en')) return 'en';
    return 'pt';
}

// Picks a post text in the reader's language. Pinyin falls back to Chinese for posts
// saved before the API started storing it.
export function textIn(texts, lang) {
    return texts[lang] || (lang === 'py' ? texts.zh : '') || texts.pt;
}

function intlLocale(language = '') {
    return { zh: 'zh-CN', py: 'zh-CN', es: 'es', en: 'en', pt: 'pt-BR' }[contentLang(language)];
}

// Chinese dates only use these characters, so pinyin needs no library at runtime:
// "2026年9月21日" -> "2026 nián 9 yuè 21 rì", "十二月" -> "Shí'èr yuè".
const DATE_PINYIN = {
    年: 'nián', 月: 'yuè', 日: 'rì', 一: 'yī', 二: 'èr', 三: 'sān', 四: 'sì', 五: 'wǔ',
    六: 'liù', 七: 'qī', 八: 'bā', 九: 'jiǔ', 十: 'shí',
};

function forLanguage(text, language) {
    if (contentLang(language) !== 'py') return text;
    return text
        .replace(/[年月日一二三四五六七八九十]/g, (char) => ` ${DATE_PINYIN[char]} `)
        .replace(/shí\s+yī/g, 'shíyī')
        .replace(/shí\s+èr/g, "shí'èr")
        .replace(/\s+/g, ' ')
        .trim();
}

function capitalize(text) {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
}

// Dates arrive as 'YYYY-MM-DD'; formatting in UTC keeps the calendar day intact.
function utcDate(isoDate) {
    const [year, month, day] = isoDate.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day || 1));
}

export function formatFullDate(isoDate, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(utcDate(isoDate));
    return forLanguage(text, language);
}

export function formatMonthYear(year, month, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(Date.UTC(year, month - 1, 1)));
    return capitalize(forLanguage(text, language));
}

export function formatMonthName(month, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), { month: 'long', timeZone: 'UTC' }).format(
        new Date(Date.UTC(2000, month - 1, 1)),
    );
    return capitalize(forLanguage(text, language));
}

// Short month for the compact mobile timeline: "Set", "Sep", "9月" (no trailing period).
export function formatMonthShort(month, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), { month: 'short', timeZone: 'UTC' }).format(
        new Date(Date.UTC(2000, month - 1, 1)),
    );
    return capitalize(forLanguage(text.replace(/\.$/, ''), language));
}

export function monthKeyOf(isoDate) {
    return isoDate.slice(0, 7);
}

export function todayIso() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

// Same measure the API uses (code points), so emoji count as one character.
export function charLength(text) {
    return [...text].length;
}
