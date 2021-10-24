import { useState, useEffect } from 'react'
import { useLocation } from 'react-router';

// presonalizacion y creacion de un hook propio con parametro de entrada que es la ruta 

const useActiveRoute = (ruta) => {
    const marcarLocacionEnUso = useLocation(); // me permite poder saber la pagina actual en la que estoy visitando
    //todo lo que me devuelve los hook cuando los uso son funciones o estados y este hook useLocation me devuelve un 
    // objeto que es un estado si quiero imprimir estados  simpre tengo que hacerlo dentro de un useEffect
    // para ver cuando estos estados estan cambiando uso el useEffect 
    const [isRutaActiva, setIsRutaActiva] = useState(false)// estado de control para saber si esta activa la ruta o no 
    // y asi hacer tareas que quiera hacer 

    useEffect(() => {
        // console.log(marcarLocacionEnUso, ruta);

        if (marcarLocacionEnUso.pathname.includes(ruta)) { // pendiente no se como excluir la ruta de login el cual 
            // es '/' entonces esta se incluye y es verdadero  

                setIsRutaActiva(true);
            
        } else {
            setIsRutaActiva(false);
        }

    }, [marcarLocacionEnUso, ruta])//cada ves que cambia marcarLocacionEnUso me ejecuta las instrucciones dentro del useEffect 
    // marcarLocacionEnUso tendra almacenado la ruta de la pagina que esta siendo visitada y otras propiedades: 
    //hash: ""
    // key: "0u347g"
    // pathname: "/administracion"
    // search: ""
    // state: undefined 
    return isRutaActiva;
};

export default useActiveRoute
