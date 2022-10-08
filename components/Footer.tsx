import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div>
      <h3>Contact</h3>
      <BsTwitter />
      <BsFacebook />
      <BsLinkedin />
      <small>©︎{thisYear} kazutakeyamamoto</small>
    </div>
  );
};

export default Footer;
