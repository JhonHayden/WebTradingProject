import useActiveRoute from 'hooks/useActiveRoute'
import React, { useEffect } from 'react'
import { Link  } from 'react-router-dom'
import ImagenLogo from './componentesVentas/ImagenLogo'

const Navbar = () => {
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
                    <li className='text-2xl'>
                        < BotonRuta nombre='Cerrar Sesion' incono='fas fa-sign-out-alt' ruta='/' />
                    </li>
                </ul>

            </nav>

        </div>
    )
}

// componente 
const BotonRuta = ({ incono, ruta, nombre }) => {

    // uso del hook personalizado useActiveRoute en donde lo quiera usar debo llamarlo y asignarlo a una variable 
    const isRutaActiva= useActiveRoute(ruta); //Hook personalizado



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

        console.log(isRutaActiva, ruta)
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
