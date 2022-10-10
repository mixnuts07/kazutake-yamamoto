import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = ({ t }) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="pt-10">
      <h3 className="pb-5">Contact</h3>
      <h5>{t("footer.1")}</h5>
      <div className="flex">
        <a
          href="https://twitter.com/mixed_nuts_nuts"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="hover:animate-bounce" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070009847029"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="hover:animate-bounce" />
        </a>
        <a
          href="https://www.linkedin.com/in/kazutake-yamamoto-096059224?original_referer="
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="hover:animate-bounce" />
        </a>
      </div>
      <div className="b-0 pt-10 flex justify-center">
        <small>©︎{thisYear} kazutakeyamamoto</small>
      </div>
    </div>
  );
};

export default Footer;
