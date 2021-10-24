import React from 'react'
import { Link } from 'react-router-dom'
import { useUserRol } from 'contexto/UserContextRol';// import del contexto que me guarda toda la informacion del usuario recien inicio sesion

const PrivateRoute = ({ listaRoles, children }) => {// me permite bloquear las rutas hijas 
  // es decir las rutas dentro o envueltas entre este componente PrivateRoute y pasandole un prop 
  // de listaRoles es una lista de String donde cada palabra representa el rol permitido para ver la pagina o ruta 
  const { userRol } = useUserRol();// traigo la informacion guardada en el contexto donde esta la informacion del usuario 
  // y puedo saber cual es el rol de ese usuario 

  // console.log('soy el contexto userRol = ', userRol);

  if (listaRoles.includes(userRol.rol)) { //si en el value de la key del objeto userRol el cual 
    // es la informacion del usuario es el objeto usuario, incluye una de la palbras de la listaRoles 
    // entonces mueste el componente hijo si no, no lo muestres y me muestra el mensaje No estas autenticado no puedes estar aqui!!!

    return children;
  }
  return (
    <>
      <div className='text-9xl text-center flex flex-col bg-blue-300 h-screen'>
        {userRol.rol.includes('Vendedor') ?
          (
            <span className='m-5 '>
              No estas autorizado para ingresar en este sitio 
            </span>
          )
          :(
            <span className='m-5 '>
              Tu Estado y Rol aun no estan definidos no puedes estar aqui
            </span>
          )
        }
        <Link to='/'>
          <button
            className='border rounded-xl border-gray-700 bg-blue-500 p-3 mb-1  
      hover:bg-blue-700 m-7 text-white'>
            {/* <i className='fas fa-sign-in-alt ' /> {/*String literal* como meter una variable es un strig 
            Iniciar Sesión */}
          </button>
        </Link>
      </div>
    </>
  )
};

export default PrivateRoute




// const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  // const { setUserRol } = useUserRol();// contexto donde guardare los roles de mis usuarios para la restriccion de 
  // // componentes o paginas

  // useEffect(() => {
  //   // funcion que trae el token desde auth0
  //   const fetchAuth0Token = async () => {
  //     const accessToken = await getAccessTokenSilently({ // me trae un token nuevo (jwt) de acceso cada ves que esta funcion se ejecute 
  //       //getAccessTokenSilently me pide el token a Auth0
  //       audience: `api/autenticacion/web/trading/project`,
  //     });

  //     localStorage.setItem('token', accessToken); // me permite guardar el token en el local storage para luego acceder desde otras partes 
  //     console.log('token de autenticacion enviado desde auth0 =  ', accessToken);// me imprime el token (jwt) en consola el toquen esta guardado en accerToken 
  //     // hay tres estrategias para usar el token la primera estrategia es guardarlo en el almacenamiento de la aplicacion 
  //     // este es local Storage
  //     // la segunda es guardarlo en los cookies y sea transferible al resto de sesiones que esten dentro del mismo dominio 
  //     // la tercera es meterlo en un context pero esto tiene un problema que los context solo puedo accederlos desde componentes de react 
  //     // y las funciones del api axios no son componentes de react entonces tendria que pasar los token como parametros de estas funciones 



  //     // envio el token enriquecido al backend 
  //     await obtenerUsuarioAutenticado(
  //       (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function

  //         console.log('SI.........FUNCIONO LA PETICION GET de obtenerUsuarioAutenticado !!! !!!', response);
  //         setUserRol(response.data)// guardo en el estado del contexto los datos del usuario que esta 
  //         // usando la aplicacion en ese momento, guardo todo la informacion del usuario que ingresa a la 
  //         // aplicacion 
  //       },
  //       (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
  //         console.error("Salio un error con la peticion Get obtenerUsuarioAutenticado", error);
  //         console.log('NO.........FUNCIONO LA PETICION GET obtenerUsuarioAutenticado!!! !!!');

  //       })
  //     //necesitamos guarda el token para que sea usado en todos los request con axios para ello lo guardaremos en el Local Storage

  //   }

  //   if (isAuthenticated) {// ahora si esta bien esto me permite traer y pedir un nuevo toquen cada vez que el usuario 
  //     // inicie sesion dado que fetchAuth0Token al ejecutarse pide un nuevo token 

  //     fetchAuth0Token(); // necesitamos que esta funcion que trae el token lo traiga despues de que la autenticacion del usuario 
  //   }
  //   // persona ya este aunteticada asi como esta esta mal lo trae sin estar autenticada el usuario se corrige si poniendo 
  //   // un if preguntando por isAuthenticated si es true ejecute esta funcion si no no pero se debe escuchar ese 
  //   // estado de isAuthenticated

  // }, [isAuthenticated, getAccessTokenSilently]);


  // if (isLoading) { // mostrar un mensaje mientras se autentica el usuario 
  //   return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />

  // }

  // return isAuthenticated ? <>{children}</> : // si esta auntenticado puede entrar a la pagina children si no no 
  //   <div className='text-9xl text-center flex flex-col bg-blue-300 h-screen'>
  //     <span className='m-5 '>
  //       No estas autenticado no puedes estar aqui!!!
  //     </span>

  //     <Link to='/'>
  //       <button
  //         className='border rounded-xl border-gray-700 bg-blue-500 p-3 mb-1  
  //     hover:bg-blue-700 m-7 text-white'>
  //         <i className='fas fa-sign-in-alt ' /> {/*String literal* como meter una variable es un strig */}
  //         Iniciar Sesión
  //       </button>
  //     </Link>

  //   </div>



  //   isAuthenticated && (
  //     <div>
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //     </div>
  //   )
