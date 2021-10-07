import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// datos que simularan ser traidos desde el backend
const ventasDatosBackend = [{

    codigoVenta: '123',
    fecha: '15/2/2021',
    codigoProducto: 'tarjeta elenctronica',
    cantidadProducto: '50',
    nombreVendedor: 'jhon',
    nombreCliente: 'Jhonny',
    precioUnitario: '150000',
    valorTotal: ''

},
{

    codigoVenta: '122',
    fecha: '10/5/2021',
    codigoProducto: 'Motor',
    cantidadProducto: '10',
    nombreVendedor: 'Oscar',
    nombreCliente: 'Maria',
    precioUnitario: '110000',
    valorTotal: ''

},
{

    codigoVenta: '121',
    fecha: '11/2/2022',
    codigoProducto: 'Rele electronico',
    cantidadProducto: '30',
    nombreVendedor: 'jhon',
    nombreCliente: 'Luis',
    precioUnitario: '170000',
    valorTotal: ''

},]

const ModuloVentas = () => {

    //creo las variables de estado .. creo los estados que almacenara cada cambio de cada componente 
    //y elemento de html de mi aplicacion sobre todos los componente relacionado a eventos, para esto de el 
    // almacenamiento se usa el hook useState()

    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(false);
    // // const [fecha, setFecha] = useState('dd/mm/aa');
    const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Venta');
    // const enviarAMaestroVentas = () => {

    // }
    const [ventas, setVentas] = useState([]); // estado o variable que me almacena los datos del backend en formato .json


    useEffect(() => {
        // con estes useEffect vacio mas adelante traemos los datos desde el backend y la guardaremos 7
        // en un estado y este sera el estado ventas
        setVentas(ventasDatosBackend); // guardo en mi estado ventas los datos del backend

    }, [])



    useEffect(() => {
        mostrarTablaVentas ? setCambiarNombreBoton('Nueva Venta') : setCambiarNombreBoton('Tabla Ventas')

    }, [mostrarTablaVentas])
    return (
        <div >
            <h1 className='text-4xl'>Módulo Ventas</h1>

            <button className='  self-end text-3xl bg-blue-400 p-5 mb-14 
                rounded-full shadow-md hover:bg-blue-900 text-gray-100'
                type='button'
                onClick={() => {


                    setMostrarTablaVentas(!mostrarTablaVentas)
                }
                }
            >{cambiarNombreBoton}</button>

            {/* el props que le paso al componente TablaVentas es mi estado donde esta 
                                                almacenado las ventas desde el backend */}
            {mostrarTablaVentas ? (
                <TablaVentas listaVentas={ventas} />
            ) : (
                <FormularioVentas
                    irTablasVentas={setMostrarTablaVentas}
                    funcionAgregarNuevaVenta={setVentas}   // prop para poder agregar ventas desde el formulario 
                    listaVentas={ventas} // necesito tambien la lista de formato json osea mis datos backend para poder agregrar esos y los nuevos 
                />)}

            {/* // enviarDatosAlBackend();  // funcion del boton cuando se ejecuta el evento onClick
                        // enviarAMaestroVentas();

                    }}>Registro Venta</button> */}


            <ToastContainer position="top-center"
                autoClose={5000} />
        </div>
    )

}

