import React from 'react';

type WarningBoxProps = {
  title?: string;
  children: React.ReactNode;
};

export default function WarningBox({title = 'Atenção', children}: WarningBoxProps) {
  return (
    <div style={{borderLeft: '4px solid var(--ifm-color-danger)', padding: '0.5rem 1rem', background: 'var(--ifm-color-emphasis-0)'}}>
      <strong>{title}</strong>
      <div style={{marginTop: 6}}>{children}</div>
    </div>
  );
}
