import { Box, ButtonBase } from '@mui/material';
import clsx from 'clsx';
import React from 'react';

type Size = 'sm' | 'lg';

type IconProps = {
  src: string;
  size?: Size;
  className?: string;
  alt?: string;
};

const sizeStringToNumber: { [key in Size]: number } = {
  sm: 20,
  lg: 24,
};

export const Icon = ({ src, alt, className, size = 'lg' }: IconProps) => {
  return (
    <Box
      display="inline-flex"
      sx={{
        width: sizeStringToNumber[size],
        height: sizeStringToNumber[size],
        '& img': {
          width: '100%',
        },
      }}
    >
      <svg className={className} aria-labelledby={alt}>
        <use href={src} />
      </svg>
    </Box>
  );
};

export const IconButton = ({
  src,
  alt,
  className,
  onClick,
  size = 'lg',
  disabled,
  disabledClassName,
  type,
}: IconProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  disabledClassName?: string;
  type?: 'button' | 'reset' | 'submit';
}) => {
  return (
    <ButtonBase
      type={type}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      sx={{
        width: sizeStringToNumber[size],
        height: sizeStringToNumber[size],
        '&:disabled': {
          cursor: 'crosshair',
        },
      }}
    >
      <svg
        className={clsx(className, disabled && disabledClassName)}
        aria-labelledby={alt}
        height="100%"
        width="100%"
      >
        <use href={src} />
      </svg>
    </ButtonBase>
  );
};
