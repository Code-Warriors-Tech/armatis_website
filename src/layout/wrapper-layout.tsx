import React, { ReactNode } from 'react';

interface WrapperLayoutProps {
  children: ReactNode;
  className?: string;
}

const WrapperLayout = ({ children, className = '' }: WrapperLayoutProps) => {
  return (
    <div className={`w-full max-w-[1360px] px-5 lg:px-10 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default WrapperLayout;
