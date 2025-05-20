import { useContext } from "react";
import './App.css'

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';

function App() {

   const { tema } = useContext(ThemeContext);

  return (
    <>
      <main className={tema}>
        <Header/>
      </main>
    </>
  );
}

export default App
