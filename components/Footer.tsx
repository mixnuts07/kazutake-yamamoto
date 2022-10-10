import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = ({ t }) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="title">
      <h3 className="title-section">Contact</h3>
      <h5>{t("footer.1")}</h5>
      <div className="flex pt-4">
        <a
          href="https://twitter.com/mixed_nuts_nuts"
          target="_blank"
          rel="noreferrer"
          className="hover:animate-bounce"
        >
          <BsTwitter size="2.5rem" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070009847029"
          target="_blank"
          rel="noreferrer"
          className="hover:animate-bounce pl-3"
        >
          <BsFacebook size="2.5rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/kazutake-yamamoto-096059224?original_referer="
          target="_blank"
          rel="noreferrer"
          className="hover:animate-bounce pl-3"
        >
          <BsLinkedin size="2.5rem" />
        </a>
      </div>
      <div className="mb-6 pt-10 flex justify-center">
        <small className="text-small">©︎{thisYear} kazutakeyamamoto</small>
      </div>
    </div>
  );
};

export default Footer;
