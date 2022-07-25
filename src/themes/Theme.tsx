import { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { dark } from "./dark";
import { light } from "./light";

export enum ThemeType {
    light = 'light',
    dark = 'dark'

}

const themes = {
    dark: dark,
    light: light
}

export const ThemeContext = createContext({
    theme:ThemeType.dark,
    toggleTheme: () => {},

})


export const ThemeProvider: React.FC = ({children}) =>{
    const [theme, setTheme] = useState(ThemeType.dark);

    function toggleTheme(){
        if(theme == ThemeType.dark){
            setTheme(ThemeType.light)
        }else{
            setTheme(ThemeType.dark)
        }
    }
        return(
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <ThemeProviderStyled theme={themes[theme]} >
                    {children}
                </ThemeProviderStyled>
            </ThemeContext.Provider>
        )
}