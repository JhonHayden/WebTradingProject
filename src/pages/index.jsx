import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className='border border-gray-900 mt-20 p-3 ' >
            <h1 className='m-6  text-center text-2xl font-bold text-gray-800' >Iniciar Sesión</h1>
            <form>
                <div className="flex flex-col m-5 justify-items-center  ">
                    <input className=' focus:outline-none text-gray-800 border border-blue-300' type='email' placeholder='Correo electrónico' />

                    <input className='mt-5 focus:outline-none text-gray-800 border border-blue-300' type='password' placeholder='Introduce tu contraseña'
                        required />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <label htmlFor="Recuerdame">
                            <input name='Recuerdame' type="checkbox" />
                            Recuerdame
                        </label>
                    </div>
                    <div className='text-gray-800 ml-2'>
                        <Link to="/"> ¿Olvidaste tu contraseña?</Link>
                    </div>
                </div>
                <div className='mt-3'> 
                    <div className='border  text-center'>
                        <Link to='/administracion'>
                            <button type='submit'> Iniciar Sesión
                            </button>
                        </Link>
                    </div>
                    <div className='border  text-center mt-2'>
                        <Link to='/administracion'>
                            <button type='submit'> Iniciar con Google
                            </button>
                        </Link>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Index


