import React, { useState, useEffect } from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import NavBarResponsive from 'components/NavBarResponsive'
import { obtenerUsuarioAutenticado } from 'utils/api'; // permite usar la api el codigo axios de peticion y envio de 
// usuario recien autenticado si es valido el token o no  
import { useUserRol } from 'contexto/UserContextRol';// import del contexto que me guarda toda la informacion del usuario recien inicio sesion
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';//  permite colocar el componente de loading (espera de carga) 


const PrivateLayout = ({ children }) => {

    const { user, isAuthenticated, isLoading,logout, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    const [loadingUserInformation, setLoadingUserInformation] = useState(false);// me permite mostrar un loading antes de que se pida 
    // el token al auth0 y quitarlo cuando el backend ya valido que el usuario es valido es decir el token es permitido por Auth0

    const { setUserRol } = useUserRol();// contexto donde guardare los roles de mis usuarios para la restriccion de 
    // componentes o paginas

    useEffect(() => {
        // funcion que trae el token desde auth0
        const fetchAuth0Token = async () => {

            setLoadingUserInformation(true);// para mostrar el loading justo antes de pedir el token 
            const accessToken = await getAccessTokenSilently({ // me trae un token nuevo (jwt) de acceso cada ves que esta funcion se ejecute 
                //getAccessTokenSilently me pide el token a Auth0
                audience: `api/autenticacion/web/trading/project`,
            });

            localStorage.setItem('token', accessToken); // me permite guardar el token en el local storage para luego acceder desde otras partes 
            console.log('token de autenticacion enviado desde auth0 =  ', accessToken);// me imprime el token (jwt) en consola el toquen esta guardado en accerToken 
            // hay tres estrategias para usar el token la primera estrategia es guardarlo en el almacenamiento de la aplicacion 
            // este es local Storage
            // la segunda es guardarlo en los cookies y sea transferible al resto de sesiones que esten dentro del mismo dominio 
            // la tercera es meterlo en un context pero esto tiene un problema que los context solo puedo accederlos desde componentes de react 
            // y las funciones del api axios no son componentes de react entonces tendria que pasar los token como parametros de estas funciones 



            // envio el token enriquecido al backend 
            await obtenerUsuarioAutenticado(
                (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function

                    console.log('SI.........FUNCIONO LA PETICION GET de obtenerUsuarioAutenticado !!! !!!', response);
                    setUserRol(response.data)// guardo en el estado del contexto los datos del usuario que esta 
                    // usando la aplicacion en ese momento, guardo todo la informacion del usuario que ingresa a la 
                    // aplicacion
                    setLoadingUserInformation(false)//para quitar el loading justo despues de obtener la validacion e informacion del 
                    // token del usuario que recien inicio sesion 
                },
                (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
                    console.error("Salio un error con la peticion Get obtenerUsuarioAutenticado", error);
                    console.log('NO.........FUNCIONO LA PETICION GET obtenerUsuarioAutenticado!!! !!!');

                    logout({ returnTo: window.location.origin });
                    localStorage.setItem('token', null); // me permite borrar del local Storage el token cada vez que se cierre sesion 
                    setLoadingUserInformation(false)//para quitar el loading justo despues de obtener un error de la validacion del 
                    // token del usuario que recien inicio sesion 

                })
            //necesitamos guarda el token para que sea usado en todos los request con axios para ello lo guardaremos en el Local Storage

        }

        if (isAuthenticated) {// ahora si esta bien esto me permite traer y pedir un nuevo toquen cada vez que el usuario 
            // inicie sesion dado que fetchAuth0Token al ejecutarse pide un nuevo token 

            fetchAuth0Token(); // necesitamos que esta funcion que trae el token lo traiga despues de que la autenticacion del usuario 
        }
        // persona ya este aunteticada asi como esta esta mal lo trae sin estar autenticada el usuario se corrige si poniendo 
        // un if preguntando por isAuthenticated si es true ejecute esta funcion si no no pero se debe escuchar ese 
        // estado de isAuthenticated

    }, [isAuthenticated, getAccessTokenSilently]);

    if (isLoading || loadingUserInformation) { // mostrar un mensaje mientras se autentica en Auth0 el usuario, o mientras se esta validando 
        // el token 
        // con esto garantizo que cuando ingrese al sistema o aplicacion ya tengo la autenticacion de usuario como el token validado 
        // esta validacion me pertime estar seguro que cuando entre a la aplicacion ya tenga el token y en el los roles y asi poder restringir 
        // permisos 
        return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />

    }


    if (!isAuthenticated) {

        return loginWithRedirect();
    }


    return (

        <div className='flex flex-col justify-between h-screen '>
            <Navbar />
            <NavBarResponsive />

            <div className='h-full'>
                <main className='h-full flex justify-center bg-white'>
                    {children}
                </main>
                <Footer />
            </div>
        </div>

    )
}

export default PrivateLayout

// if (isLoading) { // mostrar un mensaje mientras se autentica el usuario 
//     return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />

//   }

//   return isAuthenticated ? <>{children}</> : // si esta auntenticado puede entrar a la pagina children si no no 
//     <div className='text-9xl text-center flex flex-col bg-blue-300 h-screen'>
//       <span className='m-5 '>
//         No estas autenticado no puedes estar aqui!!!
//       </span>

//       <Link to='/'>
//         <button
//           className='border rounded-xl border-gray-700 bg-blue-500 p-3 mb-1  
//       hover:bg-blue-700 m-7 text-white'>
//           <i className='fas fa-sign-in-alt ' /> {/*String literal* como meter una variable es un strig */}
//           Iniciar Sesión
//         </button>
//       </Link>

//     </div>

