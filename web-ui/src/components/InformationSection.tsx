import defaultStyle from './InformationSection.module.css';
import '../styles/Common.css'

function InformationSection({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`${defaultStyle.informationSection} ${className}`}>
            {children}
        </div>
    );
}

export default InformationSection;