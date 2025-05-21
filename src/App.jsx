import { useContext } from "react";
import './App.css'

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {

   const { tema } = useContext(ThemeContext);

  return (
    <>
      <main className={tema}>
        <Header/>
        <AboutMe/>
        <Footer/>
      </main>
    </>
  );
}

export default App
