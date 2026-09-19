import React from 'react';

type TipBoxProps = {
  title?: string;
  children: React.ReactNode;
};

export default function TipBox({title = 'Dica', children}: TipBoxProps) {
  return (
    <div style={{borderLeft: '4px solid var(--ifm-color-primary)', padding: '0.5rem 1rem', background: 'var(--ifm-color-emphasis-0)'}}>
      <strong>{title}</strong>
      <div style={{marginTop: 6}}>{children}</div>
    </div>
  );
}
