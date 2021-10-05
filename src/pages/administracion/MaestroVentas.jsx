import React from 'react'



const MaestroVentas = () => {
    return (
        <div>
            <div className='flex flex-col '>
                <h1 className=' text-center font-extrabold text-4xl mt-12'>
                    Maestro Ventas
                </h1>
               
                    <form className='text-3xl font-bold'>
                        <label htmlFor="buscar">
                            Buscar Venta
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

                    >Actualizar Estado</button>
                
            </div>
            <div>
                <table >
                    <tr >
                        <th className='text-3xl'>Codigo Venta</th>
                        <th className='text-3xl'>Fecha</th>
                        <th className='text-3xl'>Producto</th>
                        <th className='text-3xl'>Cantidad</th>
                        <th className='text-3xl' >Vendedor</th>
                        <th className='text-3xl'>Cliente</th>
                        <th className='text-3xl'>Precio Unitario</th>
                        <th className='text-3xl'>Valor Venta</th>
                        <th className='text-3xl'>Estado Venta</th>
                    </tr>
                    <tbody>
                        <tr>

                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2' type="text" name="" id="" /></td>
                            {/* Drop-down list */}
                            <td>
                                <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-xl' type="text" name="" id="">
                                    <option value="">
                                    </option>
                                    <option value="proceso">En Proceso
                                    </option>
                                    <option value="entregada">Entregada
                                    </option>
                                    <option value="cancelada">Cancelada
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

export default MaestroVentas
