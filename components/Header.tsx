import { AiFillGithub } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
  return (
    <div>
      <a href="https://github.com/mixnuts07" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>

      <p>Kazutake Yamamoto</p>

      <GrLanguage />
    </div>
  );
};

export default Header;
