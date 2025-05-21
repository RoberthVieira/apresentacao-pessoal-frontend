import styles from './AboutMe.module.css';

import Skills from './Skills';
import Projects from './Projects';

export default function AboutMe() {
    return (
        <section className={styles.aboutContainer}>
            <h2>Skills e Projetos</h2>
            <div className={styles.aboutContent}>
                <Skills/>
                <Projects/>
            </div>
        </section>
    )
}