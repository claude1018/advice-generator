import { useState, useEffect } from 'react';

function useInnerWidth() {
  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const getWindowWidth = () => {
    const getInnerWidth: number = window.innerWidth;
    setInnerWidth(getInnerWidth);
  };
  useEffect(() => {
    getWindowWidth();
    window.addEventListener('resize', getWindowWidth);
    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);
  return innerWidth;
}

export default useInnerWidth;
