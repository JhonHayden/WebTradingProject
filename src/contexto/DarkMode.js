import  {createContext,useContext} from 'react';
export const DarkModeContext = createContext(null); 

// codigo para  crear un contexto siempre es este mismo le puedo cambiar a cualquier nombre este ejemplo se llamo DarkModeContext


export const useDarkMode = () => {
    return useContext(DarkModeContext);
    
}