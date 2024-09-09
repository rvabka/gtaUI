import logo from "../assets/logo.png";
import { IoEarthSharp } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaCouch } from "react-icons/fa6";
import { IoMan } from "react-icons/io5";

const activeStyles = {
  color: "#FF1A35",
  backgroundColor: "#121317",
};

export default function Nav() {
  return (
    <nav className="h-[138px] w-[520px] bg-main">
      <div className="TOP relative bg-[url('./assets/topImg.png')] bg-cover h-[75px] w-[520px] bg-left bg-no-repeat">
        <div className="boxShadow h-[75px] w-[120px] bg-custom-gradient"></div>
        <div className="absolute left-[15px] top-[15px] flex justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="absolute left-[50px] leading-3 top-[29px] text-center text-pureWhite w-[140px]">
          <h1 className="text-[14px] font-bold">17 MOVEMENT</h1>
          <p className="text-[13px] text-fontGray">Development tool</p>
        </div>
        <div className="absolute flex gap-3 right-[20px] top-[29px]">
          <a href="">
            <IoEarthSharp color={"#525560"} size={23} />
          </a>
          <a href="">
            <FaDiscord color={"#525560"} size={23} />
          </a>
        </div>
      </div>
      <div className="BOTTOM flex items-center mx-3 gap-4 h-[63px] w-[520px]">
        <NavLink
          className="text-fontGray p-2 hover:bg-hoverGray hover:text-hoverRed transition-all duration-300"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          to="/"
        >
          <MdHomeFilled size={20} />
        </NavLink>
        <NavLink
          className="text-fontGray p-2 hover:bg-hoverGray hover:text-hoverRed transition-all duration-300"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          to="sth"
        >
          <FaScrewdriverWrench size={20} />
        </NavLink>
        <NavLink
          className="text-fontGray p-2 hover:bg-hoverGray hover:text-hoverRed transition-all duration-300"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          to="worldEditor"
        >
          <IoEarthSharp size={20} />
        </NavLink>
        <NavLink
          className="text-fontGray p-2 hover:bg-hoverGray hover:text-hoverRed transition-all duration-300"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          to="debugger"
        >
          <FaCouch size={20} />
        </NavLink>
        <NavLink
          className="text-fontGray p-2 hover:bg-hoverGray hover:text-hoverRed transition-all duration-300"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
          to="pet"
        >
          <IoMan size={20} />
        </NavLink>
      </div>
    </nav>
  );
}
