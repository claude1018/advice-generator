import styles from './base.module.scss';
import Head from 'next/head';
import Attributes from '../footer/attributes';

function Base({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/icon-dice.svg"
          type="image/x-icon"
        />
        <title>Advice generator app | Frontend Mentor</title>
      </Head>
      <main className={styles.container}>{children}</main>
      <footer>
        <Attributes />
      </footer>
    </>
  );
}

export default Base;
