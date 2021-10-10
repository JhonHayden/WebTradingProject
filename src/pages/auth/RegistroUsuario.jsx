import React from 'react'
import { Link } from 'react-router-dom';

const RegistroUsuario = () => {
    return (
        <>
            <div className='m-8 border border-gray-700 items-center bg-blue-400 mt-20 p-10 rounded-md '>
                <h1 className='mb-4  text-center text-3xl font-extrabold text-gray-800 '>Crear Cuenta</h1>
                <form >
                    <div className='grid grid-cols-2 items-center  gap-4 rounded-md '>
                        <label htmlFor="nombre"
                            className='text-xl font-bold'>
                            Nombre
                            <input
                                name='nombre'
                                type="text"
                                autoComplete='email'
                                required
                                placeholder='Nombre Completo'
                                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300  text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 '
                            />
                        </label>
                        <label htmlFor="apellido"
                            className='text-xl font-bold'>
                            Apellido
                            <input
                                name='apellido'
                                type="text"
                                required
                                placeholder='Apellidos'
                                className='block rounded-md  w-full relative appearance-none px-3 py-2 '
                            />
                        </label>
                        <label htmlFor="telefono"
                            className='text-xl font-bold'>
                            Telefono
                            <input
                                name='telefono'
                                type="tel"
                                required
                                placeholder='Telefono'
                                className='block rounded-md  w-full relative appearance-none px-3 py-2'
                            />
                        </label>
                        <label htmlFor='nacimiento'
                            className='text-xl font-bold'>
                            Fecha de Nacimiento
                            <input
                                name='nacimiento'
                                type='date'
                                required
                                className='block rounded-md  w-full relative appearance-none px-3 py-2'
                            />
                        </label>
                        <label htmlFor='correo'
                            className='text-xl font-bold'>
                            Correo electrónico
                            <input
                                name='correo'
                                type='email'
                                required
                                className='appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 '
                            />
                        </label>
                        <label htmlFor='nacimiento'
                            className='text-xl font-bold'>
                            Contraseña
                            <input
                                name='contraseña'
                                type='password'
                                required
                                className='appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 '
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='group font-bold relative w-full flex mt-7 justify-center py-2 px-4 border border-transparent   text-xl rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                            <span className='absolute left-0 inset-y-0 flex items-center pl-3 '> </span>
                            <Link to='/admin'>Regístrate</Link>
                        </button>
                    </div>

                    <div className='flex  justify-between mt-3 text-xl'>
                        <span>¿Ya tienes cuenta?</span>
                        <Link to='/login'>
                            <span className='font-medium text-xl text-blue-700 hover:text-blue-900'>Inicia Sesión</span>
                        </Link>
                    </div>
                </form >
            </div >
        </>
    )
}

export default RegistroUsuario
