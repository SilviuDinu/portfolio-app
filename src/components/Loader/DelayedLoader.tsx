import Loader from '@components/Loader/Loader';
import { useEffect, useState } from 'react';

const DelayedLoader = ({ minimumDelay = 800 }) => {
  const [isMinimumDelayElapsed, setIsMinimumDelayElapsed] = useState(false);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMinimumDelayElapsed(true);
    }, minimumDelay);

    return () => clearTimeout(timeout);
  }, [minimumDelay]);

  useEffect(() => {
    setIsComponentLoaded(true);
  }, []);

  if (!isComponentLoaded || !isMinimumDelayElapsed) {
    return <Loader duration={minimumDelay} />;
  }

  return null;
};

export default DelayedLoader;
