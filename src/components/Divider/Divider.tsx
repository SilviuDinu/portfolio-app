import classNames from 'classnames';

export interface DividerProps {
  type: 'vertical' | 'horizontal';
  height?: number;
  width?: number;
  className?: string;
}

const Divider = ({ type = 'horizontal', height = 2, width = 100, className = '' }: DividerProps) => {
  const style = {
    height: type === 'horizontal' ? `${height}px` : '100%',
    width: type === 'vertical' ? `${width}px` : '100%',
    backgroundColor: 'currentColor',
  };

  return (
    <div
      className={classNames(`divider divider--${type}`, className)}
      style={style}></div>
  );
};

export default Divider;
