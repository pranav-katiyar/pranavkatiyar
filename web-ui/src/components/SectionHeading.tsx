import style from './SectionHeading.module.css';

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className={style.sectionHeading}>{children}</h2>
    );
}

export default SectionHeading;