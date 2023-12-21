import "./socials.scss";

import emailIcon from "../../resources/images/icons/email.svg";
import tgIcon from "../../resources/images/icons/telegram.svg";
import gihublIcon from "../../resources/images/icons/github.svg";

const Socials = () => {
  const socials = [
    {
      name: "email",
      link: "mailto:na.bandzeladze@gmail.com",
      icon: emailIcon,
    },
    {
      name: "telegram",
      link: "https://t.me/dawinters",
      icon: tgIcon,
    },
    {
      name: "github",
      link: "https://github.com/nabandz",
      icon: gihublIcon,
    },
  ];

  const socialElements = socials.map((item) => {
    return (
      <a
        href={item.link}
        className="socials__item"
        key={`${item.name} key`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={item.icon} alt={`${item.name} icon`} />
      </a>
    );
  });

  return <div className="socials">{socialElements}</div>;
};

export default Socials;
