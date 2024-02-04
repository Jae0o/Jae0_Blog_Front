import "./AsideFooter.Styles.css";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import ContactMeButton from "@/Components/ContactMeButton/ContactMeButton";
import { CONTACT_ME } from "@/constants/URL";

const AsideFooter = () => {
  return (
    <footer className="aside__footer">
      <ContactMeButton
        url={CONTACT_ME.GIT_HUB}
        Icon={<FiGithub />}
      />
      <ContactMeButton
        url={CONTACT_ME.INSTAGRAM}
        Icon={<FaInstagram />}
      />
      <ContactMeButton
        url={CONTACT_ME.EMAIL}
        Icon={<MdOutlineEmail />}
      />
    </footer>
  );
};

export default AsideFooter;
