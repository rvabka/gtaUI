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
      <div className="flex items-center justify-between w-full bg-gray h-[55px] px-5">
        <div className="flex items-center">
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
        className={`transition-all duration-300 ease-in-out mt-4 w-full ${
          isVisible
            ? "opacity-100 max-h-screen overflow-auto"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
