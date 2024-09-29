import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const WrapperComponent: React.FC<WrapperProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm ${className}`}>
      {title && <h2 className="text-xl font-normal mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default WrapperComponent;
