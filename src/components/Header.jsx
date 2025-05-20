import styles from './Header.module.css';
import HeaderBar from './HeaderBar';
import Description from './Description';
export default function Header(){
    return (
        <header className={styles.headerContainer}>
            <HeaderBar/>
            <div className={styles.intro}>
                <h1 className={styles.title}>Olá eu sou o Roberth!</h1>
                <h3 className={styles.subtitle}>Bem-vindo à minha página.</h3>
            </div>
            <Description/>
        </header>
    )
}