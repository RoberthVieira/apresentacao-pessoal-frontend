import styles from './AboutMe.module.css';
import Skills from './Skills';

export default function AboutMe() {
    return (
        <section className={styles.aboutContainer}>
            <h2>Skills e Projetos</h2>
            <div className={styles.aboutContent}>
                <Skills/>
            </div>
        </section>
    )
}