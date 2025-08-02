import InformationSection from "../components/InformationSection";
import styles from './Social.module.css';
import SectionHeading from "../components/SectionHeading";
// Example: import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import icons from react-icon
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/pranav-katiyar",
    icon: <FaGithub className={styles.socialLinkIcon} />,
    text: "Some of my public projects and contributions.",
    username: "pranav-katiyar",
  },
//   {
//     name: "X",
//     url: "https://twitter.com/yourusername",
//     icon: <FaTwitter className={styles.socialLinkIcon} />,
//     text: "Tech thoughts and updates.",
//     username: "pranavkatiyar",
//   },
  {
    name: "Instagram",
    url: "https://instagram.com/pranavkatiyar",
    icon: <FaInstagram className={styles.socialLinkIcon} />,
    text: "Photography, faison, fiteness and more.",
    username: "pranavkatiyar"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pranavkatiyar",
    icon: <FaLinkedin className={styles.socialLinkIcon} />,
    text: "Professional profile and career updates.",
    username: "pranavkatiyar"
  },
];

function Social() {
  return (
    <InformationSection>
      <SectionHeading>Social Information</SectionHeading>
      <div className={styles.socialContent}>
        {socialLinks.map(link => (
          <div className={styles.socialCard} key={link.name}>
            {/* open link in new tab */}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.icon}
              <span>{link.name}</span>
              <span className={styles.socialLinkText}>{link.text}</span>
            </a>
          </div>
        ))}
      </div>
    </InformationSection>
  );
}

export default Social;