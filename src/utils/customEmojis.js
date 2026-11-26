// The site's own emojis ("Turma da Isabel"). Each file in src/assets/emojis becomes an emoji
// whose code is the file name: gopher-ninja.webp is written :gopher-ninja: in a post.
// Only the address is bundled here; the image downloads when a post shows it.
const files = import.meta.glob('../assets/emojis/*.{png,webp,gif,svg}', {
    eager: true,
    query: '?url',
    import: 'default',
});

export const customEmojis = Object.fromEntries(
    Object.entries(files).map(([path, src]) => {
        const code = path.split('/').pop().replace(/\.\w+$/, '');
        return [code, { code, src, name: code.replace(/-/g, ' ') }];
    }),
);
