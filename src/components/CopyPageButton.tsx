import React from 'react';

export default function CopyPageButton(): React.ReactElement {
  const copy = async () => {
    try {
      const title = document.querySelector('h1')?.textContent || document.title;
      const url = window.location.href;
      // try to get main markdown content
      const md = document.querySelector('.theme-doc-markdown')?.textContent?.trim() || '';
      const text = `${title}\n${url}\n\n${md.slice(0,2000)}${md.length>2000?"\n...":''}`;
      await navigator.clipboard.writeText(text);
      // simple feedback
      const el = document.createElement('div');
      el.textContent = 'Página copiada para a área de transferência';
      el.style.position = 'fixed';
      el.style.right = '16px';
      el.style.bottom = '16px';
      el.style.background = 'var(--ifm-color-primary)';
      el.style.color = 'white';
      el.style.padding = '8px 12px';
      el.style.borderRadius = '6px';
      document.body.appendChild(el);
      setTimeout(()=>el.remove(), 2000);
    } catch (e) {
      // fallback: copy url only
      try { await navigator.clipboard.writeText(window.location.href); }
      catch {}
      alert('Não foi possível copiar todo o conteúdo — a URL foi copiada.');
    }
  };

  return (
    <button onClick={copy} aria-label="Copiar página" className="copy-page-button" style={{border:'none', background:'transparent', cursor:'pointer'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1H4a2 2 0 0 0-2 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  );
}
