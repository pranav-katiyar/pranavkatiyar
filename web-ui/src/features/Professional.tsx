import InformationSection from "../components/InformationSection";
import styles from './Professional.module.css';
import SectionHeading from "../components/SectionHeading";

const experienceData = [
    {
        title: "Engineering Management Master",
        company: "HashedIn by Deloitte",
        duration: "October 2023 - Current",
        responsibilities: [
            "Spearheaded multiple engineering teams in the development of innovative, cloud-based solutions.",
            "Led a team of 10 in developing a climate risk visualization tool on GCP.",
            "Managed a 6-person team focused on GenAI proofs-of-concept.",
            "Directed a 4-person team to build a data access platform for autonomous vehicle research data.",
            "Guided a team of 7 engineers in developing a complex platform for the aviation industry."
        ]
    },
    {
        title: "Senior Engineering Management Specialist",
        company: "HashedIn by Deloitte",
        duration: "July 2021 - October 2023",
        responsibilities: [
            "Grew and managed two platform teams with a combined size of 15 members.",
            "Trained and mentored team members, establishing reusable code libraries and robust CI/CD pipelines.",
            "Led a 5-developer team to deliver a proof-of-concept for a customer contact center."
        ]
    },
    {
        title: "Senior Software Engineer-I",
        company: "HashedIn by Deloitte",
        duration: "July 2020 - July 2021",
        responsibilities: [
            "Architected the 'DNA Tools' internal application suite from the ground up.",
            "Designed and implemented infrastructure-as-code using AWS CDK.",
            "Established a monorepo architecture and sophisticated Git branching strategy."
        ]
    },
    {
        title: "Software Engineer",
        company: "HashedIn by Deloitte",
        responsibilities: [
            "Contributed to the backend development of a client-facing application.",
            "Implemented a secure Single Sign-On (SSO) solution from scratch."
        ]
    },
    {
        title: "Intern",
        company: "HashedIn by Deloitte",
        responsibilities: [
            "Co-developed 'Office Mate,' a G-Chat bot for internal operations."
        ]
    }
];

const skillsData = [
    "GCP (Cloud Run, Cloud Functions, Cloud SQL)",
    "Python (Flask, asyncio, Django)",
    "GenAI (Vertex AI, OpenAI)",
    "React",
    "Docker",
    "Monorepo",
    "GitHub Actions",
    "AWS (EC2, Lambda, API Gateway, Cognito, S3, Connect)",
    "AWS CDK",
    "PostgreSQL",
    "Redis",
    "Jira"
];

const achievementsData = [
    "Successfully led multiple teams to deliver complex projects under tight deadlines.",
    "Enhanced team expertise in GenAI and cloud technologies through focused training and mentorship.",
    "Improved system security, cost-efficiency, and performance for internal enterprise tools.",
    "Established foundational processes and reusable code libraries that improved development efficiency."
];

/*
 Swaraj India Public School (ICSE)
 10th
 Sir Padampat Singhania Education Center (CBSE)
 12th
 Cambridge Institute of Technology (VTU)
 BE - CSE
 April 2011 - April 2012
 71.3%
 April 2013 - April 2014
 83.2%
 June 2015 - July 2019
 8.15 CGP*/

const educationData = [
    {
        degree: "10th",
        institution: "Swaraj India Public School (ICSE)",
        duration: "April 2011 - April 2012",
        score: "71.3%"
    },
    {
        degree: "12th",
        institution: "Sir Padampat Singhania Education Center (CBSE)",
        duration: "April 2013 - April 2014",
        score: "83.2%"
    },
    {
        degree: "BE - CSE",
        institution: "Cambridge Institute of Technology (VTU)",
        duration: "June 2015 - July 2019",
        score: "8.15 CGPA"
    }
];

function Professional() {
    return (
        <InformationSection>
            <SectionHeading>Professional Information</SectionHeading>
            <div className={styles.professionalContent}>
                <div className={styles.experience}>
                    <div className={styles.timeline}>
                        <p className={styles.timelineTitle}>Experience</p>
                        <ul className={styles.timelineList}>
                            {experienceData.map((experience, index) => (
                                <li key={index} className={styles.timelineItem}>
                                    <div className={styles.timelineContent}>
                                        <strong>{experience.title}</strong> at {experience.company} ({experience.duration})
                                        <ul>
                                            {experience.responsibilities.map((responsibility, idx) => (
                                                <li key={idx}>{responsibility}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT: Tech, Achievements, Education */}
                <div className={styles.otherProfessionalInfo}>
                    <div className={styles.sectionBlock}>
                        <h3>Key Technologies</h3>
                        <div className={styles.cardBox}>
                            <ul>
                                {skillsData.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className={styles.sectionBlock}>
                        <h3>Achievements</h3>
                        <div className={styles.cardBox}>
                            <ul>
                                {achievementsData.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.sectionBlock}>
                        <h3>Education</h3>
                        <div className={styles.cardBox}>
                            <ul>
                                {educationData.map((education, index) => (
                                    <li key={index}>
                                        <strong>{education.degree}</strong> {education.institution} ({education.duration})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </InformationSection>
    );
}

export default Professional;
