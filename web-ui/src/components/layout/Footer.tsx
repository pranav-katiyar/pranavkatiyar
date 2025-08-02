import styles from './Footer.module.css';
import { FaAws } from "react-icons/fa";
import { RiCopilotFill } from 'react-icons/ri';
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built with ❤️ | Deployed on AWS <FaAws size={16} /> | Assisted by Copilot <RiCopilotFill size={16} /></p>
      <p>&copy; {new Date().getFullYear()} Pranav Katiyar</p>
    </footer>
  );
}

export default Footer;