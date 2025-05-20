import styles from './Skills.module.css';

export default function Skills(){
    return(
        <div className={styles.skillsContainer}>
            <aside className={styles.skillsContentList}>
                <ul className={styles.skillsList}>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.15.1/icons/html5/html5-original.svg" width="50" alt="HTML" />
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.15.1/icons/css3/css3-original.svg" width="50" alt="CSS" />
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.15.1/icons/javascript/javascript-original.svg" width="50" alt="JavaScript" />
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.15.1/icons/react/react-original.svg" width="50" alt="React" />
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.15.1/icons/nextjs/nextjs-original.svg" width="50" alt="Next.js" />
                    </li>
                    <li>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.15.1/icons/git/git-original.svg" width="50" alt="Git" loading='lazy'/>
                    </li>
                </ul>
            </aside>
            <div className={styles.skillsContentDescription}>
                <p>
                    Aqui está um pouco sobre minha experiência: ao longo do tempo, fui me aprofundando no desenvolvimento de interfaces usando HTML, CSS e JavaScript, e com o tempo fui integrando ferramentas como React e Next.js no meu fluxo. Gosto de criar projetos que unam estética e funcionalidade, com código limpo e um visual que faça sentido para quem usa.
                </p>
                <p>
                    Utilizo o Git para manter tudo bem organizado e versionado, o que me ajuda muito na evolução contínua dos projetos. Um exemplo disso é meu portfólio, onde reuni de forma simples e direta minhas principais criações e conhecimentos. Também desenvolvi um Checklist de Viagem Inteligente, uma aplicação que sugere itens com base no clima e local da viagem — além de permitir personalizações como marcar itens ou deixar observações.
                </p>
                <p>
                    Mais do que empilhar tecnologias, gosto de ver as ideias tomando forma e se transformando em soluções práticas.
                </p>
            </div>
        </div>
    )
}