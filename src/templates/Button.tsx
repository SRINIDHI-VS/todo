import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'sm' | 'md' | 'lg';
interface IButtonProps {
  children: string | React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
  loading?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  type?: 'button' | 'reset' | 'submit';
}

const BtnVariant: { [key in Variant]: string } = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
};

export const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  onClick,
  className,
  id = '',
  loading = false,
  rightIcon = '',
  leftIcon = '',
  variant = 'primary',
  size = 'md',
  type,
}) => {
  return (
    <button
      type={type}
      id={id}
      disabled={loading || disabled}
      onClick={onClick}
      className={clsx(
        'btn',
        BtnVariant[variant],
        loading || disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
        {
          'btn-40': size === 'md',
          'btn-48': size === 'lg',
          btn: size === 'sm',
        }
      )}
    >
      {loading ? (
        <svg
          className="h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            // stroke-width="4"
            strokeWidth={4}
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          {rightIcon}
          {children}
          {leftIcon}
        </>
      )}
    </button>
  );
};
