import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    // funcion que trae el token desde auth0
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({ // me trae un token nuevo (jwt) de acceso cada ves que esta funcion se ejecute 

        audience: `api/autenticacion/web/trading/project`,
      });

      //necesitamos guarda el token para que sea usado en todos los request con axios para ello lo guardaremos en el Local Storage
localStorage.setItem('token',accessToken); // me permite guardar el token en el local storage

      console.log('token de autenticacion enviado desde auth0 =  ', accessToken);// me imprime el token (jwt) en consola el toquen esta guardado en accerToken 
      // hay tres estrategias para usar el token la primera estrategia es guardarlo en el almacenamiento de la aplicacion 
      // este es local Storage
      // la segunda es guardarlo en los cookies y sea transferible al resto de sesiones que esten dentro del mismo dominio 
      // la tercera es meterlo en un context pero esto tiene un problema que los context solo puedo accederlos desde componentes de react 
      // y las funciones del api axios no son componentes de react entonces tendria que pasar los token como parametros de estas funciones 
    }

    if (isAuthenticated) {// ahora si esta bien esto me permite traer y pedir un nuevo toquen cada vez que el usuario 
      // inicie sesion dado que fetchAuth0Token al ejecutarse pide un nuevo token 

      fetchAuth0Token(); // necesitamos que esta funcion que trae el token lo traiga despues de que la 
    }
    // persona ya este aunteticada asi como esta esta mal lo trae sin estar autenticada el usuario se corrige si poniendo 
    // un if preguntando por isAuthenticated si es true ejecute esta funcion si no no pero se debe escuchar ese 
    // estado de isAuthenticated

  }, [isAuthenticated,getAccessTokenSilently]);


  if (isLoading) { // mostrar un mensaje mientras se autentica el usuario 
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? <>{children}</> : // si esta auntenticado puede entrar a la pagina children si no no 
    <div className='text-9xl text-center flex flex-col bg-blue-300 h-screen'>
      <span className='m-5 '>
        No estas autenticado no puedes estar aqui!!!
      </span>

      <Link to='/'>
        <button
          className='border rounded-xl border-gray-700 bg-blue-500 p-3 mb-1  
      hover:bg-blue-700 m-7 text-white'>
          <i className='fas fa-sign-in-alt ' /> {/*String literal* como meter una variable es un strig */}
          Iniciar Sesión
        </button>
      </Link>

    </div>



  //   isAuthenticated && (
  //     <div>
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //     </div>
  //   )

}

export default PrivateRoute
