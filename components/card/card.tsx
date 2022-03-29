import styles from './card.module.scss';
import useInnerWidth from '../customstate/useInnerWidth';

function Card({ children }: { children: React.ReactNode }) {
  const innerWidth: number = useInnerWidth();
  const width = innerWidth < 520 ? styles.cardMobile : styles.cardDesktop;
  return (
    <div
      className={`${styles.card} ${width} flex flex-ai-center flex-jc-space-between flex-d-column`}
    >
      {children}
    </div>
  );
}

export default Card;
