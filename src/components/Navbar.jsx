import useActiveRoute from 'hooks/useActiveRoute'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './componentesVentas/ImagenLogo'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { user, logout } = useAuth0();

    useEffect(() => {
        // console.log('user = ', user);

    }, [])

    const cerrarSesion = () => {

        logout({ returnTo: window.location.origin });
        localStorage.setItem('token', null); // me permite borrar del local Storage el token cada vez que se cierre sesion 
    }


    return (
        <div>
            <nav className='bg-blue-400 '>
                <ul className='hidden md:flex justify-between  ml-2 mr-2 text-white pt-2'>
                    <li className='text-2xl'>
                        <Link to='/administracion'>
                            <ImagenLogo />
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <BotonRuta nombre='Productos' ruta='/administracion/moduloproductos' />
                    </li>
                    <li className='text-2xl'>
                        <BotonRuta nombre='Ventas' incono='fas fa-money-bill' ruta='/administracion/moduloventas' />
                    </li>
                    <li className='text-2xl'>
                        <BotonRuta nombre='Usuarios' incono='fas fa-users' ruta='/administracion/moduloUsuario' />
                    </li>
                    <li className='text-2xl flex '>
                        {/* <button
                            className='border rounded-xl border-gray-700 blue-800  blue-500 p-3  
                                        flex-colhover:bg-blue-600'
                            onClick={() => loginWithRedirect()}>
                            <i className='fas fa-sign-in-alt' /> {/*String literal* como meter una variable es un strig 
                        </button> */}
                        <div className='flex m-1 '>
                            <img src={user.picture} alt={user.name} className='w-min h-9 mr-1 rounded-full' />
                            {/* <i className='fas fa-user m-2' /> */}
                            <span className='m-1'>

                                {user.name}
                            </span>

                        </div>
                        {/* <Link to='/'> */}
                            <button
                                className='border rounded-xl border-gray-700  p-3 bg-blue-500 hover:bg-blue-600 '
                                onClick={() => cerrarSesion()}
                            >
                                <i className='fas fa-sign-out-alt' />
                                <span className='pl-2'>
                                    Cerrar Sesión
                                </span>
                            </button>
                        {/* </Link> */}
                    </li>
                </ul>

            </nav>

        </div >
    )
}

// componente 
const BotonRuta = ({ incono, ruta, nombre }) => {

    // uso del hook personalizado useActiveRoute en donde lo quiera usar debo llamarlo y asignarlo a una variable 
    const isRutaActiva = useActiveRoute(ruta); //Hook personalizado



    // const marcarLocacionEnUso = useLocation(); // me permite poder saber la pagina actual en la que estoy visitando
    //todo lo que me devuelve los hook cuando los uso son funciones o estados y este hook useLocation me devuelve un 
    // objeto que es un estado si quiero imprimir estados  simpre tengo que hacerlo dentro de un useEffect
    // para ver cuando estos estados estan cambiando uso el useEffect 
    // const [isRutaActiva, setIsRutaActiva] = useState(false)

    // useEffect(() => {
    //     console.log(marcarLocacionEnUso, ruta);

    //     if (marcarLocacionEnUso.pathname.includes(ruta)) {
    //         setIsRutaActiva(true);

    //     } else {
    //         setIsRutaActiva(false);
    //     }

    // }, [marcarLocacionEnUso, ruta])//cada ves que cambia marcarLocacionEnUso me ejecuta las instrucciones dentro del useEffect 
    // marcarLocacionEnUso tendra almacenado la ruta de la pagina que esta siendo visitada y otras propiedades: 
    //hash: ""
    // key: "0u347g"
    // pathname: "/administracion"
    // search: ""
    // state: undefined 



    useEffect(() => {

        // console.log(isRutaActiva, ruta)
    }, [isRutaActiva, ruta])
    return (
        <Link to={ruta}>
            <button className={`border rounded-xl border-gray-700 bg-${isRutaActiva ? 'blue-800' : 'blue-500'} p-3  
            hover:bg-blue-600 `}>
                <i className={`${incono}`} /> {/*String literal* como meter una variable es un strig */}
                <span className='pl-2'>
                    {nombre}
                </span>
            </button>
        </Link>
    );
};

export default Navbar;
