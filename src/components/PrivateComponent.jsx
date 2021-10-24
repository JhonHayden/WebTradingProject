import { useUserRol } from 'contexto/UserContextRol';
import React from 'react'

const PrivateComponent = ({ listaRoles, children }) => {

    const { userRol } = useUserRol();// traigo la informacion guardada en el contexto donde esta la informacion del usuario 
    // y poder saber cual es el rol de ese usuario 

    // console.log('soy el contexto userRol = ',userRol);


    if (listaRoles.includes(userRol.rol)) {

        return children;
    }

    return (
        <>

        </>
    )
};

export default PrivateComponent