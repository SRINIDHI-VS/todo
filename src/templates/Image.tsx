import Image from 'next/image';
import type { ReactEventHandler } from 'react';
interface IProps {
  src: string;
  alt: string;
  className?: string;
  height: number;
  width: number;
  onError?: ReactEventHandler<HTMLImageElement>;
}
export const Img: React.FC<IProps> = ({
  src,
  alt,
  className = '',
  height,
  width,
  onError,
}) => {
  return (
    <Image
      onError={onError}
      unoptimized //We have to configure the image accessing domain in next.config.js if we enable this as "optimised" --> Refer next.config.js file(check image commented code)
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
      style={{ height: height || '100%', width: width || '100%' }} //If user pass height = 0 and width = 0 then template will consider it as 100% height and width
    />
  );
};
