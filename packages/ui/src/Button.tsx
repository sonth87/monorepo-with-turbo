import * as React from "react";

type Props = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ label, className, onClick }) => {
  return (
    <button className={className} onClick={() => onClick?.()}>
      {label || 'Button'}
    </button>
  );
};
