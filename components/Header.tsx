import { AiFillGithub } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { BsBrightnessLow } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
const Header = () => {
  return (
    <div className="top-0 fixed z-10 ">
      <a href="https://github.com/mixnuts07" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <p>Kazutake Yamamoto</p>
      <BsBrightnessLow />
      <MdOutlineDarkMode />
      <MdOutlineLanguage />
    </div>
  );
};

export default Header;
