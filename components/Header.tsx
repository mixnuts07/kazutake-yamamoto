import { AiFillGithub } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { BsBrightnessLow } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
const Header = (darkMode, toggleDarkMode) => {
  return (
    <div className="top-0 fixed z-50 grid grid-cols-2">
      <div className="flex">
        <a href="https://github.com/mixnuts07" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <p className="text-lg">Kazutake Yamamoto</p>
      </div>
      <div className="flex">
        {darkMode === "dark" ? (
          <BsBrightnessLow onClick={toggleDarkMode} />
        ) : (
          <MdOutlineDarkMode onClick={toggleDarkMode} />
        )}
        <MdOutlineLanguage />
      </div>
    </div>
  );
};

export default Header;
