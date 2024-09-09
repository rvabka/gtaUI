import ToggleComponent from "./ToggleComponent";
import { IoEarthSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function WorldEditor() {
  return (
    <div className="h-[730px] w-[520px] bg-main">
      <ToggleComponent
        title="World editor"
        icon={<IoEarthSharp color="#FF1A35" />}
        isArrow={false}
      >
        <div className="mb-4 ">
          <div className="HEADING flex justify-between items-center w-[520px] bg-gray h-[56px] px-5 ">
            <h2 className="text-sm text-fontGray text-pureWhite font-bold">
              Heading
            </h2>
            <div className="flex items-center justify-center p-2 rounded-md">
              <div className="flex items-center justify-center p-2 rounded-md">
                <p className="text-xs bg-hoverGray p-3 px-4 cursor-pointer">
                  <FaEye size={20} />
                </p>
                <p className="text-xs bg-hoverGray p-3 px-4 ml-2 cursor-pointer">
                  <FaPen size={20} />
                </p>
                <p className="text-xs bg-hoverGray p-3 px-4 ml-2 cursor-pointer">
                  <FaTrash size={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </ToggleComponent>
    </div>
  );
}
