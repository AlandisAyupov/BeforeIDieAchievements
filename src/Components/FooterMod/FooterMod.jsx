import styles from "./FooterMod.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FooterMod = () => {
  return (
    <div className={styles["footer-mod"]}>
      <p>Made with <FontAwesomeIcon icon={faHeart} beatFade /> by the Before I Die Community</p>
      <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements">Link to GitHub</a>
    </div>
  );
}

export default FooterMod;