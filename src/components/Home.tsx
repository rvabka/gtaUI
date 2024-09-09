import { useState } from "react";
import ToggleComponent from "./ToggleComponent";
import { SiGooglemaps } from "react-icons/si";
import { FaRegCopy } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface enabledProps {
  firstInput: boolean;
  secondInput: boolean;
}

export default function Home() {
  const [enabled, setEnabled] = useState<enabledProps>({
    firstInput: false,
    secondInput: true,
  });
  const cooridinates = "X: -803.717 Y: 176.49, Z: 72.841";
  const heading = "213.635";


  return (
    <div className="h-[75vh] w-[520px] bg-main">
      <ToggleComponent
        title="Current cooridinates"
        icon={<SiGooglemaps color="#FF1A35" />}
        isArrow={true}
      >
        <div className="mb-4 ">
          <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5">
            <h2 className="text-sm text-fontGray">Coordinates</h2>
            <div className="flex items-center justify-center bg-gray p-2 rounded-md">
              <p className="text-xs">{cooridinates}</p>
              <button
                className="text-fontGray ml-2 rounded"
              >
                <FaRegCopy />
              </button>
            </div>
          </div>
          <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5 mt-6">
            <h2 className="text-sm text-fontGray">Heading</h2>
            <div className="flex items-center justify-center bg-gray p-2 rounded-md">
              <p className="text-xs">{heading}</p>
              <button
                className="text-fontGray ml-2 rounded"
              >
                <FaRegCopy />
              </button>
            </div>
          </div>
        </div>
      </ToggleComponent>
      <ToggleComponent
        title="Time and weathers configuration"
        icon={<TiWeatherCloudy color="#FF1A35" />}
        isArrow={false}
      >
        <div className="LINE flex justify-between items-center bg-gray w-[520px] h-[58px] px-5 -mt-1">
          <h2 className="text-sm text-fontGray">Set time</h2>
          <div className="flex items-center justify-center p-2 rounded-md">
            <p className="text-xs bg-hoverGray p-3 px-4">13</p>
            <p className="text-xs bg-hoverGray p-3 px-4 ml-2">06</p>
            <p className="text-xs bg-hoverGray p-3 px-4 ml-2">06</p>
            <button
              className="text-fontGray ml-2 bg-hoverRed text-pureWhite text-xs p-3 px-10 rounded-sm"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5 mt-1">
          <h2 className="text-sm text-fontGray">Weather</h2>
          <div className="flex items-center justify-center p-2 rounded-md">
            <p className="text-xs p-3 px-3 border border-hoverGray flex items-center justify-between gap-6">
              <FaArrowLeft className="cursor-pointer" /> Sunny day{" "}
              <FaArrowRight className="cursor-pointer" />
            </p>
            <button
              className="text-fontGray ml-2 bg-hoverRed text-pureWhite text-xs p-3 px-10 rounded-sm"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="LINE flex justify-between items-center w-[520px] h-[58px] bg-gray px-5 mt-1">
          <h2 className="text-sm text-fontGray">Freeze time</h2>
          <div className="flex items-center justify-center p-4 rounded-md">
            <div
              onClick={() =>
                setEnabled((prevState) => ({
                  ...prevState,
                  firstInput: !prevState.firstInput,
                }))
              }
              className={`${
                enabled.firstInput ? "bg-hoverRed" : "bg-hoverGray"
              } relative w-10 h-5 rounded-full transition-colors cursor-pointer`}
            >
              <div
                className={`${
                  enabled.firstInput ? "translate-x-6" : "translate-x-0"
                } w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
              />
            </div>
          </div>
        </div>
        <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5 mt-1">
          <h2 className="text-sm text-fontGray">Freeze weather status</h2>
          <div className="flex items-center justify-center p-4 rounded-md">
            <div
              onClick={() =>
                setEnabled((prevState) => ({
                  ...prevState,
                  secondInput: !prevState.secondInput,
                }))
              }
              className={`${
                enabled.secondInput ? "bg-hoverRed" : "bg-hoverGray"
              } relative w-10 h-5 rounded-full transition-colors cursor-pointer`}
            >
              <div
                className={`${
                  enabled.secondInput ? "translate-x-6" : "translate-x-0"
                } w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
              />
            </div>
          </div>
        </div>
      </ToggleComponent>
    </div>
  );
}
