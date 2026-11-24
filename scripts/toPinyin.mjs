import { pinyin } from 'pinyin';

// Chinese punctuation, its Latin twin and where it takes a space.
const PUNCTUATION = {
    '，': [',', 'after'], '、': [',', 'after'], '。': ['.', 'after'], '：': [':', 'after'],
    '；': [';', 'after'], '！': ['!', 'after'], '？': ['?', 'after'], '…': ['...', 'after'],
    '（': ['(', 'before'], '）': [')', 'after'],
    '“': ['"', 'before'], '”': ['"', 'after'], '‘': ["'", 'before'], '’': ["'", 'after'],
    '「': ['"', 'before'], '」': ['"', 'after'], '《': ['"', 'before'], '》': ['"', 'after'],
};
const PARTS = new RegExp(`(\\p{Script=Han}+)|([${Object.keys(PUNCTUATION).join('')}])|([^\\p{Script=Han}${Object.keys(PUNCTUATION).join('')}]+)`, 'gu');

function hanToPinyin(run) {
    const words = pinyin(run, { style: pinyin.STYLE_TONE, segment: 'Intl.Segmenter', group: true });
    return words.map((word) => word[0]).join(' ');
}

/**
 * Turns the Han characters of a text into tone-marked pinyin, word by word, and leaves
 * everything else (Latin words, numbers, code, {{placeholders}}) exactly as it is.
 * Intl.Segmenter splits the words, so characters with two readings (行: xíng/háng) are
 * read from the whole word.
 */
export function toPinyin(text) {
    if (!/\p{Script=Han}/u.test(text)) return text;

    text = text.replace(/—+/g, ' — ');
    let out = '';
    let sentenceStart = false;
    // What the previous part asks for: 'space' = a pinyin word or closing mark wants a space before Latin text.
    let pending = '';
    for (const [, han, mark, other] of text.matchAll(PARTS)) {
        if (han) {
            if (out && !/[\s("']$/.test(out)) out += ' ';
            const words = hanToPinyin(han);
            out += sentenceStart ? words.charAt(0).toUpperCase() + words.slice(1) : words;
            sentenceStart = false;
            pending = 'space';
        } else if (mark) {
            const [latin, side] = PUNCTUATION[mark];
            if (side === 'before' && out && !/[\s(]$/.test(out)) out += ' ';
            out += latin;
            pending = side === 'after' ? 'space' : '';
            if ('。！？'.includes(mark)) sentenceStart = true;
        } else {
            if (pending === 'space' && !/^[\s,.;:!?)]/.test(other)) out += ' ';
            out += other;
            pending = '';
            if (other.trim()) sentenceStart = false;
        }
    }
    out = out.trim();

    // A text that starts in Chinese starts a sentence; code or brand names keep their case.
    return /^\s*\p{Script=Han}/u.test(text) ? out.charAt(0).toUpperCase() + out.slice(1) : out;
}
