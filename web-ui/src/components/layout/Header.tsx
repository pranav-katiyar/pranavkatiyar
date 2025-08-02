import style from './Header.module.css';
import '../../styles/Common.css';
import { FaCircle } from 'react-icons/fa';

const tags = [
    "Engineering Manager",
    "Python",
    "React",
    "GenAI",
    "Platform Engineering",
    "Agile",
]

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
                <strong>Perofessional Snapshot: </strong>
                <p>                    
                    Results-driven Engineering Manager with 6+ years of experience leading cross-functional teams in delivering scalable, cloud-native solutions. Skilled in system architecture on AWS and GCP, Agile project management, and stakeholder communication. Combines hands-on expertise in Python, React, IaC, and GenAI with a strong focus on technical excellence, security, and performance.
                    <br /><br />
                </p>
                <strong>Personal Snapshot: </strong>
                <p>
                    An extrovert who thrives on positive energy, remote work, and culinary creativity. Passionate about fitness, music (especially the flute), cats, and sci-fi. A vegan tech enthusiast with a love for gadgets, quantum science, and global travel.
                </p>
            </div>
            <div className={style.header__tags}>
                {tags.map((tag, index) => (
                    <span key={index} className='tag'>{tag}</span>
                ))}
            </div>
            {/* open to opportunities section */}
            <div className={style.header__openToOpportunities}>
                <p>
                    <FaCircle color="green"/> <strong>Open to opportunities</strong> in Engineering Management, Platform Engineering, and GenAI. Passionate about mentoring, team building, and driving innovation in tech. Let's <a href="mailto:pcpranav81@gmail.com">connect!</a>
                </p>
            </div>
        </div>
    );
}

export default Header;