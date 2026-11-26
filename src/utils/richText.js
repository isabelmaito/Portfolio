// The post body format: a small Markdown subset.
//   **bold**   *italic*   `code`   [text](https://...)   :emoji-code:   ![description](https://photo)
// Same parser as the API (Portfolio-backend repo, src/richText.js); keep both in sync.

export const IMAGES_PER_TEXT_MAX = 3;

// Photos: https, or http://localhost while developing (the API only accepts its own addresses).
const IMAGE = /^!\[([^\]\n]{0,120})\]\((https:\/\/[^\s)]+|http:\/\/localhost:\d+\/[^\s)]+)\)/;
const LINK = /^\[([^\]\n]+)\]\((https:\/\/[^\s)]+)\)/;
const EMOJI = /^:([a-z0-9]+(?:-[a-z0-9]+)*):/;
const CODE = /^`([^`\n]+)`/;

/**
 * Splits a body into nodes:
 *   { type: 'text', value }            { type: 'emoji', code }       { type: 'code', value }
 *   { type: 'bold' | 'italic', children }
 *   { type: 'link', href, children }   { type: 'image', alt, src }
 * Anything that does not close properly stays as plain text, so no input is ever rejected here.
 */
export function parseRich(source, { inside = null } = {}) {
    const nodes = [];
    let text = '';
    const flush = () => {
        if (text) nodes.push({ type: 'text', value: text });
        text = '';
    };

    let i = 0;
    while (i < source.length) {
        const rest = source.slice(i);
        let match;

        if (!inside && (match = rest.match(IMAGE))) {
            flush();
            nodes.push({ type: 'image', alt: match[1].trim(), src: match[2] });
            i += match[0].length;
            continue;
        }
        if (inside !== 'link' && (match = rest.match(LINK))) {
            flush();
            nodes.push({ type: 'link', href: match[2], children: parseRich(match[1], { inside: 'link' }) });
            i += match[0].length;
            continue;
        }
        if ((match = rest.match(CODE))) {
            flush();
            nodes.push({ type: 'code', value: match[1] });
            i += match[0].length;
            continue;
        }
        if ((match = rest.match(EMOJI))) {
            flush();
            nodes.push({ type: 'emoji', code: match[1] });
            i += match[0].length;
            continue;
        }
        if (rest.startsWith('**') && inside !== 'bold') {
            const end = rest.indexOf('**', 2);
            if (end > 2) {
                flush();
                nodes.push({ type: 'bold', children: parseRich(rest.slice(2, end), { inside: 'bold' }) });
                i += end + 2;
                continue;
            }
        }
        if (rest[0] === '*' && rest[1] !== '*' && inside !== 'italic') {
            const end = rest.slice(1).search(/(?<!\*)\*(?!\*)/) + 1;
            if (end > 1) {
                flush();
                nodes.push({ type: 'italic', children: parseRich(rest.slice(1, end), { inside: 'italic' }) });
                i += end + 1;
                continue;
            }
        }
        text += source[i];
        i += 1;
    }
    flush();
    return nodes;
}

function walk(nodes, visit) {
    for (const node of nodes) {
        visit(node);
        if (node.children) walk(node.children, visit);
    }
}

/** What the reader sees: text and emojis count, link addresses, markers and photos do not. */
export function visibleLength(source) {
    let length = 0;
    walk(parseRich(source), (node) => {
        if (node.type === 'text' || node.type === 'code') length += [...node.value].length;
        if (node.type === 'emoji') length += 1;
    });
    return length;
}

export function imageUrls(source) {
    const urls = [];
    walk(parseRich(source), (node) => {
        if (node.type === 'image') urls.push(node.src);
    });
    return urls;
}

/** Photo addresses end in -<width>x<height>.webp (API src/photos.js), so the page can reserve the space. */
export function photoSize(src) {
    const match = src.match(/-(\d{1,4})x(\d{1,4})\.webp$/);
    return match ? { width: Number(match[1]), height: Number(match[2]) } : null;
}
