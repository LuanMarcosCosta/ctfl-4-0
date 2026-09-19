import React, {useRef, useState} from 'react';
import {copyToClipboard} from '@site/src/utils/copy-to-clipboard';

export default function CopyPageButton(): React.ReactElement {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleCopy = async () => {
    const title = document.querySelector('h1')?.textContent ?? document.title;
    const content = document.querySelector('.theme-doc-markdown')?.textContent?.trim() ?? '';
    const copied = await copyToClipboard(`${title}\n${window.location.href}\n\n${content}`);

    setStatus(copied ? 'success' : 'error');
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus('idle'), 2500);
  };

  const label = status === 'success' ? 'Página copiada' : status === 'error' ? 'Não foi possível copiar' : 'Copiar página';

  return (
    <button className="copy-page-button" type="button" onClick={handleCopy} aria-live="polite">
      {label}
    </button>
  );
}
