import React, { useEffect, useState } from 'react'
import TablaVentas from './TablaVentas'



const FormularioVentas = () => {

        // creo mi objeto que me almacenara mis datos del formularioVentas llamado datosVentas
    const [datosVentas, setDatosVentas] = useState({

        fecha:'',
        codigoVenta:'',
        nombreVendedor:'',
        identificacionVendedor:'',
        nombreCliente:'',                             
        identificacionCliente:'',
        cantidadProducto:'',
        codigoProducto:'',
        precioUnitario:'',
        valorTotal:'',
    })
   
    // creo funcion que me manejara los cambios de entrada de cada input me 
    //los modificara llamando dentro la funcion setDatosVentas
    const handleInputChange = (event) => {  

        console.log(event.target.value)
        
    }
    
   
   
    const [fecha, setFecha] = useState()
    const [codigoVenta, setCodigoVenta] = useState()
    const [nombreVendedor, setNombreVendedor] = useState()
    const [identificacionVendedor, setIdentificacionVendedor] = useState()
    const [nombreCliente, setNombreCliente] = useState()
    const [identificacionCliente, setIdentificacionCliente] = useState()
    const [cantidadProducto, setCantidadProducto] = useState()
    const [codigoProducto, setCodigoProducto] = useState()
    const [precioUnitario, setPrecioUnitario] = useState()
    const [valorTotal, setValorTotal] = useState()
    // const [reset, setReset] = useState()


    useEffect(() => {
        console.log(fecha)


    }, [fecha])

    return (
        <div className='scale-95 border border-blue-300 p-20'>
            <h1 className='text-4xl'>
                Soy Componente Formulario Ventas
            </h1>
            <form className='flex flex-col text-4xl'>
                <label htmlFor="fecha">Fecha Venta:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="date"
                        name='fecha'
                        value={fecha}                       //---------------------------------------------------
                    onChange={ handleInputChange}/>
                </label>
                <label htmlFor="codigoVenta">Codigo Venta
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type='text'
                        placeholder=''
                        name="codigoVenta"
                        value={codigoVenta}                       //---------------------------------------------------
                    onChange={ handleInputChange}/>
                </label>
                <div>
                    <label htmlFor="nombreVendedor">Nombre Vendedor:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreVendedor'
                            value={nombreVendedor}                       //---------------------------------------------------
                        onChange={ handleInputChange}/>
                    </label>
                    <label htmlFor="identificacionVendedor">Indentificación:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="number"
                            name='identificacionVendedor'
                            value={identificacionVendedor}                       //---------------------------------------------------
                        onChange={ handleInputChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="nombreCliente">Nombre Cliente:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreCliente'
                            value={nombreCliente}                       //---------------------------------------------------
                        onChange={ handleInputChange}/>
                    </label>
                    <label htmlFor="identificacionCliente">Indentificación:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="number"
                            name='identificacionCliente'
                            value={identificacionCliente}                       //---------------------------------------------------
                        onChange={ handleInputChange}/>
                    </label>
                </div>
                <label htmlFor="codigoProducto">Codigo Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='codigoProducto'
                        value={codigoProducto}                       //---------------------------------------------------
                    onChange={ handleInputChange}/>
                </label>
                <label htmlFor="cantidadProducto">Cantidad Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='cantidadProducto'
                        value={cantidadProducto}                       //---------------------------------------------------
                    onChange={ handleInputChange}/>
                </label>
                <label htmlFor="precioUnitario">Precio Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='precioUnitario'
                        value={precioUnitario}                       //---------------------------------------------------
                    onChange={ handleInputChange}/>
                </label>
                <label htmlFor="valorTotal">Valor Total:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='valorTotal'
                        value={valorTotal}                       //---------------------------------------------------
                    onChange={ handleInputChange}/>
                </label>  
            </form>



        </div>
    )
}

export default FormularioVentas
