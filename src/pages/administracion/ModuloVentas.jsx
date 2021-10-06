import FormularioVentas from 'components/componentesVentas/FormularioVentas';
import TablaVentas from 'components/componentesVentas/TablaVentas';
import React, { useEffect, useState } from 'react'

const ModuloVentas = () => {

    //creo las variables de estado .. creo los estados que almacenara cada cambio de cada componente 
    //y elemento de html de mi aplicacion sobre todos los componente relacionado a eventos, para esto de el 
    // almacenamiento se usa el hook useState()

    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(false);
    // // const [fecha, setFecha] = useState('dd/mm/aa');
    const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Venta');
    // const enviarAMaestroVentas = () => {

    // }


    useEffect(() => {
        mostrarTablaVentas ? setCambiarNombreBoton('Nueva Venta') : setCambiarNombreBoton('Registra Venta')

    }, [mostrarTablaVentas])
    return (
        <div >
            <h1 className='text-4xl'>Módulo Ventas</h1>

            {mostrarTablaVentas ? <TablaVentas fecha='' /> : <FormularioVentas entrada='jhon' />}

            {/* // enviarDatosAlBackend();  // funcion del boton cuando se ejecuta el evento onClick
                        // enviarAMaestroVentas();

                    }}>Registro Venta</button> */}



            <button className='  self-end text-3xl bg-blue-400 p-5 mb-14 
                rounded-full shadow-md hover:bg-blue-900 text-gray-100'
                type='button'
                onClick={() => {

                    setMostrarTablaVentas(!mostrarTablaVentas)
                }
                }
            >{cambiarNombreBoton}</button>
        </div>
    )
}


export default ModuloVentas


