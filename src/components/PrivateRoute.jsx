import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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
