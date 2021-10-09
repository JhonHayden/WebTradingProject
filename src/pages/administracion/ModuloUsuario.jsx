import React from 'react'

const ModuloUsuario = () => {
    return (
        <div>
            <div className='flex flex-col  '>
                <h1 className=' text-center font-extrabold text-4xl mt-12'>
                Modulo Usuario
                </h1>

                <form className='text-3xl font-bold mt-20 '>
                    <label htmlFor="buscar">
                        Buscar Usuario
                        <input name='buscar'
                            id="buscar"
                            type="text"
                            onKeyDown=""
                            className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' />

                    </label>

                </form>
                <button
                    type='button'
                    className='  self-end text-3xl bg-blue-400 p-5 mb-14 rounded-full shadow-md hover:bg-blue-900 text-gray-100'

                >Actualizar</button>

            </div>
            <div>
                <table >
                    <tr>
                        <th className='text-3xl w-max'>Nombre</th>
                        <th className='text-3xl w-max'>Correo</th>
                        <th className='text-3xl w-max'>Rol</th>
                        <th className='text-3xl w-max' >Estado</th>
                        
                    </tr>
                    <tbody>
                        <tr>

                            <td><input className='  bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                             name="" 
                             id=""
                             size='20' /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td>
                                <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-xl' type="text" name="" id="">
                                    <option value="">
                                    </option>
                                    <option value="vendedor">Vendedor
                                    </option>
                                    <option value="administrador">Administrador
                                    </option>
                                </select>
                            </td>
                            {/* Drop-down list */}
                            <td>
                                <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-xl' type="text" name="" id="">
                                    <option value="">
                                    </option>
                                    <option value="proceso">Autorizado
                                    </option>
                                    <option value="entregada">No Autorizado
                                    </option>
                                    <option value="cancelada">Pendiente
                                    </option>
                                </select>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default ModuloUsuario
