import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './componentesVentas/ImagenLogo'
const Navbar = () => {
    return (
        <nav className='bg-blue-400'>
            <ul className='flex justify-between m-1 ml-2 mr-2 text-white pt-2'>
                <li className='text-2xl'>
                    <ImagenLogo />
                </li>
                <li className='text-2xl'>
                    <Link to='/administracion/moduloproductos'>
                        <span className='border rounded-xl border-gray-700 bg-blue-500 p-3  hover:bg-blue-700 '>
                            Modulo Productos
                        </span>
                    </Link>

                </li>
                <li className='text-2xl'>
                    <Link to='/administracion/moduloventas'>
                        <span className='border rounded-xl border-gray-700 bg-blue-500 p-3  hover:bg-blue-700 '>
                            Módulo Ventas
                        </span>
                    </Link>
                </li>
                <li className='text-2xl'>
                    <Link to='/administracion/moduloUsuario'>
                        <span className='border rounded-xl border-gray-700 bg-blue-500 p-3  hover:bg-blue-700 '>
                            Modulo Usuario
                        </span>
                    </Link>
                </li>
                <li className='text-2xl'>
                    <Link to='/'>
                        <span className='border rounded-xl border-gray-700 bg-blue-500 p-3  hover:bg-blue-700 '>
                            Cerrar Sesion
                        </span>
                    </Link>

                </li>
            </ul>

        </nav>
    )
}

export default Navbar
