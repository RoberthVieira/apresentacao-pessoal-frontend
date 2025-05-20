import { useContext } from "react";
import './App.css'

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';
import AboutMe from "./components/AboutMe";

function App() {

   const { tema } = useContext(ThemeContext);

  return (
    <>
      <main className={tema}>
        <Header/>
        <AboutMe/>
      </main>
    </>
  );
}

export default App
