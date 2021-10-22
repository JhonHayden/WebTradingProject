import React from 'react'
import { Link } from 'react-router-dom'
// import Google from 'media/google_logo.png'
import { useAuth0 } from "@auth0/auth0-react";
import ImagenLogo from 'components/componentesVentas/ImagenLogo';


const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return (

        <div>
            <nav className='bg-blue-400 w-screen '>
                <ul className='hidden md:flex justify-between  ml-2 mr-2 text-white pt-2 '>
                    <li className='text-2xl'>
                        <Link to='/administracion'>
                            <ImagenLogo />
                        </Link>
                    </li>
                    <li className='text-2xl '>
                        <button
                            className='border rounded-xl border-gray-700 bg-blue-500 p-3 mb-1  
                                     hover:bg-blue-700'
                            onClick={() => loginWithRedirect()}>
                            <i className='fas fa-sign-in-alt ' /> {/*String literal* como meter una variable es un strig */}
                            Iniciar Sesión
                        </button>
                    </li>
                </ul>
            </nav>

            <main  >
                <div className='flex justify-center mt-28'>
                    <h1 className='text-9xl font-black text-gray-800 '>Bienvenidos!</h1>
                </div>
            </main>
        </div>



        // <div className='border border-gray-900 mt-20 p-10  bg-blue-400 rounded-md  ' >
        //     <h1 className='m-6  text-center text-3xl font-extrabold text-gray-800' >Iniciar Sesión</h1>
        //     <form>
        //         <div className="flex flex-col m-5 justify-items-center  ">
        //             <input
        //                 className='p-1 focus-within:rounded-md focus:outline-none text-gray-800 border border-blue-300 text-2xl'
        //                 type='email'
        //                 placeholder='Correo electrónico' />

        //             <input className=' p-1 mt-5 rounded-md focus:outline-none text-gray-800 border border-blue-300 text-2xl'
        //                 type='password'
        //                 placeholder='Introduce tu contraseña'
        //                 required />
        //         </div>
        //         <div className='flex justify-between'>
        //             <div>
        //                 <label htmlFor="Recuerdame" className='text-2xl'>
        //                     <input name='Recuerdame' type="checkbox" className='scale-y-50 rounded-md' />
        //                     Recuerdame
        //                 </label>
        //             </div>
        //             <div className='text-gray-800 ml-4   text-2xl font-bold'>
        //                 <Link to="/"> ¿Olvidaste tu contraseña?</Link>
        //             </div>
        //         </div>
        //         <div className='mt-5'>
        //             <div className='border  text-center text-2xl pb-2 rounded-md hover:border-gray-700 hover:bg-blue-500'>
        //                 <Link to='/administracion'>
        //                     <button type='submit'> Iniciar Sesión
        //                     </button>
        //                 </Link>
        //             </div>
        //             <div className='border mt-3 text-2xl pb-2 rounded-md hover:border-gray-700 hover:bg-blue-500'>
        //                 <Link to='/administracion'>
        //                     <button type='submit'>
        //                         <div className='self-start flex '>
        //                             <img src={Google} alt='Logo Google' className='h-6 w-6 mt-2 ml-4' />
        //                             <span className='ml-24 '>
        //                                 Iniciar con Google
        //                             </span>
        //                         </div>
        //                     </button>
        //                 </Link>
        //             </div>
        //             <div className='flex items-center justify-between text-2xl m-7 rounded-md'>
        //                 <span>¿No tienes cuenta?</span>
        //                 <Link to='/registroUsuario'>
        //                     <span className='font-medium text-2xl p-2 text-gray-800 rounded-md hover:text-gray-100 hover:bg-blue-500'>Regístrate</span>
        //                 </Link>
        //             </div>

        //         </div>

        //     </form>
        // </div>
    )
}

export default Login


