import { Modal as MuiModal } from '@mui/material';
import clsx from 'clsx';
import type { ReactElement } from 'react';

type Props = {
  className?: string;
  children: ReactElement;
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ className, children, onClose, open }: Props) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      container={() => document.getElementById('__next')}
      className={clsx(`bg-gray-600/50`, className)}
    >
      {children}
    </MuiModal>
  );
};
