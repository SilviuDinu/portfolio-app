import { BREAKPOINTS } from '@constants/breakpoints';
import { preloadImage } from '@helpers/helpers';
import useDimensions from '@hooks/useDimensions';
import { useEffect } from 'react';

interface ImageProps {
  name: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  alt?: string;
  lazyLoad?: boolean;
  preload?: boolean;
}

const Image = ({ name, width, height, aspectRatio = 1, alt = '', lazyLoad = true, preload = false }: ImageProps) => {
  const [isMobile, windowWidth] = useDimensions();

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

  const sizes = isMobile ? '(max-width: 600px) 100vw' : '(max-width: 991px) 100vw, (max-width: 1250px) 100vw, 100vw';

  return (
    <img
      src={baseImageSrc}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      style={{ aspectRatio }}
      alt={alt}
      loading={lazyLoad ? 'lazy' : 'eager'}
    />
  );
};

export default Image;
