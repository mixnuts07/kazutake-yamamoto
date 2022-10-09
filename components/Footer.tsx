import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = ({ t }) => {
  const thisYear = new Date().getFullYear();
  return (
    <div>
      <h3>Contact</h3>
      <h5>{t("footer.1")}</h5>
      <a
        href="https://twitter.com/mixed_nuts_nuts"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100070009847029"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/kazutake-yamamoto-096059224?original_referer="
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <small>©︎{thisYear} kazutakeyamamoto</small>
    </div>
  );
};

export default Footer;
