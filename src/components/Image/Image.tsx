import { BREAKPOINTS } from '@constants/breakpoints';
import { preloadImage } from '@helpers/helpers';
import useDimensions from '@hooks/useDimensions';
import classNames from 'classnames';
import { useEffect } from 'react';

interface ImageProps {
  name: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  alt?: string;
  lazyLoad?: boolean;
  preload?: boolean;
  className?: string;
}

const Image = ({
  name,
  width,
  height,
  aspectRatio = 1,
  alt = '',
  lazyLoad = true,
  preload = false,
  className = '',
}: ImageProps) => {
  const [isMobile, windowWidth] = useDimensions();
  // preload = false; // TODO: fix preloading images not being used by the component
  const loadImage = (imageName: string) => {
    try {
      return require(`@assets/images/${imageName}`).default;
    } catch (e) {
      return undefined;
    }
  };

  const baseImageSrc = loadImage(`${name}.jpg`);
  const srcSetSizes = ['xs', 'sn', 'md'];
  let bestMatchSrc = baseImageSrc; // Initialize with the base image
  const srcSet = srcSetSizes
    .map((size) => {
      const imageSize = `${name}_${size}`;
      const imageSrc = loadImage(`${imageSize}.jpg`);
      const breakpointWidth = BREAKPOINTS[size];
      if (imageSrc && windowWidth <= breakpointWidth) {
        bestMatchSrc = imageSrc;
      }
      return imageSrc ? `${imageSrc} ${breakpointWidth}w` : null;
    })
    .filter(Boolean)
    .join(', ');

  useEffect(() => {
    if (preload) {
      preloadImage(bestMatchSrc);
    }
  }, [preload, bestMatchSrc]);

  console.log(srcSet);

  const sizes = isMobile
    ? '(max-width: 600px) 100vw'
    : '(min-width: 601px) and (max-width: 991px) 50vw, (min-width: 992px) 33vw';

  return (
    <img
      src={baseImageSrc}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      style={{ aspectRatio }}
      alt={alt}
      className={classNames('image', className)}
      loading={lazyLoad ? 'lazy' : 'eager'}
    />
  );
};

export default Image;
