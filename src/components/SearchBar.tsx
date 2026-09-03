import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';

type Item = {title: string; url: string; text: string};

export default function SearchBar() {
  const [index, setIndex] = useState<Item[]>([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/search-index.json')
      .then(r => r.json())
      .then(setIndex)
      .catch(() => setIndex([]));
  }, []);

  useEffect(() => {
    if (!query) return setResults([]);
    const q = query.toLowerCase();
    const res = index
      .map(item => ({...item, score: (item.title+ ' ' + item.text).toLowerCase().includes(q) ? 1 : 0}))
      .filter(i => i.score > 0)
      .slice(0, 20);
    setResults(res as any);
  }, [query, index]);

  return (
    <div style={{maxWidth: 720}}>
      <input
        aria-label="Buscar"
        placeholder="Pesquisar na documentação..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid var(--ifm-color-border)'}}
      />
      {results.length > 0 && (
        <ul style={{listStyle: 'none', padding: 8, marginTop: 8, background: 'var(--ifm-color-emphasis-0)'}}>
          {results.map((r, idx) => (
            <li key={idx} style={{padding: 8, borderBottom: '1px solid var(--ifm-color-border)'}}>
              <Link to={r.url}><strong>{r.title}</strong></Link>
              <div style={{fontSize: 13, color: 'var(--ifm-color-muted)'}}>{r.text.slice(0,180)}{r.text.length>180?'…':''}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
