import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './componentesVentas/ImagenLogo'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-blue-400 '>
                <ul className='hidden md:flex justify-between m-1 ml-2 mr-2 text-white pt-2'>
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
    return (
        <Link to={ruta}>
            <button className='border rounded-xl border-gray-700 bg-blue-500 p-3  hover:bg-blue-700 '>
                <i className={`${incono}`} /> {/*String literal* como meter una variable es un strig */}
                <span className='pl-2'>
                    {nombre}
                </span>
            </button>
        </Link>
    );
};

export default Navbar;
