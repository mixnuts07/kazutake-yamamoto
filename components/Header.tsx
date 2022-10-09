import { AiFillGithub } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { BsBrightnessLow } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
const Header = ({ darkMode, toggleDarkMode, ChangeLang }) => {
  return (
    // <div className="backdrop-blur-2xl fixed z-10 flex justify-end">
    <div className="flex justify-between pt-3 px-3 sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex">
        <a href="https://github.com/mixnuts07" target="_blank" rel="noreferrer">
          <AiFillGithub size="2.5rem" />
        </a>
        <p className="text-lg pt-2 pl-1">Kazutake Yamamoto</p>
      </div>
      <div className="flex">
        {darkMode === "dark" ? (
          <BsBrightnessLow onClick={toggleDarkMode} size="2.5rem" />
        ) : (
          <MdOutlineDarkMode onClick={toggleDarkMode} size="2.5rem" />
        )}
        <MdOutlineLanguage onClick={ChangeLang} size="2.5rem" />
      </div>
    </div>
  );
};

export default Header;
