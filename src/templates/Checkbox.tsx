import type { ChangeEvent } from 'react';
type Size = 'sm' | 'lg' | 'md';

type Props = {
  checked?: boolean;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  size?: Size;
  name?: string;
  defaultChecked?: boolean;
};

const sizeBox: Record<Size, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
};

const sizeLabel: Record<Size, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled,
  size = 'md',
  className = '',
  name,
  defaultChecked,
}: Props) => {
  return (
    <label
      className={`inline-flex items-center ${
        !disabled && 'cursor-pointer'
      } ${className}`}
    >
      <input
        className={`${sizeBox[size]}`}
        disabled={disabled}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        defaultChecked={defaultChecked}
      />
      <span className={`ml-1.5 ${sizeLabel[size]}`}>{label}</span>
    </label>
  );
};
