import {createContext, useState} from 'react';

export  const ThemeContext = createContext();

export function ContextWrapper ({children}){

    const [color, setColor] = useState(true);

    return(
        <ThemeContext.Provider value={[color, setColor]}>
            {children}
        </ThemeContext.Provider>
    )
}