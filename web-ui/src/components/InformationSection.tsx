import style from './InformationSection.module.css';
import '../styles/Common.css'

function InformationSection({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.informationSection}>
            {children}
        </div>
    );
}

export default InformationSection;