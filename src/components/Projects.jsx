import styles from './Projects.module.css';
import Portifolio from '../assets/portifolio.png';
import Checklist from '../assets/checklist.png';

import ProjectCard from './ProjectCard';

export default function Projects(){
    return(
        <div className={styles.projectsContainer}>
            <ProjectCard
                nameProject='Portifolio Pessoal Roberth Vieira'
                imgProject={Portifolio}
                description='Portfólio Pessoal Roberth Vieira é um site desenvolvido para apresentar meus principais projetos, habilidades e trajetória como desenvolvedor. Criado com HTML, CSS e JavaScript, o portfólio tem um layout responsivo, navegação simples e foco na clareza das informações, oferecendo uma vitrine profissional para oportunidades e conexões na área de tecnologia.'
                linksRepositorio='https://github.com/RoberthVieira/Portifolio-RoberthVieira'
                linksProject='https://portifolio-roberth-vieira.vercel.app/'
                
            />
            <ProjectCard
                nameProject='Checklist de Viagem Inteligente'
                imgProject={Checklist}
                description='Projeto em Next.js que cria checklists de viagem personalizados com base no clima da cidade, utilizando a API do OpenWeatherMap. Exibe dados como temperatura e vento, e sugere itens conforme o clima. O usuário pode marcar itens, adicionar novos e salvar múltiplos checklists. Dados são persistidos no localStorage. Utiliza React Hooks, CSS Modules, Lucide React e React Icons.'
                linksRepositorio='https://github.com/RoberthVieira/Checklist-Viagem-Inteligente'
                linksProject='https://checklist-viagem-inteligente-tc94.vercel.app/'
            />
        </div>
    )
}