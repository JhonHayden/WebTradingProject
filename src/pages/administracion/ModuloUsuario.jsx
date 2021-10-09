import React from 'react'

const ModuloUsuario = () => {
    return (
        <div className='border rounded-xl bg-blue-400 self-start mt-24 p-8'>
            <div className='flex flex-col  '>
                <h1 className='text-center font-extrabold text-4xl mt-2 mb-4'>
                    Modulo Usuario
                </h1>

                <form className='text-3xl font-bold'>
                    <div className='bg-blue-500 w-max p-3 rounded-xl'>
                        <label htmlFor="buscar">
                            Buscar Usuario
                            <input name='buscar'
                                id="buscar"
                                type="text"
                                onKeyDown=""
                                className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 ' />
                        </label>
                    </div>
                </form>
                <button
                    type='button'
                    className='self-end text-3xl bg-blue-600 p-5 mb-14 rounded-full shadow-md hover:bg-blue-900 text-gray-100'

                >Actualizar</button>

            </div>
            <div>
                <table >
                    <tr>
                        <th className='text-3xl  bg-blue-500 rounded-xl p-1'>Nombre</th>
                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Correo</th>
                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Rol</th>
                        <th className='text-3xl  bg-blue-500 rounded-xl p-1 ' >Estado</th>

                    </tr>
                    <tbody>
                        <tr>

                            <td><input className='  bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-2xl '
                                type="text"
                                name=""
                                id=""
                            /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-2xl'
                                type="text"
                                name=""
                                id="" /></td>
                            <td>
                                <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-2xl'
                                    type="text"
                                    name=""
                                    id=""
                                    defaultValue={0}>
                                    <option value={0}>Seleccione una opción
                                    </option>
                                    <option value="vendedor">Vendedor
                                    </option>
                                    <option value="administrador">Administrador
                                    </option>
                                </select>
                            </td>
                            {/* Drop-down list */}
                            <td>
                                <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-2xl ' 
                                type="text" 
                                name="" 
                                id=""
                                defaultValue={0}>
                                    <option value={0}>Seleccione una opción
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
