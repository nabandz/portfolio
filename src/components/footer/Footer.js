import { Link } from "react-router-dom";
import Socials from "../socials/Socials";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link
        to="/"
        className="logo footer__logo"
        onClick={() => window.scrollTo(0, 0)}
      >
        nb
      </Link>
      <Socials />
    </footer>
  );
};

export default Footer;
