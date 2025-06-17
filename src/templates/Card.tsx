import type { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
  className?: string;
}
export const Card = ({ children, className = "" }: ICardProps) => {
  return <div className={`color-card text-left ${className}`}>{children}</div>;
};
