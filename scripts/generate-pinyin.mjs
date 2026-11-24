import { writeFile } from 'node:fs/promises';
import { resources } from '../src/locales/resources.js';
import { toPinyin } from './toPinyin.mjs';

// Builds src/locales/zh-pinyin.json from the "zh-CN" texts. Runs before every build, so the
// pinyin library stays on the build machine and never reaches the visitor's browser.
function convert(value) {
    if (typeof value === 'string') return toPinyin(value);
    if (Array.isArray(value)) return value.map(convert);
    return Object.fromEntries(Object.entries(value).map(([key, inner]) => [key, convert(inner)]));
}

const target = new URL('../src/locales/zh-pinyin.json', import.meta.url);
await writeFile(target, `${JSON.stringify(convert(resources['zh-CN'].translation), null, 2)}\n`);
console.log('src/locales/zh-pinyin.json atualizado.');
