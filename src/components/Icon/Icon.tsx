import classNames from 'classnames';
import { MouseEventHandler } from 'react';

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Icon = ({ name, width, height, color, className = '', onClick = null }: IconProps) => {
  const loadImage = (imageName: string): React.FC<React.SVGProps<SVGSVGElement>> | null => {
    try {
      return require(`@assets/icons/${imageName}.svg`).default;
    } catch (e) {
      return null;
    }
  };

  const IconSvg = loadImage(name);

  if (!IconSvg) {
    return null;
  }

  return (
    <IconSvg
      className={classNames('icon', className)}
      width={width}
      height={height}
      onClick={onClick}
      style={{ color, fill: color, width: `${width}rem`, height: `${height}rem` }}
    />
  );
};

export default Icon;
