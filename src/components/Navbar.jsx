import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-gray-500'>
            <ul className='flex justify-between m-7 text-white'>
                <li className='text-3xl'>
                    Logo
                </li>
                <li className='text-3xl'>
                    <Link to='/administracion/moduloproductos'>
                        Modulo Productos
                    </Link>
                    
                </li>
                <li className='text-3xl'>
                    <Link to='/administracion/moduloventas'>
                        Módulo Ventas
                    </Link>
                </li>
                <li className='text-3xl'>
                    <Link to='/administracion/maestrousuario'>
                        Maestro Usuario
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
