import styles from './base.module.scss';
import Head from 'next/head';

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
    </>
  );
}

export default Base;
