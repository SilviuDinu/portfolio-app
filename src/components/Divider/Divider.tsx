import './style.scss';

export interface DividerProps {
  type: 'vertical' | 'horizontal';
  height?: number;
  width?: number;
}

const Divider = ({ type = 'horizontal', height = 2, width = 100 }: DividerProps) => {
  const style = {
    height: type === 'horizontal' ? `${height}px` : '100%',
    width: type === 'vertical' ? `${width}px` : '100%',
    backgroundColor: 'currentColor',
  };

  return (
    <div
      className={`divider divider--${type}`}
      style={style}></div>
  );
};

export default Divider;
