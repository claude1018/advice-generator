import styles from './attribution.module.scss';
import Link from 'next/link';

function Attributes() {
  return (
    <div className={`${styles.attribution} flex flex-jc-center`}>
      Challenge by&nbsp;
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        href="https://github.com/claude1018"
        target="_blank"
        rel="noopener noreferrer"
      >
        claude
      </a>
      .
    </div>
  );
}

export default Attributes;
