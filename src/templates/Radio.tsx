import type { ChangeEvent } from 'react';
type Size = 'sm' | 'lg' | 'md';

type Props = {
  // checked: boolean;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  size?: Size;
  name: string;
  value: string;
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

export const Radio = ({
  name,
  label,
  // checked,
  onChange,
  disabled,
  size = 'md',
  className = '',
  value,
}: Props) => {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        name={name}
        className={`${sizeBox[size]}`}
        disabled={disabled}
        type="radio"
        // checked={checked}
        onChange={onChange}
        value={value}
      />
      <span className={`ml-1.5 ${sizeLabel[size]}`}>{label}</span>
    </label>
  );
};
