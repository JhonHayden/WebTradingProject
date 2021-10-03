import React, { useEffect } from "react";


// aprenderemos a usar el useEffect 
const ComponentUseEffect = () => {

    useEffect(() => {

        console.log("hola mundo  soy un useEffect vacio, me ejecuto solo una vez cuando la pagina se renderiza por que tiene el array de dependecias vacio "
        );

    }, []);


    return (
        <div>

        </div>
    )
}

export default ComponentUseEffect
