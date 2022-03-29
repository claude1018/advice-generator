import Image from 'next/image';
import die from '../../public/images/icon-dice.svg';
import styles from './generatebtn.module.scss';
import useInnerWidth from '../customstate/useInnerWidth';
import { useRef } from 'react';

function GenerateBtn({
  onClick,
}: {
  onClick: (onClick: React.RefObject<HTMLButtonElement>) => void;
}) {
  const ref = useRef<HTMLButtonElement>();
  const innerWidth = useInnerWidth();
  const isDesktop = innerWidth > 520 ? styles.desktop : '';
  const handleClick = () => {
    ref.current.classList.add('rotate');
    onClick(ref);
  };
  return (
    <button
      ref={ref}
      className={`${styles.generateBtn} ${isDesktop} flex flex-d-row flex-jc-center flex-ai-center`}
      onClick={handleClick}
    >
      <Image
        src={die}
        alt="icon die"
        aria-hidden="true"
        className={`${styles.generateIcon}`}
      />
    </button>
  );
}

export default GenerateBtn;
