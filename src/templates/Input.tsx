import clsx from 'clsx';
import type { ChangeEvent } from 'react';

import { IconButton } from './Icon';

type Size = 'sm' | 'lg';
type InputType = 'text' | 'password';

type IInputProps = {
  label?: string;
  placeholder?: string;
  size?: Size;
  className?: string;
  type: InputType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
  value?: string;
  error?: string;
  required?: boolean;
} & (
  | { iconButtonSrc: string; onIconButtonClick: () => void }
  | { iconButtonSrc?: undefined; onIconButtonClick?: undefined }
);

const InputSize: { [key in Size]: string } = {
  sm: 'h-10',
  lg: 'h-14',
};

export const Input: React.FC<IInputProps> = ({
  placeholder = '',
  className = '',
  size = 'sm',
  type,
  onChange,
  disabled = false,
  name = '',
  id = '',
  value,
  error = '',
  label,
  iconButtonSrc,
  onIconButtonClick,
  required,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-white">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={clsx(
            InputSize[size],
            iconButtonSrc && {
              'pr-24': size === 'lg',
              'pr-20': size === 'sm',
            },
            className
          )}
          onChange={onChange}
          disabled={disabled}
          name={name}
          id={id}
          value={value}
          required={required}
        />
        {iconButtonSrc && (
          <div className="absolute right-0 top-0">
            <IconButton
              size={size}
              src={iconButtonSrc}
              onClick={onIconButtonClick}
            />
          </div>
        )}
      </div>

      {error ? <p className="text-sm text-[crimson]">{error}</p> : null}
    </div>
  );
};
