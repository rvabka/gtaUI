import { useState } from "react";
import ToggleComponent from "./ToggleComponent";
import { FaRegCopy } from "react-icons/fa6";
import { FaCouch } from "react-icons/fa6";

export default function Debugger() {
  const [enabled, setEnabled] = useState(false);

  const interiorID = "v_garagem";
  const roomID = "v_michael_g_lounge";

  return (
    <div className="h-[730px] w-[520px] bg-main">
      <ToggleComponent
        title="Interior debugger"
        icon={<FaCouch color="#FF1A35" />}
        isArrow={false}
      >
        <div className="mb-4 ">
          <div className="LINE flex justify-between items-center w-[520px] h-[58px] bg-gray px-5">
            <h2 className="text-sm text-fontGray">
              Current interior ID
            </h2>
            <div className="flex items-center justify-center bg-gray p-2 rounded-md">
              <p className="text-xs">{interiorID}</p>
              <button
                className="text-fontGray ml-2 rounded"
              >
                <FaRegCopy />
              </button>
            </div>
          </div>
          <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5 mt-1">
            <h2 className="text-sm text-fontGray">
              Current room ID
            </h2>
            <div className="flex items-center justify-center bg-gray p-2 rounded-md">
              <p className="text-xs">{roomID}</p>
              <button
                className="text-fontGray ml-2 rounded"
              >
                <FaRegCopy />
              </button>
            </div>
          </div>
          <div className="LINE flex justify-between items-center w-[520px] h-[58px] bg-gray px-5 mt-1">
            <h2 className="text-sm text-fontGray">
              Portals Debugging
            </h2>
            <div className="flex items-center justify-center p-4 rounded-md">
              <div
                onClick={() => setEnabled(!enabled)}
                className={`${
                  enabled ? "bg-hoverRed" : "bg-hoverGray"
                } relative w-10 h-5 rounded-full transition-colors cursor-pointer`}
              >
                <div
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-0"
                  } w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
                />
              </div>
            </div>
          </div>
        </div>
      </ToggleComponent>
    </div>
  );
}
