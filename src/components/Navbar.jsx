import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-gray-500'>
           <ul className='flex justify-between m-5 text-white'>
               <li>
                   Logo
               </li>
               <li >
                   <Link to= '/administracion/registroproductos'>
                        Registro Productos
                   </Link>  
                </li>
               <li>
                   <Link to= '/administracion/maestroproductos'>
                        Maestro Productos 
                   </Link>
                </li>
               <li>
                    <Link to= '/administracion/registroventas'>
                        Registro Ventas
                   </Link>
                </li>
               <li> 
                   <Link to= '/administracion/maestroventas'>
                        Maestro Ventas 
                   </Link>
                </li>
               <li>
                    <Link to= '/administracion/maestrousuario'>
                        Maestro Usuario
                   </Link>
                </li>
            </ul> 
                
        </nav>
    )
}

export default Navbar