// por medio de los props le envio mis datos del backend al componente TablaVentas para que el lo muestre
// ese props o input para el componente TablaVentas se llamara listaVentas y este es mi estado ventas por ende debo usar 
// un useEffect para escuchar ese estado 
const TablaVentas = ({ listaVentas }) => {


    useEffect(() => {
        console.log(listaVentas)

    }, [listaVentas])

    return (
        <div>
            <h1 className='text-4xl'>
                soy tabla Ventas
            </h1>
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
                                className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            />

                        </label>

                    </form>
                    <button
                        type='button'
                        className='  self-end text-3xl bg-blue-400 p-5 mb-14 rounded-full shadow-md hover:bg-blue-900 text-gray-100'

                    >Actualizar Estado</button>

                </div>
                <div>
                    <table >
                        <thead>
                            <tr >
                                <th className='text-3xl'>Codigo Venta</th>
                                <th className='text-3xl' >Fecha</th>
                                <th className='text-3xl'>Producto</th>
                                <th className='text-3xl'>Cantidad</th>
                                <th className='text-3xl' >Vendedor</th>
                                <th className='text-3xl'>Cliente</th>
                                <th className='text-3xl'>Precio Unitario</th>
                                <th className='text-3xl'>Valor Venta</th>
                                <th className='text-3xl'>Estado Venta</th>
                            </tr>
                            {/* codigoVenta: '123',
                                fecha: '15/2/2021',
                                codigoProducto: 'tarjeta elenctronica',
                                cantidadProducto: '50',
                                nombreVendedor: 'jhon',
                                nombreCliente: 'Jhonny',
                                precioUnitario: '150000',
                                valorTotal: '' */}

                        </thead>
                        <tbody>
                            {/* ya el componente TablaVentas tiene el json de los datos del backend el cual 
                            es un array y para mostrarlos en cada uno  las celdas correpondientes debemos recorrerlo
                            el array con el siguiente codigo en javaScript justo aqui donde arriba de las celdas al
                            inicion de tbody */}
                            {listaVentas.map((ventas) => {  // como parametro de entrada le paso el estado que me tiene guardado 
                                // el arreglo y los datos en formato .json de mi datos del backend

                                return (
                                    // en el retorno pongo el html relacionada con el arreglo de mi informacion 
                                    <tr>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="codigoVenta"
                                            id=""
                                            value={ventas.codigoVenta} />
                                        </td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="fecha"
                                            id=""
                                            value={ventas.fecha} />
                                        </td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="codigoProducto"
                                            id=""
                                            value={ventas.codigoProducto} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="cantidadProducto"
                                            id=""
                                            value={ventas.cantidadProducto} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="nombreVendedor"
                                            id=""
                                            value={ventas.nombreVendedor} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="nombreCliente"
                                            id=""
                                            value={ventas.nombreCliente} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="precioUnitario"
                                            id=""
                                            value={ventas.precioUnitario} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="valorTotal"
                                            id=""
                                            value={ventas.precioUnitario * ventas.cantidadProducto} /></td>
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
                                );
                            })}{/* este codigo me transforma un array de tipo json en un array
                             de tipo html y es con .map me recorre el estado listaVentas */}
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    )
}



