import React from 'react';

type QuestionCardProps = {
  question: string;
  answer?: React.ReactNode;
};

export default function QuestionCard({question, answer}: QuestionCardProps) {
  return (
    <div style={{border: '1px solid var(--ifm-color-border)', padding: 12, borderRadius: 6}}>
      <strong>Questão:</strong>
      <div style={{margin: '8px 0'}}>{question}</div>
      {answer && (
        <details>
          <summary>Ver resposta</summary>
          <div style={{marginTop: 8}}>{answer}</div>
        </details>
      )}
    </div>
  );
}
