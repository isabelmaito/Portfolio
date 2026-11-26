import data from '@emoji-mart/data';
import pt from '@emoji-mart/data/i18n/pt.json';
import Picker from '@emoji-mart/react';
import { customEmojis } from '../../utils/customEmojis.js';

// Loaded only when the emoji button is pressed, so the list (~400 KB) never reaches readers.
const custom = Object.values(customEmojis).length
  ? [
      {
        id: 'turma',
        name: 'Turma da Isabel',
        emojis: Object.values(customEmojis).map((emoji) => ({
          id: emoji.code,
          name: emoji.name,
          keywords: emoji.code.split('-'),
          skins: [{ src: emoji.src }],
        })),
      },
    ]
  : [];

/** onSelect gets the text to insert: the emoji itself, or :code: for the site's own emojis. */
export default function EmojiPicker({ onSelect }) {
  return (
    <Picker
      data={data}
      i18n={pt}
      custom={custom}
      categories={custom.length ? ['turma', 'frequent', 'people', 'nature', 'foods', 'activity', 'places', 'objects', 'symbols', 'flags'] : undefined}
      theme="dark"
      locale="pt"
      previewPosition="none"
      skinTonePosition="search"
      perLine={window.innerWidth < 420 ? 7 : 9}
      onEmojiSelect={(emoji) => onSelect(emoji.src ? `:${emoji.id}:` : emoji.native)}
    />
  );
}
