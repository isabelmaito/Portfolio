// Shrinks a photo in the browser before it is sent, so one file looks sharp on a phone and on a
// computer and stays small: at most 1280 px wide and 1600 px tall, WebP, about 150 KB.
// Redrawing the image also drops everything hidden in the original file (GPS location, phone model).

const MAX_WIDTH = 1280;
const MAX_HEIGHT = 1600;
const TARGET_BYTES = 150 * 1024;
const QUALITIES = [0.82, 0.76, 0.7, 0.64];

function encode(canvas, quality) {
    return new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', quality));
}

function draw(bitmap, scale) {
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return canvas;
}

export async function shrinkPhoto(file) {
    if (!file.type.startsWith('image/')) throw new Error('Escolha um arquivo de imagem.');

    let bitmap;
    try {
        // from-image: a photo taken with the phone sideways comes out standing up.
        bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch {
        throw new Error('Não consegui abrir essa imagem. Tente outra foto.');
    }

    // Screenshots have small text that blurs at low quality; they are light anyway.
    const qualities = file.type === 'image/png' ? [0.9, ...QUALITIES] : QUALITIES;
    let scale = Math.min(1, MAX_WIDTH / bitmap.width, MAX_HEIGHT / bitmap.height);

    try {
        for (let attempt = 0; attempt < 4; attempt += 1) {
            const canvas = draw(bitmap, scale);
            for (const quality of qualities) {
                const blob = await encode(canvas, quality);
                if (!blob || blob.type !== 'image/webp') {
                    throw new Error('Este navegador não converte fotos para WebP. Use o Chrome.');
                }
                if (blob.size <= TARGET_BYTES) {
                    return { blob, width: canvas.width, height: canvas.height, originalBytes: file.size };
                }
            }
            scale *= 0.85; // still too heavy at the lowest quality: a little smaller
        }
        throw new Error('Não consegui deixar essa foto leve o bastante. Tente outra.');
    } finally {
        bitmap.close();
    }
}

export function formatBytes(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1).replace('.', ',')} MB`;
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
