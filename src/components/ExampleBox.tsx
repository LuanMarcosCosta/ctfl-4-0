import React from 'react';

type ExampleBoxProps = {
  children: React.ReactNode;
};

export default function ExampleBox({children}: ExampleBoxProps) {
  return (
    <div style={{border: '1px dashed var(--ifm-color-border)', padding: 12, borderRadius: 6, background: 'transparent'}}>
      {children}
    </div>
  );
}
