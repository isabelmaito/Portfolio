export const BODY_MAX = 500;
export const TITLE_MAX = 120;

export function contentLang(language = '') {
    if (language.startsWith('zh')) return 'zh';
    if (language.startsWith('es')) return 'es';
    if (language.startsWith('en')) return 'en';
    return 'pt';
}

function intlLocale(language = '') {
    return { zh: 'zh-CN', es: 'es', en: 'en', pt: 'pt-BR' }[contentLang(language)];
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
    return new Intl.DateTimeFormat(intlLocale(language), {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(utcDate(isoDate));
}

export function formatMonthYear(year, month, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(new Date(Date.UTC(year, month - 1, 1)));
    return capitalize(text);
}

export function formatMonthName(month, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), { month: 'long', timeZone: 'UTC' }).format(
        new Date(Date.UTC(2000, month - 1, 1)),
    );
    return capitalize(text);
}

// Short month for the compact mobile timeline: "Set", "Sep", "9月" (no trailing period).
export function formatMonthShort(month, language) {
    const text = new Intl.DateTimeFormat(intlLocale(language), { month: 'short', timeZone: 'UTC' }).format(
        new Date(Date.UTC(2000, month - 1, 1)),
    );
    return capitalize(text.replace(/\.$/, ''));
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
