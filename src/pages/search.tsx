import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@site/src/components/SearchBar';

export default function SearchPage() {
  return (
    <Layout title="Pesquisar" description="Pesquisar na documentação">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <h1>Pesquisar</h1>
          <p>Use a busca abaixo para localizar páginas e tópicos.</p>
          <SearchBar />
        </div>
      </main>
    </Layout>
  );
}
