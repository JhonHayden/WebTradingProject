import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false)

    return (

        <div
            className='md:hidden hover:text-blue-800 w-full '
            onClick={() => {  /* me oculta el hamburger en medidas
             grandes por encima de la media de pantallas 767 px*/
                setMostrarNavegacion(!mostrarNavegacion);

            }}>
            <i class={`mx-1 fas fa-${mostrarNavegacion ? "times" : "bars"}`}>hola soy hamburger</i>
            {mostrarNavegacion && (   // permite renderizar la lista desordenada <ul> si mostrarNavegacion es true 
            // si es falso no muetra. solo se muetra cuando el usuario da clic en el menu hamburguer 
                <ul className='border border-gray-300 w-screen text-white'>
                    <NavegacionRuta nombre='Productos' ruta='/administracion/moduloproductos'/>
                    <NavegacionRuta nombre='Ventas' incono='fas fa-money-bill' ruta='/administracion/moduloventas' />
                    <NavegacionRuta nombre='Usuarios' incono='fas fa-users' ruta='/administracion/moduloUsuario'/>
                    <NavegacionRuta nombre='Cerrar Sesion' incono='fas fa-sign-out-alt' ruta='/'/>
                </ul>
            )}

        </div>

    )
}



const NavegacionRuta = ({ruta,incono,nombre}) => {
    return (
        <div className=' '>
            <Link to={ruta}>
                <button className='border w-full border-gray-700 bg-blue-500 p-1  text-left  '>
                    <i className={`ml-1 ${incono}`} /> {/*String literal* como meter una variable es un strig */}
                    <span className='pl-2 '>
                        {nombre}
                    </span>
                </button>
            </Link>
        </div>
    )
}




export default NavBarResponsive