const FormularioVentas = ({
    irTablasVentas,
    listaVentas,                       // props 
    funcionAgregarNuevaVenta

}) => {


    // con el useRef y el FormData ya podemos eliminar cada estado para cada input por pruebas solo los comentaremos
    // const [fecha, setFecha] = useState('')
    // const [codigoVenta, setCodigoVenta] = useState('')
    // const [nombreVendedor, setNombreVendedor] = useState('')
    // const [identificacionVendedor, setIdentificacionVendedor] = useState('')
    // const [nombreCliente, setNombreCliente] = useState('')
    // const [identificacionCliente, setIdentificacionCliente] = useState('')
    const [cantidadProducto, setCantidadProducto] = useState('')
    // const [codigoProducto, setCodigoProducto] = useState('')
    const [precioUnitario, setPrecioUnitario] = useState('')
    const [valorTotal, setValorTotal] = useState('')
    // const [reset, setReset] = useState()


    // funcion que me hace todo el proceso de registro en la tabla ventas 
    // const enviarAlBackend = () => {


    //     console.log('fecha:', fecha, 'codigoVenta:', codigoVenta, 'nombreVendedor:', nombreVendedor, 'identificacionVendedor:',
    //         identificacionVendedor, 'nombreCliente:', nombreCliente, 'identificacionCliente:', identificacionCliente, 'cantidadProducto:',
    //         cantidadProducto, 'codigoProducto:', codigoProducto, 'precioUnitario:', precioUnitario, 'valorTotal:', valorTotal);

    //     //codigo para evitar que se envie una casilla vacia usando condicional if existe otra mejor forma y es usando html los atributos required de 
    //     // los input y el boton asociado al formulario ponerlo de tipo submit

    //     if (fecha===''||codigoVenta===''||nombreVendedor===''||identificacionVendedor===''||nombreCliente===''
    //     ||identificacionCliente===''|| cantidadProducto===''||codigoProducto===''||precioUnitario==='') {

    //         toast.error('Ingrese todos los datos', {
    //             position: "bottom-center",
    //             autoClose: 5000,
    //         })
    //     }else {


    //         toast.success('Registro Exitoso', {
    //             position: "bottom-center",
    //             autoClose: 5000,
    //         })

    //         irTablasVentas(true);// esto es equivante internamente a setMostrarTablaVentas (true) cambio el estado de mostrarTablaVentas


    //         funcionAgregarNuevaVenta([        // esta funcion es setVentas entonces me agrega nuevos datos a el array json pero necesito dejar lo que tiene y
    //             // agregra nuevos datos a la cola de este para esto se usa ...ventas me dice ponga los que ya tiene guardados 
    //             // listaVentas es el prop que es equivalente y le asigne el estado ventas la variable ventas 
    //             //spread operator ( ... ) significa ponga lo que ya tenia mas las cosas nuevas

    //             ...listaVentas, {
    //                 codigoVenta: codigoVenta,
    //                 fecha: fecha,
    //                 codigoProducto: codigoProducto,
    //                 cantidadProducto: cantidadProducto,
    //                 nombreVendedor: nombreVendedor,
    //                 nombreCliente: nombreCliente,
    //                 precioUnitario:precioUnitario,
    //                 valorTotal:valorTotal
    //             }
    //         ])

    //     }

    // };

    // useEffect(() => {
    //     console.log(fecha)


    // }, [fecha])

    const referenciaFomulario = useRef(null); //aun no se pero la idea es que me devuele una referencia apuntando al codigo html que le indique        


    const submitFormulario = (evento) => {  // con esta funcion nos permite controlar mejor la validaciones 

        evento.preventDefault(); // nos permite tener mayor control sobre los inputs

        //ahora haremos la extraccion de los datos del formulario de referencia al cual le apuntamos con el hoo useRef para esto usaremos 
        // la funcion FormData( dentro le pasamos el trozo de codigo html devuelto por el useRef es decir referenciaFomulario.current ) pero debemos 
        // guardar esto en una variable y depues la recorremos con un forEach todo esto se hace cuando ocurre el evento submit es decir el boton
        // del fomulario se oprime 

        // agregamos los datos del formulario en una variable claveValorDeValuesFomulario
        const claveValorDeValuesFomulario = new FormData(referenciaFomulario.current); //FormData=  interfaz que  proporciona una manera de construir fácilmente
        //  un conjunto de pares clave / valor que representan campos de formulario y sus valores, que luego se pueden enviar fácilmente mediante 
        //  el XMLHttpRequest.send()método. Utiliza el mismo formato que usaría un formulario si se configurara el tipo de codificación
        //   "multipart/form-data".
        claveValorDeValuesFomulario.forEach((valorDeCadaElementoDelFormData, claveDeCadaElementoDelFormData) => {

            console.log(claveDeCadaElementoDelFormData,valorDeCadaElementoDelFormData)

            // todo esto con la finalidad de evitar el uso de un estado para cada input puesto que con el FormData me muestra todo los datos 
            // pero para usar esto primero usamos permitimos el evento onSubmit en el form y el boton debe ser type=submit luego referenciamos
            // el formulario con el hook useRef y luego le obtenemos el valor actual y a este se lo damos como entrada a FormData para que 
            // le de un formato y lo acomode en clave valor y luego esto se lo asignamos a una  variable y por ultimo la recorremos con un 
            // foreach y mostramos la clave y el valor  
        })

        console.log('datos del formulario enviados', claveValorDeValuesFomulario);// con referenciaFomulario.current me saca todo el codigo en 
        // bloque html del form .. formulario de la etiqueta <form> a la cual se puse de ref={referenciaFomulario} le puse el hook useRef()
        // me permite tener todo el bloque de este html como una variable y asi acceder al valor actual registrado por el usuario en cada uno de 
        // los inputs de este formulario que hemos referenciado con el hook useRef y nos sirve para provar cosas con el backend nos permita sacar 
        // esta infomacion en un formato super facil de manejar 
    }


    // realmente FormData me muestra los datos de los input relacionados donde la key es el name del input y el valor es el value
    // estonces seri name : value  key: valor

    return (
        <div className='scale-95 border border-blue-300 p-20'>
            <h1 className='text-4xl'>
                Soy Componente Formulario Ventas
            </h1>

            {/* usaremos una propiedad de los formularios para generar una accion y es con el evento onSubmit donde le pondremos una 
            funcion para saber cuando se le esta haciendo submit con el boton del fomulario */}
            <form
                ref={referenciaFomulario} // con esto yo referencio esta etiqueta y como tal todo el grupo del fromulario y me devuelve un trozo
                // de este formulario como variable 
                onSubmit={submitFormulario} // con esto se le idica que ejecute esta accion esta funcion cuando se oprime el boton del formulario 
                className='flex flex-col text-4xl'>
                <label htmlFor="fecha">Fecha Venta:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="date"
                        name='fecha'
                        required
                        // {/*ya podemos comentar*/} value={fecha}                       //---------------------------------------------------
                        // {/*los onChange*/} onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     {/*y los value */ }                          //
                        //     setFecha(evento.target.value);  //--------------------------------------------------
                        // }}
                    />
                </label>
                <label htmlFor="codigoVenta">Codigo Venta
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type='text'
                        placeholder=''
                        name="codigoVenta"
                        required
                        // value={codigoVenta}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //
                        //     setCodigoVenta(evento.target.value);  //--------------------------------------------------
                        // }} 
                        />
                </label>
                <div>
                    <label htmlFor="nombreVendedor">Nombre Vendedor:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreVendedor'
                            required
                            // value={nombreVendedor}                       //---------------------------------------------------
                            // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //     //
                            //     setNombreVendedor(evento.target.value);  //--------------------------------------------------
                            // }} 
                            />
                    </label>
                    <label htmlFor="identificacionVendedor">Indentificación:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='identificacionVendedor'
                            required
                            // value={identificacionVendedor}                       //---------------------------------------------------
                            // onChange={(evento) => {                                          //intrucciones necesarias para tener control del un input
                            //     //
                            //     setIdentificacionVendedor(evento.target.value);                                //--------------------------------------------------
                            // }}
                             />
                    </label>
                </div>
                <div>
                    <label htmlFor="nombreCliente">Nombre Cliente:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreCliente'
                            required
                            // value={nombreCliente}                       //---------------------------------------------------
                            // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //     //
                            //     setNombreCliente(evento.target.value);  //--------------------------------------------------
                            // }}
                             />
                    </label>
                    <label htmlFor="identificacionCliente">Indentificación:
                        <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='identificacionCliente'
                            required
                            // value={identificacionCliente}                       //---------------------------------------------------
                            // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //     //
                            //     setIdentificacionCliente(evento.target.value);  //--------------------------------------------------
                            // }} 
                            />
                    </label>
                </div>
                <label htmlFor="codigoProducto">Codigo Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='codigoProducto'
                        required
                        // value={codigoProducto}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //
                        //     setCodigoProducto(evento.target.value);  //--------------------------------------------------
                        // }} 
                        />
                </label>
                <label htmlFor="cantidadProducto">Cantidad Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='cantidadProducto'
                        required
                        value={cantidadProducto}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setCantidadProducto(evento.target.value);  //--------------------------------------------------
                        }} 
                        />
                </label>
                <label htmlFor="precioUnitario">Precio Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='precioUnitario'
                        required
                        value={precioUnitario}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setPrecioUnitario(evento.target.value);  //--------------------------------------------------
                        }} 
                        />
                </label>
                <label htmlFor="valorTotal">Valor Total:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='valorTotal'
                        value={cantidadProducto * precioUnitario}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setValorTotal(evento.target.value);  //--------------------------------------------------
                        }} 
                        />
                </label>
                <button className='  self-end text-3xl bg-blue-400 p-5 mb-14 
                rounded-full shadow-md hover:bg-blue-900 text-gray-100'
                    type='submit'
                // onClick={() => {

                //     enviarAlBackend();
                // }
                // }
                >Registrar Venta</button>
            </form>



        </div>
    )
}


export default ModuloVentas