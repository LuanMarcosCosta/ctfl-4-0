import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {i18n} = useDocusaurusContext();
  const {currentLocale, defaultLocale} = i18n;

  const prefix = currentLocale === defaultLocale ? '' : `/${currentLocale}`;
  const target = `${prefix}/docs/introducao/intro`.replace(/\/\//g, '/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(target);
    }
  }, [target]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </Head>
      <div />
    </>
  );
}
