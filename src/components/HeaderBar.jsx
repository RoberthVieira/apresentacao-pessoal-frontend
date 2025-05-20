import styles from './HeaderBar.module.css';

import Logo from '../assets/logo.png';
import { FaSun, FaMoon } from 'react-icons/fa'; 

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import Button from "./Button";

export default function HeaderBar() {

    const { tema, setTema } = useContext(ThemeContext);

    function trocarTema() {
       setTema(tema === 'tela_claro' ? 'tela_escuro' : 'tela_claro')
    }

    return (
        <nav className={styles.navContainer}>
            <img src={Logo} alt="Logo" width='40'/>
            <Button
                onClick={trocarTema}
                className={styles.btnTema}
                textBtn={tema === 'tela_claro' ? <FaMoon size={25}/> : <FaSun size={25} color='white'/>}
            />
        </nav>
    )
}