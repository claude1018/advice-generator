import styles from '../styles/Home.module.scss';
import Card from '../components/card/card';
import Base from '../components/layout/base';
import GenerateBtn from '../components/buttons/generatebtn';
import Image, { StaticImageData } from 'next/image';
import useInnerWidth from '../components/customstate/useInnerWidth';
import desktopDivider from '../public/images/pattern-divider-desktop.svg';
import mobileDivider from '../public/images/pattern-divider-mobile.svg';

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface DividerType {
  img: StaticImageData;
  alt: string;
  width: number;
}

interface SlipType {
  id: number;
  advice: string;
}

type AdviceSlip = {
  slip: SlipType;
};

export default function Home({ id, advice }: SlipType) {
  const router = useRouter();
  const innerWidth = useInnerWidth();
  const divider: DividerType = {
    img: innerWidth < 520 ? mobileDivider : desktopDivider,
    alt: innerWidth < 520 ? 'mobile divider' : 'desktop divider',
    width: innerWidth < 520 ? 295 : 444,
  };
  const getNewAdvice = async (ref: React.RefObject<HTMLButtonElement>) => {
    await router.replace(router.asPath);
    ref.current.classList.remove('rotate');
  };
  useEffect(() => {
    if (router && router.query) return;
  }, [router]);
  return (
    <Base>
      <Card>
        <p className={`g-text ${styles.id}`}>Advice #{id}</p>
        <h1 className={`${styles.message} w-text`}>
          &quot;{advice}&quot;
        </h1>
        <Image src={divider.img} alt={divider.alt} width={divider.width} />
        <br />
        <GenerateBtn onClick={getNewAdvice} />
      </Card>
    </Base>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const advice: AdviceSlip = await response.json();
  const slip: SlipType = advice.slip;
  return {
    props: {
      id: slip.id,
      advice: slip.advice,
    },
  };
}
