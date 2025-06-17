import { CircularProgress } from '@mui/material';
type Size = 'sm' | 'lg';
interface ISpinnerProps {
  size?: Size;
}

const sizeToSpinner: Record<Size, number> = {
  sm: 20,
  lg: 24,
};
export const Spinner = ({ size = 'sm' }: ISpinnerProps) => {
  return <CircularProgress size={sizeToSpinner[size]} className="text-white" />;
};
