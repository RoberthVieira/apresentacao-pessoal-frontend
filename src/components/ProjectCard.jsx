import styles from './ProjectCard.module.css';

export default function ProjectCard({nameProject, imgProject, description, linksRepositorio, linksProject}) {
    return(
        <div className={styles.projectCard}>
            <img src={imgProject} alt={nameProject} />
            <div className={styles.infoCard}>
                <h3>{nameProject}</h3>
                <p>{description}</p>
                <div className={styles.linksProjects}>
                    <a href={linksRepositorio} target='_blank'>Repositório</a>
                    <a href={linksProject} target='_blank'>Demo</a>
                </div>
            </div>
        </div>
    )
}