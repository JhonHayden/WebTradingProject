import React from 'react'

const RegistroProductos = () => {
    return (
        <div>
            RegistroProductos page
            
            <form className='flex flex-col' >
                <label htmlFor="codigoProducto">Codigo Producto: </label>
                <input type="text" name='codigoProducto' />
                <label htmlFor="descripcionProduct">Descripción Producto</label>
                <textarea name="descripcionProduct" id="descripcionProduct  " cols="40" rows="4"></textarea>
                <label htmlFor="precioUnitario">Precio Producto: </label>
                <input type="text" name='precioUnitario' />
                <div className='flex justify-between'>
                    <span>Estado producto:</span>
                    <label for="Disponible">Disponible</label>
                    <input type="checkbox" id='Disponible' name='Disponible' value="true" />
                    <label for="noDisponible">No disponible</label>
                    <input type="checkbox" id="noDisponible" name="noDisponible" value="false" />
                </div>

                <input type="submit" value='Registro Producto' />
                <input type="reset"></input>
            </form>

        </div>
    )
}

export default RegistroProductos
