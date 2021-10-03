import React from 'react'

const RegistroVentas = () => {
    return (
        <div > 
            pagina RegistroVentas

            <form  className='flex flex-col'>
                <label htmlFor="fecha">Fecha Venta: </label>
                <input type="date" placeholder='dd/mm/aa' name='fecha' />
                <label htmlFor="codigoVenta">Codigo Venta</label>
                <input type='text' placeholder='' name="codigoVenta" />
                <div>
                    <label htmlFor="nombreVendedor">Nombre Vendedor: </label>
                    <input type="text" name='nombreVendedor' />
                    <label htmlFor="identificacionVendedor">Indentificación: </label>
                    <input type="number" name='identificacionVendedor' />
                </div>
                <div>
                    <label htmlFor="nombreCliente">Nombre Cliente: </label>
                    <input type="text" name='nombreCliente' />
                    <label htmlFor="identificacionCliente">Indentificación: </label>
                    <input type="number" name='identificacionCliente' />
                </div>
                <label htmlFor="codigoProducto">Codigo Producto: </label>
                <input type="text" name='codigoProducto' />
                <label htmlFor="cantidadProducto">Cantidad Producto: </label>
                <input type="text" name='cantidadProducto' />
                <label htmlFor="precioUnitario">Precio Producto: </label>
                <input type="text" name='precioUnitario' />
                <label htmlFor="valorTotal">Valor Total: </label>
                <input type="text" name='valorTotal' />
                <label htmlFor="codigoProducto">Codigo Producto: </label>
                <input type="submit" value='Registro Venta' />
                <input type="reset"></input>

            </form>

        </div>
    )
}

export default RegistroVentas


