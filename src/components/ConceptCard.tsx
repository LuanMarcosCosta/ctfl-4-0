import React from 'react';

type ConceptCardProps = {
  title: string;
  children?: React.ReactNode;
};

export default function ConceptCard({title, children}: ConceptCardProps) {
  return (
    <div style={{border: '1px solid var(--ifm-color-border)', padding: 16, borderRadius: 6}}>
      <h3 style={{marginTop: 0}}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
