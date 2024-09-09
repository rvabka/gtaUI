import ToggleComponent from "./ToggleComponent";
import { FaRegCopy } from "react-icons/fa6";
import { IoMan } from "react-icons/io5";

export default function Pet() {
  const cooridinates = "X: -803.717 Y: 176.49, Z: 72.841";

  return (
    <div className="h-[730px] w-[520px] bg-main">
      <ToggleComponent
        title="Pew spawner"
        icon={<IoMan color="#FF1A35" />}
        isArrow={false}
      ></ToggleComponent>
      <ToggleComponent
        title="Chichuahua hot dogs ped"
        icon={<IoMan color="#525560" />}
        isArrow={true}
      >
        <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5">
          <h2 className="text-sm text-fontGray">Model ID</h2>
          <div className="flex items-center bg-gray p-2 rounded-md">
            <p className="text-xs p-2 px-4 ">mp_f_freemode_01</p>
          </div>
        </div>
        <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5">
          <h2 className="text-sm text-fontGray">Coordinates</h2>
          <div className="flex items-center justify-center bg-gray p-2 rounded-md">
            <p className="text-xs">{cooridinates}</p>
            <button className="text-fontGray ml-2 rounded">
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="LINE flex justify-between items-center w-[520px] h-[58px]  px-5 mt-2">
          <h2 className="text-sm text-fontGray">Rotation</h2>
          <div className="flex items-center justify-center bg-gray gap-1 p-2 rounded-md">
            <p className="text-xs">X: 30°</p>
            <button className="text-fontGray ml-1 mr-4 rounded">
              <FaRegCopy />
            </button>
            <p className="text-xs">Y: 30°</p>
            <button className="text-fontGray ml-1 mr-4 rounded">
              <FaRegCopy />
            </button>
            <p className="text-xs">Z: 30°</p>
            <button className="text-fontGray ml-1 rounded">
              <FaRegCopy />
            </button>
          </div>
        </div>
        <div className="LINE flex justify-between items-center w-[520px] h-[58px] px-5">
          <h2 className="text-sm text-fontGray">Animation</h2>
          <div className="flex gap-2">
            <div className="flex items-center bg-gray p-2 rounded-md">
              <p className="text-xs p-2 px-4 ">Animation dict</p>
            </div>
            <div className="flex items-center bg-gray p-2 rounded-md">
              <p className="text-xs p-2 px-4 ">Animation clip</p>
            </div>
          </div>
        </div>
      </ToggleComponent>
    </div>
  );
}
