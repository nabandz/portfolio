import Socials from "../socials/Socials";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="logo footer__logo">
        nb
      </a>
      <Socials />
    </footer>
  );
};

export default Footer;
