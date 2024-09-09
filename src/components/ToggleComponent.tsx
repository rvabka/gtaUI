import React, { ReactElement, useState } from "react";

interface ToggleComponentProps {
  title: string;
  children?: React.ReactNode;
  icon: ReactElement;
  isArrow: boolean;
}

export default function ToggleComponent({
  title,
  icon,
  isArrow,
  children,
}: ToggleComponentProps) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center flex-col text-pureWhite w-[520px]">
      <div className="flex items-center justify-between w-[520px] bg-gray h-[55px] px-5 ">
        <div className="flex items-center justify-center">
          {icon}
          <h1 className="text-sm ml-3 text-pureWhite font-bold">{title}</h1>
        </div>
        {isArrow ? (
          <button
            onClick={toggleVisibility}
            className="text-fontGray px-4 py-2 rounded"
          >
            {isVisible ? "⬆" : "⬇"}
          </button>
        ) : null}
      </div>
      <div
        className={`transition-transform duration-250 ease-in-out mt-4 z-10 ${
          isVisible
            ? "transform translate-y-0"
            : "transform -translate-y-20 opacity-0 hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
