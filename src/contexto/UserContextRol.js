import  {createContext,useContext} from 'react';

// nos permite y son muy utiles para tener a lo largo de toda la aplicacion  la informacion del usuario que ingreso a la
// aplicacion por que me guarda la informacion de este usuario globalmente y se puede usar en todos los hijos 
// tambien me permite manejar token de autenticacion 
// esto mismo de la autenticacion se puede hacer con cokies 
// otra opcion es redux para manejar estados globales 

// practicamente estamos creando y personalizando un hook para ser usado globalmente 
// es decir tiene el estado y el setEstado ( userRol, setUserRol) pero para usarlo necesito de un Provider
// UserContextRol.Provider ( <UserContextRol.Provider value={{ userRol, setUserRol }}> )
export const UserContextRol = createContext(null); // permite crear el contexto la variable o estado global 


// me permite tener un estado global  para todos los hijos sin necesidad de ir pasandolos de prop en prop si no 
// directo con el context
// es un estado global 
// codigo para  crear un contexto siempre es este mismo, le puedo cambiar a cualquier nombre este ejemplo se llamo UserContextRol


export const useUserRol = () => {  // permite usar el contexto  
    return useContext(UserContextRol);
    
}
