import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ src, alt, width, height, className, ...props }) => {
  const getSrcSet = (baseSrc) => {
    const sizes = ['250w', '500w', '750w', '1000w'];
    return sizes.map(size => {
      const [width, unit] = size.split('w');
      return `${baseSrc}?w=${width}${unit}`;
    }).join(', ');
  };

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      effect="blur"
      srcSet={getSrcSet(src)}
      {...props}
    />
  );
};

export default OptimizedImage;
