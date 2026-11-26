import { useRef } from 'react';
import { customEmojis } from '../utils/customEmojis.js';
import { parseRich, photoSize } from '../utils/richText.js';
import './RichText.css';

function Photo({ alt, src }) {
  const dialogRef = useRef(null);
  const size = photoSize(src);
  const label = alt || 'Foto';

  return (
    <>
      <button
        type="button"
        className="rich-photo"
        style={{ '--photo': `url("${src}")` }}
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`${label} (ampliar)`}
      >
        <img src={src} alt={alt} width={size?.width} height={size?.height} loading="lazy" decoding="async" />
      </button>
      {/* Tapping anywhere or pressing Esc closes it. */}
      <dialog ref={dialogRef} className="rich-photo-dialog" onClick={() => dialogRef.current?.close()}>
        <img src={src} alt={alt} width={size?.width} height={size?.height} />
      </dialog>
    </>
  );
}

function renderNodes(nodes) {
  return nodes.map((node, index) => {
    switch (node.type) {
      case 'text':
        return node.value;
      case 'bold':
        return <strong key={index}>{renderNodes(node.children)}</strong>;
      case 'italic':
        return <em key={index}>{renderNodes(node.children)}</em>;
      case 'code':
        return <code key={index}>{node.value}</code>;
      case 'link':
        return (
          <a key={index} href={node.href} target="_blank" rel="noopener noreferrer">
            {renderNodes(node.children)}
          </a>
        );
      case 'emoji': {
        const emoji = customEmojis[node.code];
        if (!emoji) return `:${node.code}:`;
        return (
          <img key={index} className="rich-emoji" src={emoji.src} alt={`:${node.code}:`} title={emoji.name} loading="lazy" decoding="async" />
        );
      }
      case 'image':
        return <Photo key={index} alt={node.alt} src={node.src} />;
      default:
        return null;
    }
  });
}

// A photo is already its own block, so the line breaks typed around it would add blank space.
function trimAroundPhotos(nodes) {
  return nodes.map((node, index) => {
    if (node.type !== 'text') return node;
    let { value } = node;
    if (nodes[index + 1]?.type === 'image') value = value.replace(/\n$/, '');
    if (nodes[index - 1]?.type === 'image') value = value.replace(/^\n/, '');
    return { ...node, value };
  });
}

/** A post body: formatting, links that open in a new tab, the site's emojis and photos. */
export function RichText({ source, className = '' }) {
  return <div className={`rich-text ${className}`}>{renderNodes(trimAroundPhotos(parseRich(source ?? '')))}</div>;
}
