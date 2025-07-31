import style from './Header.module.css';
import '../../styles/Common.css';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.header__profilePicture}>
                <img src="profile.jpg" alt="Profile" />
            </div>
            <div className={style.header__userName}>
                <h2>Pranav Katiyar</h2>
            </div>
            <div className={style.header__summary}>
                <p>
                    I am a software engineer with a passion for building scalable and efficient applications. I love exploring new technologies and continuously improving my skills.
                </p>
            </div>
            <div className={style.header__tags}>
                <span className="tag">Software Engineer</span>
                <span className="tag">Web Developer</span>
                <span className="tag">Open Source Contributor</span>
                <span className="tag">Tech Enthusiast</span>
            </div>
        </div>
    );
}

export default Header;