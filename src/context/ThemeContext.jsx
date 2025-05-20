import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {

    const [tema, setTema] = useState('tela_claro');

    return(
        <ThemeContext.Provider value={{ tema, setTema }}>
            {children}
        </ThemeContext.Provider>
    )
}