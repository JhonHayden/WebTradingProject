import React, { useEffect, useState } from 'react'
import TablaVentas from './TablaVentas'



const FormularioVentas = () => {

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
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setFecha(evento.target.value);  //--------------------------------------------------
                        }}
                    />
                </label>
                <label htmlFor="codigoVenta">Codigo Venta
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type='text'
                        placeholder=''
                        name="codigoVenta"
                        value={codigoVenta}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setCodigoVenta(evento.target.value);  //--------------------------------------------------
                        }} />
                </label>
                <div>
                    <label htmlFor="nombreVendedor">Nombre Vendedor:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreVendedor'
                            value={nombreVendedor}                       //---------------------------------------------------
                            onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                                //
                                setNombreVendedor(evento.target.value);  //--------------------------------------------------
                            }} />
                    </label>
                    <label htmlFor="identificacionVendedor">Indentificación:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="number"
                            name='identificacionVendedor'
                            value={identificacionVendedor}                       //---------------------------------------------------
                            onChange={(evento) => {                                          //intrucciones necesarias para tener control del un input
                                //
                                setIdentificacionVendedor(evento.target.value);                                //--------------------------------------------------
                            }} />
                    </label>
                </div>
                <div>
                    <label htmlFor="nombreCliente">Nombre Cliente:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreCliente'
                            value={nombreCliente}                       //---------------------------------------------------
                            onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                                //
                                setNombreCliente(evento.target.value);  //--------------------------------------------------
                            }} />
                    </label>
                    <label htmlFor="identificacionCliente">Indentificación:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="number"
                            name='identificacionCliente'
                            value={identificacionCliente}                       //---------------------------------------------------
                            onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                                //
                                setIdentificacionCliente(evento.target.value);  //--------------------------------------------------
                            }} />
                    </label>
                </div>
                <label htmlFor="codigoProducto">Codigo Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='codigoProducto'
                        value={codigoProducto}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setCodigoProducto(evento.target.value);  //--------------------------------------------------
                        }} />
                </label>
                <label htmlFor="cantidadProducto">Cantidad Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='cantidadProducto'
                        value={cantidadProducto}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setCantidadProducto(evento.target.value);  //--------------------------------------------------
                        }} />
                </label>
                <label htmlFor="precioUnitario">Precio Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='precioUnitario'
                        value={precioUnitario}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setPrecioUnitario(evento.target.value);  //--------------------------------------------------
                        }} />
                </label>
                <label htmlFor="valorTotal">Valor Total:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='valorTotal'
                        value={valorTotal}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setValorTotal(evento.target.value);  //--------------------------------------------------
                        }} />
                </label>  
            </form>



        </div>
    )
}

export default FormularioVentas
