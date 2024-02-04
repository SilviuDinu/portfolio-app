import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
export interface BlinkerProps {
  text: string;
  as?: React.ElementType;
  className?: string;
}

const Blinker = ({ text, as: Tag = 'div', className = '' }: BlinkerProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index++));
      if (index > text.length) {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Tag className={classNames('blinker-wrapper', className)}>
      {displayedText}
      <span className='blinker'>_</span>
    </Tag>
  );
};

export default React.memo(Blinker);
