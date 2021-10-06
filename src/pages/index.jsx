import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className='border border-gray-900 mt-32 p-20 ' >
            <h1 className='m-6  text-center text-4xl font-bold text-gray-800' >Iniciar Sesión</h1>
            <form>
                <div className="flex flex-col m-5 justify-items-center  ">
                    <input className=' focus:outline-none text-gray-800 border border-blue-300 text-3xl' type='email' placeholder='Correo electrónico' />

                    <input className='mt-5 focus:outline-none text-gray-800 border border-blue-300 text-3xl' type='password' placeholder='Introduce tu contraseña'
                        required />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <label htmlFor="Recuerdame" className='text-3xl'>
                            <input name='Recuerdame' type="checkbox" className='scale-y-50' />
                            Recuerdame
                        </label>
                    </div>
                    <div className='text-gray-800 ml-2 text-3xl'>
                        <Link to="/"> ¿Olvidaste tu contraseña?</Link>
                    </div>
                </div>
                <div className='mt-3'> 
                    <div className='border  text-center text-3xl'>
                        <Link to='/administracion'>
                            <button type='submit'> Iniciar Sesión
                            </button>
                        </Link>
                    </div>
                    <div className='border  text-center mt-2 text-3xl '>
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


