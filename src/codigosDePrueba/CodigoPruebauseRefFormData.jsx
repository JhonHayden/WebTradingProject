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
            <h1 className='text-4xl'>M??dulo Ventas</h1>

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
        const claveValorDeValuesFomulario = new FormData(referenciaFomulario.current); //FormData=  interfaz que  proporciona una manera de construir f??cilmente
        //  un conjunto de pares clave / valor que representan campos de formulario y sus valores, que luego se pueden enviar f??cilmente mediante 
        //  el XMLHttpRequest.send()m??todo. Utiliza el mismo formato que usar??a un formulario si se configurara el tipo de codificaci??n
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
                    <label htmlFor="identificacionVendedor">Indentificaci??n:
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
                    <label htmlFor="identificacionCliente">Indentificaci??n:
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


import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'; // me permite tener id
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerVentasDelBackend } from 'utils/api';
import { crearVenta } from 'utils/api';
import { editarVenta } from 'utils/api';
import { deleteVenta } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import ReactLoading from 'react-loading';//  permite colocar el componente de loading espera de carga 


const ModuloVentas = () => {

    //creo las variables de estado .. creo los estados que almacenara cada cambio de cada componente
    //y elemento de html de mi aplicacion sobre todos los componente relacionado a eventos, para esto de el
    // almacenamiento se usa el hook useState()

    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(false);// estado usado para renderizar la tabla o el formulario dependiendo
    // de si es true (tabla) o false (formulario)
    // // const [fecha, setFecha] = useState('dd/mm/aa');
    const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Venta');

    const [ventas, setVentas] = useState([]); // estado o variable que me almacena los datos del backend en formato .json --> este
    // estado se pasa como prop al componente tablaVentas para que lo muestre en la tabla por medio de .map


    // crearemos otro estado que me permita ejecutar la consulta GET para traer informacion del backend y actualizar mi frontend
    // cada ves que edito creo o elimino un registro del backend
    const [ejecutarConsultaGET, setEjecutarConsultaGET] = useState(true);
    //luego setEjecutarConsultaGET la pasamos como prop a la tabla y luego a la filaVenta para que los botones iconos de eliminar y editar
    // puedan ejecutar esta consulta y se actualice la informacion en el frontend y se muetre el cambio en edicion y eliminacion de un registro

    const [loading, setLoading] = useState(false)

    // escucharemos con el useEffect el valor de ejecutarConsultaGET si esta cambia se ejecuta las instrucciones del useEffect siguiente
    useEffect(() => {

        const fetchVentas = async () => {

            setLoading(true)

            //                      parametro para la funcion que tengo en api y hace la peticion GET
            await obtenerVentasDelBackend(
                // esta funcion siguiente es una funcion anonima que se ejecuta despues de un evento y el evento es
                // la peticion get, cuando el servidor devuelve una respuesta a esta peticion la instruccion .then revisa esta respuesta y
                // ejecuta alguna de las dos funciones anonimas siguientes si la respuesta es positiva ejecuta la siguiente si no es
                // positiva ejecuta el .catch
                // function (response) { // si recibo respuesta entonces guardo la data en mi estado ventas la lista de ventas
                // que mostrare en el mi tabla ventas del frontend


                // las siguientes dos funciones son callback por que se ejecutan depues que sucede un evento (la peticion get --> obtenerVentasDelBackend)
                (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function
                    setVentas(response.data); // response es la respuesta del backend a la peticion get es decir trae toda la trama de la respuesta
                    // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
                    console.log('SI.........FUNCIONO LA PETICION GET!!! !!!');
                    setEjecutarConsultaGET(false); // luego de consultar le retornamos el valor a false para estar lista para solicitarla de nuevo
                    setLoading(false);
                },
                (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
                    console.error("Salio un error con la peticion Get Ventas", error);
                    // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
                    console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
                    setLoading(false);
                }
            ); // si se ejecuta la consulta es porque el estado de ejecutarConsultaGET es true por ende ejecutaremos la
            // funcion que ejecuta la peticion GET .. obtenerVentasDelBackend

            // luego de consultar le retornamos el valor a false para estar lista para solicitarla de nuevo

            // setEjecutarConsultaGET(false);



        }


        if (ejecutarConsultaGET) {


            fetchVentas();

        }

    }, [ejecutarConsultaGET]) // supervisamos esta variable o estado  de ejecutarConsultaGET


    useEffect(() => {


        if (mostrarTablaVentas) {   // si estamos en la pagina de la tabla ventas ejecute la funcion de obtenerVentasDelBackend
            // esto con el proposito que siempre me traiga los datos del backend a la tabla
            setEjecutarConsultaGET(true)// su muestro la tabla ejecuto la consulta GET y traigo los datos del Backend
        }

        // setVentas([]); // tendremos una lista vacia en el inicio
    }, [mostrarTablaVentas])//apenas sucede un cambio en el estado mostrar tabla se hace la peticion traer informacion
    // GET



    useEffect(() => {
        mostrarTablaVentas ? setCambiarNombreBoton('Nueva Venta') : setCambiarNombreBoton('Tabla Ventas')

    }, [mostrarTablaVentas])
    return (
        <div className='flex flex-col' >

            <button className=' self-start text-3xl bg-blue-500 p-5  mt-3 mb-4
                rounded-full shadow-md hover:bg-blue-900 border hover:border-gray-700 text-gray-100'
                type='button'
                onClick={() => {


                    setMostrarTablaVentas(!mostrarTablaVentas)
                }
                }
            >{cambiarNombreBoton}</button>

            {/* el props que le paso al componente TablaVentas es mi estado donde esta
                                                almacenado las ventas desde el backend */}
            {mostrarTablaVentas ? (
                <TablaVentas
                    listaVentas={ventas}
                    setEjecutarConsultaGET={setEjecutarConsultaGET}
                    loading={loading} /> // prop lista de las ventas es decir los datos del backend para que se muestren en la tabla
            ) : (
                <FormularioCreacionVentas
                    irTablasVentas={setMostrarTablaVentas}  // prop para permitir renderizacion condicional del tabla ventas
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

// tambien le pasamos como prop la modificacion del estado que me permite ejecutar la consulta GET para actulizar la informacion de backend
// cuando se modifica elimina un registro del backend con los botones de edicion y eliminacion de la tabla de ventas puesto que si no se lo pasamos
// no se actualizara la informacion en en front a menos que le demos refrescar a la pagina web con f5 pero no tiene sentido eso tiene que
// actualizar solo por eso se le pasa el prop ejecutarConsultaGET
const TablaVentas = ({ listaVentas, setEjecutarConsultaGET, loading }) => {


    // creamos un estado para hacer busqueda me guarda el dato entrado por el input de busqueda y luego lo uso para hacer el
    //el filtro
    const [datoInputBusqueda, setDatoInputBusqueda] = useState('');// inicializamos en vacio
    // necesito un estado para almacenar la lista filtadra que me retorna el .filter y asi luego pasarla al .map de
    // la renderizacion de las filas de la tabla y muestre dinamicamente las filas del resultado de la busqueda
    const [listaFiltradaResultadoBusqueda, setListaFiltradaResultadoBusqueda] = useState(listaVentas);// evidentemente
    // su valor inicial debe ser la listaventas traida del backend
    // la funcion setListaFiltradaResultadoBusqueda le pasare la lista filtrada resultado de la busqueda


    useEffect(() => {
        // console.log('valor almacenado en el estado busqueda : ', datoInputBusqueda); //imprimiremos lo que tiene el input busqueda la idea es almacenar
        //   el dato o robar el dato del input de buscar venta y guardarlo en el estado busqueda para luego trabajar con este dato y buscarlo en la
        //   tabla
        // console.log("lista original", listaVentas)
        setListaFiltradaResultadoBusqueda( // modifico el estdado listaFiltradaResultadoBusqueda, con el resultado de la busqueda
            // es decir la listafiltrada con los criterios de busqueda, conicidencia el letras con el texto del input buscar venta

            listaVentas.filter((objetoDeLaListaVentas) => {

                // console.log("objetoDeLaListaVentas", objetoDeLaListaVentas);
                return JSON.stringify(objetoDeLaListaVentas).toLowerCase().includes(datoInputBusqueda.toLowerCase()); // me permite
                // primero con JSON.stringify() transformo todo el objetoDeLaListaVentas en string luego con
                // toLowerCase() convierto ese string en minusculas y luevo con includes busco en ese string coincidencia
                // en letras o palabras con el datoInputBusqueda que tambien lo converti en minusculas y retorno esas coincidencisa
                // y asi se hace la busqueda filter me devuelve una lista de objetos con la coincidencia  NO TENGO EL BACKEND POR ESO NO ME IMPRIME NADA
            })) // con .filter busco dentro de un lista de objetos las conin
        // dencias deacuerdo a lo que le especifique tengo que dentro de los parentesis entregarle una arrow funcion con
        // parametro cada elementto de la lista de obejtos es decir cada objeto
        // console.log("lista Filtrada",listaVentas.filter((objetoDeLaListaVentas) => {

        //     console.log("objetoDeLaListaVentas",objetoDeLaListaVentas);
        //     return JSON.stringify(objetoDeLaListaVentas).toLowerCase().includes(datoInputBusqueda.toLowerCase()); // me permite
        //     // primero con JSON.stringify() transformo todo el objetoDeLaListaVentas en string luego con
        //     // toLowerCase() convierto ese string en minusculas y luevo con includes busco en ese string coincidencia
        //     // en letras o palabras con el datoInputBusqueda que tambien lo converti en minusculas y retorno esas coincidencisa
        //     // y asi se hace la busqueda filter me devuelve una lista de objetos con la coincidencia  NO TENGO EL BACKEND POR ESO NO ME IMPRIME NADA
        // })) // con .filter busco dentro de un lista de objetos las conin
        // // dencias deacuerdo a lo que le especifique tengo que dentro de los parentesis entregarle una arrow funcion con
        // // parametro cada elementto de la lista de obejtos es decir cada objeto
    }, [datoInputBusqueda, listaVentas]);

    // useEffect(() => {
    //     console.log("lista ventas en mi componente tabla:  ",listaVentas)

    // }, [listaVentas])

    return (
        <div>
            <div className='border rounded-xl p-3 bg-blue-400 '>
                <div className='flex flex-col '>
                    <h1 className=' text-center font-extrabold text-4xl mt-2'>
                        Maestro Ventas
                    </h1>

                    <form className='text-3xl font-bold text-gray-800 '>
                        <div className='bg-blue-500 w-max p-3 rounded-xl mb-14'>
                            <label className='font-bold' htmlFor="buscar">
                                Buscar Venta
                                <input
                                    className='bg-gray-50 border border-gray-300 p-2 rounded-lg ml-5 focus:outline-none'
                                    name='buscar'
                                    id="buscar"
                                    placeholder='Buscar'
                                    type="text"
                                    value={datoInputBusqueda} //le asignamos el estado a valor del input
                                    onChange={(evento) => {
                                        setDatoInputBusqueda(evento.target.value); // cada ves que se registre (cambio) un dato en el input
                                        // busqueda lo guardo en el estado datoInputBusqueda
                                    }}
                                />

                            </label>
                        </div>
                    </form>
                </div>
                <div className=' hidden md:flex w-full'>

                    {loading ?

                        (
                            <ReactLoading type='cylon' color='#abc123' height={667} width={375} />
                        )
                        :
                        (
                            <table className='tabla'>
                                <thead>
                                    <tr>
                                        <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Codigo Venta</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 ' >Fecha</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Producto</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Cantidad</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 ' >Vendedor</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Cliente</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Precio Unitario</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Valor Venta</th>
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Estado Venta</th>
                                        {/* agregaremos un nuevo header para las acciones del crud */}
                                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Acciones</th>
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
                                    {listaFiltradaResultadoBusqueda.map((elementoventa) => {// le paso la lista filtrada al .map para que me lo convierta
                                        // a una lista de elementos de html y los muestre en la table los td y filas de la tabla
                                        // ejecuto al arreglo el metodo .map y el me entrega un  parametro de entrada  un objeto de venta
                                        // el arreglo y los datos en formato .json de mi datos del backend

                                        return (
                                            // en el retorno pongo el html relacionada con el arreglo de mi informacion
                                            // componente FilaVenta me representa las fila de la tabla ventas
                                            // le pasamos el prop de  setEjecutarConsultaGET
                                            <FilaVenta
                                                key={nanoid()}
                                                venta={elementoventa}
                                                setEjecutarConsultaGET={setEjecutarConsultaGET} />/*ELEMENTO PADRE DEL .MAP DEBE TENER UN ID O KEY UNICO con nanoid me resuelve esto
                                    me pone un id unico para cada elemento*/
                                        );
                                    })}{/* este codigo me transforma un array de tipo json en un array
                             de tipo html y es con .map me recorre el estado listaVentas */}
                                </tbody>

                            </table>
                        )
                    }
                </div>
                <div className='flex flex-col w-full md:hidden'>

                    {listaFiltradaResultadoBusqueda.map((elemento) => { // me retorna todos los elementos de la lista en formato html

                        return (
                            < div className='bg-blue-300 m-2 shadow-xl  flex flex-col border border-red-800 p-4 rounded-xl text-gray-700 '
                                key={nanoid()}  >
                                <span className='bg-blue-50'>{elemento.codigoVenta}</span>
                                <span className='bg-blue-50'>{elemento.fecha}</span>
                                <span className='bg-blue-50'>{elemento.codigoProducto}</span>
                                <span className='bg-blue-50'>{elemento.cantidadProducto}</span>
                                <span className='bg-blue-50'>{elemento.nombreVendedor}</span>
                                <span className='bg-blue-50'>{elemento.nombreCliente}</span>
                                <span className='bg-blue-50'>{elemento.precioUnitario}</span>
                                <span className='bg-blue-50'>{elemento.valorTotal}</span>
                            </div>
                        )
                    })}
                    <div>

                    </div>
                </div>
            </div>

        </div >
    )
}

// creamos nuevo componente para la fila de cada venta de la TablaVentas para poder hacer las acciones de eliminar y editar mucho msa facil
// le pasamos el prop a FilaVenta puesto que en este componente estan los botones de eliminacion y ediccion de los registros
// entonces deben de poder actualizar la informacion en en frontend para visualizar dinamicamente la modificiacion o eliminacion de un regristro
// de la base de datos
const FilaVenta = ({ venta, setEjecutarConsultaGET }) => {
    //console.log(venta); //imprime mi ventas traidas del backend
    // creamos un estado de tipo boolean para hacer la renderizacion condicional del cambio de campos de tabla
    // a campos de input de fomulario para poder editar los datos

    const [permitirEditar, setPermitirEditar] = useState(false) // estado de control de permitir ediccion si es true se puede editar si es falso no
    // const [ventaid, setVentaid] = useState({venta_id:venta._id.slice(20)}) // estado de control de permitir ediccion si es true se puede editar si es falso no
    // si es true me pinta los inputs del formulario si es false me pinta las celdas de la tabla normal, ese estado me lo cambia de valor el icono
    // de editar con el evento onclick
    const [infoNuevaVenta, setInfoNuevaVenta] = useState({ // estado que me tiene la informacion de una venta de cualquier fila que elija
        // para editar  algun campo

        _id: venta._id,
        fecha: venta.fecha,
        codigoProducto: venta.codigoProducto,
        cantidadProducto: venta.cantidadProducto,
        nombreVendedor: venta.nombreVendedor,
        nombreCliente: venta.nombreCliente,
        precioUnitario: venta.precioUnitario,
        valorTotal: venta.valorTotal,
        estadoVenta: venta.estadoVenta

    })

    const [mostrarDialog, setMostrarDialog] = useState(false)// muestra dialog para confirmar accion delete


    const actualizarVenta = async () => { // debe ser asyncrona
        // console.log(infoNuevaVenta);
        await editarVenta(
            venta._id,

            {
                fecha: infoNuevaVenta.fecha,
                codigoProducto: infoNuevaVenta.codigoProducto,
                cantidadProducto: infoNuevaVenta.cantidadProducto,
                nombreVendedor: infoNuevaVenta.nombreVendedor,
                nombreCliente: infoNuevaVenta.nombreCliente,
                precioUnitario: infoNuevaVenta.precioUnitario,
                valorTotal: infoNuevaVenta.valorTotal,
                estadoVenta: infoNuevaVenta.estadoVenta


            }

            ,

            (response) => {

                console.log(response.data);
                // console.log(response.data);
                // alert('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
                console.log('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
                toast.success('Venta actualizada con ??xito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                setPermitirEditar(false);
                setEjecutarConsultaGET(true);
            },
            (error) => {
                console.error(error);
                // alert('NO.........FUNCIONO LA PETICION PATCH!!! !!!')

                console.log('NO.......funciono LA PETICION PATCH!!!');
                toast.error('Error modificando venta', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                // setPermitirEditar(false);// APENAS FUNCIONE SE LO QUITO AUN NO SE HACE EL BACKEND POR ESO MO FUNCIONA TODAVIA
            }

        )


    };

    const eliminarVenta = async () => { // funcion de eliminar venta esta me ejecuta la peticion DELETE al servidor

        await deleteVenta(

            venta._id,

            { id: venta._id },

            (response) => {
                console.log(response.data);
                // alert('SI.........FUNCIONO LA PETICION DELETE!!! !!!')
                console.log('SI.........FUNCIONO LA PETICION DELETE!!! !!!');

                toast.success('Venta eliminada con ??xito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                setEjecutarConsultaGET(true); // si elimino con exito actualiza la tabla con esta funcion de setEjecutarConsultaGET en true por que
                //         // me ejecuta la consulta GET y me trae la informacion y la muestra en el frontend
                //         // irTablasVentas(true);
                //         // setPermitirEditar(false)
            },

            (error) => {
                console.error(error);
                console.log('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
                // alert('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
                toast.error('Error eliminando venta', {
                    position: "bottom-center",
                    autoClose: 5000,
                })
            }
        );

        setMostrarDialog(false); // despues de eliminar cerramos el dialog

        // const options = {
        //     method: 'DELETE', // metodo de eliminar
        //     url: `http://localhost:5000/ventas/${venta._id}/`, // url de mi api servidor backend y la instruccion delete en el
        //     // final de la url
        //     headers: { 'Content-Type': 'application/json' },
        //     data: { id: venta._id }, // le tengo que pasar el id del dato o registro a eliminar y lo saco del prop que entro al componente filaVenta puesto
        //     // que este prop me tiene las filas selecionada de la ventas

        // };

        // await axios
        //     .request(options)
        //     .then(function (response) {
        //         console.log(response.data);
        //         // alert('SI.........FUNCIONO LA PETICION DELETE!!! !!!')
        //         console.log('SI.........FUNCIONO LA PETICION DELETE!!! !!!')

        //         toast.success('Venta eliminada con ??xito', {
        //             position: "bottom-center",
        //             autoClose: 5000,
        //         })
        //         setEjecutarConsultaGET(true); // si elimino con exito actualiza la tabla con esta funcion de setEjecutarConsultaGET en true por que
        //         // me ejecuta la consulta GET y me trae la informacion y la muestra en el frontend
        //         // irTablasVentas(true);
        //         // setPermitirEditar(false)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         console.log('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
        //         // alert('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
        //         toast.error('Error eliminando venta', {
        //             position: "bottom-center",
        //             autoClose: 5000,
        //         })
        //     });
        // setMostrarDialog(false); // despues de eliminar cerramos el dialog


    };


    return (
        <tr> {permitirEditar ?
            (
                <>
                    <td className=' p-2 text-xl'>
                        {infoNuevaVenta._id} {/*me permite poner el id generado por mongoDB y acortado con slice a digitos  */}
                    </td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl'
                        type="text"
                        name="fecha"
                        id=""
                        value={infoNuevaVenta.fecha}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, fecha: evento.target.value });
                        }} />
                    </td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
                        type="text"
                        name="codigoProducto"
                        id=""
                        value={infoNuevaVenta.codigoProducto}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, codigoProducto: evento.target.value });
                        }} /></td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
                        type="text"
                        name="cantidadProducto"
                        id=""
                        value={infoNuevaVenta.cantidadProducto}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, cantidadProducto: evento.target.value });
                        }} /></td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
                        type="text"
                        name="nombreVendedor"
                        id=""
                        value={infoNuevaVenta.nombreVendedor}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, nombreVendedor: evento.target.value });
                        }} /></td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
                        type="text"
                        name="nombreCliente"
                        id=""
                        value={infoNuevaVenta.nombreCliente}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, nombreCliente: evento.target.value });
                        }} /></td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
                        type="text"
                        name="precioUnitario"
                        id=""
                        value={infoNuevaVenta.precioUnitario}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, precioUnitario: evento.target.value });
                        }} /></td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
                        type="text"
                        name="valorTotal"
                        id=""
                        value={infoNuevaVenta.precioUnitario * infoNuevaVenta.cantidadProducto}
                        onChange={(evento) => {
                            setInfoNuevaVenta({ ...infoNuevaVenta, valorTotal: evento.target.value });
                        }} /></td>
                    {/* Drop-down list */}
                    <td>
                        <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg  text-xl'
                            type="text"
                            name="estadoVenta"
                            id=""
                            defaultValue={0}
                            value={infoNuevaVenta.estadoVenta}
                            onChange={(evento) => {

                                setInfoNuevaVenta({ ...infoNuevaVenta, estadoVenta: evento.target.value })

                            }}
                        >
                            <option disabled defaultValue={0}>Seleccione una opci??n
                            </option>
                            <option defaultValue="proceso">En Proceso
                            </option>
                            <option defaultValue="entregada">Entregada
                            </option>
                            <option defaultValue="cancelada">Cancelada
                            </option>
                        </select>
                    </td>
                </>) : (
                <>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl '>
                        {/* {venta._id.slice(20)} */}
                        {venta._id}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.fecha}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.codigoProducto}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.cantidadProducto}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.nombreVendedor}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.nombreCliente}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.precioUnitario}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.precioUnitario * venta.cantidadProducto}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {venta.estadoVenta}
                    </td>
                </>
            )


        }
            {/* agregaremos un nuevo boton que me hara las acciones del crud */}
            <td><div className='flex w-full justify-around '>
                {/* elemento icono de editar, con este edito  */}
                {permitirEditar ? (
                    <>
                        <Tooltip title='Actualizar venta' arrow>
                            <i className="fas fa-check text-green-500 hover:text-green-800 ml-5"
                                onClick={
                                    () => {
                                        // setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso
                                        actualizarVenta();
                                        // y si estaba falso lo pone true
                                    }
                                } />
                        </Tooltip>
                        <Tooltip title='Cancelar' arrow>
                            <i className="fas fa-window-close text-yellow-700 hover:text-yellow-500 ml-5"
                                onClick={
                                    () => {
                                        setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso
                                        // y si estaba falso lo pone true
                                    }
                                } />
                        </Tooltip>
                    </>

                ) : (
                    <>
                        {/* //agregamos tooltip mensaje que sale al pasar por encima de un boton y me indica que accion hace ese boton */}
                        <Tooltip title='Editar venta' arrow>
                            <i className="fas fa-edit text-yellow-700 hover:text-yellow-500 ml-5"
                                onClick={
                                    () => {
                                        setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso
                                        // y si estaba falso lo pone true
                                    }
                                } />
                        </Tooltip>
                        {/* /* elemento icono de eliminar, con este elimino  */}

                        {/* /* agregamos tooltip mensaje que sale al pasar por encima de un boton y me indica que accion hace ese boton  */}

                        <Tooltip title='Eliminar venta' arrow>

                            <i className="fas fa-trash-alt text-red-800 hover:text-red-600 ml-2"
                                onClick={() => {
                                    setMostrarDialog(true)
                                    // eliminarVenta(); // cuando ocurre el evento onClick en el boton icono de trash de eliminar se ejecuta esta funcion

                                }}
                            />
                        </Tooltip >
                    </>
                )
                }
            </div>
                <Dialog open={mostrarDialog}>
                    <div className='bg-blue-200 p-4'>
                        <h1 className='font-extrabold m-3 '>??Est?? seguro de querer eliminar la venta?</h1>
                        <div className='flex justify-center text-xl '>
                            <button
                                className='bg-green-500 p-3 m-1 px-4 hover:bg-green-700  text-white'
                                onClick={() => eliminarVenta()}>
                                Si</button>
                            <button
                                className='bg-red-600 p-3 m-1 hover:bg-red-800 text-white'
                                onClick={() => setMostrarDialog(false)}> No</button>
                        </div>
                    </div>

                </Dialog>
            </td>
        </tr>
    );
};

const FormularioCreacionVentas = ({
    // props
    irTablasVentas,  // funcion de modificacion estado usado para la renderizacion condicional
    listaVentas,      // representa mis datos del backend, las ventas y  ventasDatosBackend
    funcionAgregarNuevaVenta  // me permite modificar los datos del backend es decir la lista ventas



}) => {
    // const [totalVenta, setTotalVenta] = useState("")

    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [listaFiltradaResultadoBusqueda, setListaFiltradaResultadoBusqueda] = useState(vendedores);
    const datoInputBusquedaVendedor = "Vendedor"
    const [precioProductoSeleccionado, setPrecioProductoSeleccionado] = useState('')
    const [productoSeleccionado, setProductoSeleccionado] = useState('')


    useEffect(() => {

        const precioproducto=  ''; 
        console.log("precioProductoSeleccionado = ",precioProductoSeleccionado)
        
      
          
          for (let clave in productos){
            console.log("productos ===> ",productos[clave]);

            if (productos[clave]===precioProductoSeleccionado){

                setProductoSeleccionado(productos["precioUnitario"])

                console.log("si entre funciono y el precion es" ,productos["precioUnitario"])
            }

          }

        // productos.forEach((valorDeCadaElementoDelFormData, claveDeCadaElementoDelFormData) => {

        //     // console.log(claveDeCadaElementoDelFormData + ' : ', valorDeCadaElementoDelFormData)

        //     objetoNuevaVenta[claveDeCadaElementoDelFormData] = valorDeCadaElementoDelFormData; //lleno en objeto con los
        //     // datos de una venta, la cual sus atributos son los datos entrados por los inputs que el usuario registro
        //     // en la interaccion con el formulario de la aplicacion
        //     // setTotalVenta(objetoNuevaVenta.cantidadProducto * objetoNuevaVenta.precioUnitario);
        //     // todo esto con la finalidad de evitar el uso de un estado para cada input puesto que con el FormData me muestra todo los datos
        //     // pero para usar esto primero usamos permitimos el evento onSubmit en el form y el boton debe ser type=submit luego referenciamos
        //     // el formulario con el hook useRef y luego le obtenemos el valor actual y a este se lo damos como entrada a FormData para que
        //     // le de un formato y lo acomode en clave valor y luego esto se lo asignamos a una  variable y por ultimo la recorremos con un
        //     // foreach y mostramos la clave y el valor
        // })



    }, [precioProductoSeleccionado])

    useEffect(() => {

        setListaFiltradaResultadoBusqueda( // modifico el estdado listaFiltradaResultadoBusqueda, con el resultado de la busqueda
            // es decir la listafiltrada con los criterios de busqueda, conicidencia el letras con el texto del input buscar venta

            vendedores.filter((objetoDeLaListaVendedores) => {

                // console.log("objetoDeLaListaVentas", objetoDeLaListaVentas);
                return JSON.stringify(objetoDeLaListaVendedores).toLowerCase().includes(datoInputBusquedaVendedor.toLowerCase());
            }))


    }, [vendedores]);
    //
    useEffect(() => {

        const obtenerVendedores = async () => {

            await obtenerUsuarios(
                (response) => {// si se recibe respuesta se ejecuta el mensaje, response= es palabra reservada
                    // si se recibe respuesta entonces se hace eso significa el .then entonces

                    setVendedores(response.data);// guardo todos los usuarios de la base de datos en el estado
                    // vendedores luego tengo que hacer un flitro por rol
                    // console.log(response.data);

                    // console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
                },
                (error) => { // si se recibe error se ejecuta el mensaje de error --> esta funcion es equivalente a function (error) {
                    console.error(error);
                    console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');

                });
            await obtenerProductos(
                (response) => {// si se recibe respuesta se ejecuta el mensaje, response= es palabra reservada
                    // si se recibe respuesta entonces se hace eso significa el .then entonces

                    setProductos(response.data);// guardo todos los usuarios de la base de datos en el estado
                    // vendedores luego tengo que hacer un flitro por rol
                    // console.log(response.data);

                    // console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
                },
                (error) => { // si se recibe error se ejecuta el mensaje de error --> esta funcion es equivalente a function (error) {
                    console.error(error);
                    console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');

                });

        }

        obtenerVendedores();// sin hacer la llamada a esta funcion aqui igual me funciona
        obtenerProductos();// sin hacer la llamada a esta funcion aqui igual me funciona


    }, [])




    console.log("todos los usuarios del backend =", vendedores)
    console.log("todos los Productos del backend =", productos)
    console.log("todos los usuarios con el rol Vendedor del backend =", listaFiltradaResultadoBusqueda)
    // const [vendedores, setVendedores] = useState([]);


    // useEffect(() => {

    //     const obtenerVendedores = async () => {

    //     }
    //     obtenerVendedores();

    // }, [])
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
    // const [valorTotal, setValorTotal] = useState('')
    // const [reset, setReset] = useState()


    // funcion que me hace todo el proceso de registro en la tabla ventas
    // const enviarAlBackend = () => {


    // console.log('fecha:', fecha, 'codigoVenta:', codigoVenta, 'nombreVendedor:', nombreVendedor, 'identificacionVendedor:',
    //     identificacionVendedor, 'nombreCliente:', nombreCliente, 'identificacionCliente:', identificacionCliente, 'cantidadProducto:',
    //     cantidadProducto, 'codigoProducto:', codigoProducto, 'precioUnitario:', precioUnitario, 'valorTotal:', valorTotal);

    //codigo para evitar que se envie una casilla vacia usando condicional if existe otra mejor forma y es usando html los atributos required de
    // los input y el boton asociado al formulario ponerlo de tipo submit

    //     if (fecha === '' || codigoVenta === '' || nombreVendedor === '' || identificacionVendedor === '' || nombreCliente === ''
    //         || identificacionCliente === '' || cantidadProducto === '' || codigoProducto === '' || precioUnitario === '') {

    //         toast.error('Ingrese todos los datos', {
    //             position: "bottom-center",
    //             autoClose: 5000,
    //         })
    //     } else {


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
    //                 precioUnitario: precioUnitario,
    //                 valorTotal: valorTotal
    //             }
    //         ])

    //     }

    // };

    // useEffect(() => {
    //     console.log(fecha)


    // }, [fecha])

    const referenciaFomulario = useRef(null); //aun no se pero la idea es que me devuelve una referencia apuntando al codigo html que le indique

    //la palabra async me indica que la funcion es asincrona que tiene que esperar respuesta antes de ejecutar y con esta palabra
    // me permite usar la palabra reservada await
    const submitFormulario = async (evento) => {  // con esta funcion nos permite controlar mejor la validaciones y no solo eso
        // subtmitFormulario es la funcion que se ejecuta cuando ocurre el evento onSubmit del formulario y es cuando el usurario
        //da clic en el boton de enviar una venta o nuevo regirstro
        // dentro de esta funcion tendremos las instrucciones o llamados a funciones o a demas funciones que controlen
        // validaciones, capture la data actual de la referencia hecha por el hook useRef, es decir aqui instanciamos el objeto
        // FormData, que le pasamos como parmetro la referencia actual, este objeto me devuele la data de la venta
        //  luego lo recorremos esta data con un foreach para acceder a las keys (name de los inputs) y valores(values de los inputs)
        //  y las guardamos en un objeto vacio luego hacemos llamado a la funcion de renderizaciion de la tabla y a la lista
        //  le agregamos este nuevo objeto que tiene la data del nuevo registro

        evento.preventDefault(); // nos permite tener mayor control sobre los inputs

        //ahora haremos la extraccion de los datos del formulario de referencia al cual le apuntamos con el hoo useRef para esto usaremos
        // la funcion FormData( dentro le pasamos el trozo de codigo html devuelto por el useRef es decir referenciaFomulario.current ) pero debemos
        // guardar esto en una variable y depues la recorremos con un forEach todo esto se hace cuando ocurre el evento submit es decir el boton
        // del fomulario se oprime

        // agregamos los datos del formulario en una variable claveValorDeValuesFomulario
        const claveValorDeValuesFomulario = new FormData(referenciaFomulario.current); //FormData=  interfaz que  proporciona una manera de construir f??cilmente
        //  un conjunto de pares clave / valor que representan campos de formulario y sus valores, que luego se pueden enviar f??cilmente mediante
        //  el XMLHttpRequest.send()m??todo. Utiliza el mismo formato que usar??a un formulario si se configurara el tipo de codificaci??n
        //   "multipart/form-data".
        // necesita que los input tengan un name esta se usara de clave para relacionarla con el value de ese input

        // creamos una variable de tipo objeto, es decir un objeto que me contenga todos los datos de los input del formulario
        // es decir sera la venta, un objeto venta, nueva venta, me guarda los valores actuales que ingresan por los inputs
        //y estan en la data ..
        const objetoNuevaVenta = {};  //variable objeto la declaro vacia aqui estara mi objeto nueva venta que representa una venta
        // con todos los datos de los inputs actualmente registrados cada ves que se registra un nueva venta aqui se guarda y luego es a??adida

        // FormData saca un objeto con  los nombres de los inputs como key y los datos escritos por el usuario en cada input del formulario
        // como value .. es decir un objeto con la forma de:
        // {nombreInput1(key):registroenInput1(value)
        // nombreInput2(key):registroenInput2(value)
        // nombreInput3(key):registroenInput3(value)}

        claveValorDeValuesFomulario.forEach((valorDeCadaElementoDelFormData, claveDeCadaElementoDelFormData) => {

            // console.log(claveDeCadaElementoDelFormData + ' : ', valorDeCadaElementoDelFormData)

            objetoNuevaVenta[claveDeCadaElementoDelFormData] = valorDeCadaElementoDelFormData; //lleno en objeto con los
            // datos de una venta, la cual sus atributos son los datos entrados por los inputs que el usuario registro
            // en la interaccion con el formulario de la aplicacion
            // setTotalVenta(objetoNuevaVenta.cantidadProducto * objetoNuevaVenta.precioUnitario);
            // todo esto con la finalidad de evitar el uso de un estado para cada input puesto que con el FormData me muestra todo los datos
            // pero para usar esto primero usamos permitimos el evento onSubmit en el form y el boton debe ser type=submit luego referenciamos
            // el formulario con el hook useRef y luego le obtenemos el valor actual y a este se lo damos como entrada a FormData para que
            // le de un formato y lo acomode en clave valor y luego esto se lo asignamos a una  variable y por ultimo la recorremos con un
            // foreach y mostramos la clave y el valor
        })


        // codigo que me trasnforma las peticiones de submit a formato REST en este caso estamos haciendo la peticion de crear venta
        //o registrar venta y en REST se hace con POST.. pero para hacer esto debemos tener instalado axios la cual es la libreria
        // que me transformara ese codigo en formato REST y poder hacer las peticiones al backend

        // la accion de ejecutar la peticion POST la hace el submit de formulario
        // operacion de tipo POST

        // data: {  // datos a enviar
        //     fecha: objetoNuevaVenta.fecha, codigoVenta: objetoNuevaVenta.codigoVenta, nombreVendedor: objetoNuevaVenta.nombreVendedor,
        //     identificacionVendedor: objetoNuevaVenta.identificacionVendedor, nombreCliente: objetoNuevaVenta.nombreCliente,
        //     identificacionCliente: objetoNuevaVenta.identificacionCliente, codigoProducto: objetoNuevaVenta.codigoProducto,
        //     cantidadProducto: objetoNuevaVenta.cantidadProducto, precioUnitario: objetoNuevaVenta.precioUnitario,
        //     valorTotal: objetoNuevaVenta.valorTotal
        // },
        // datos a enviar,
        await crearVenta(
            {

                fecha: objetoNuevaVenta.fecha,
                codigoProducto: objetoNuevaVenta.codigoProducto,
                nombreVendedor: objetoNuevaVenta.nombreVendedor,
                identificacionVendedor: objetoNuevaVenta.identificacionVendedor,
                nombreCliente: objetoNuevaVenta.nombreCliente,
                identificacionCliente: objetoNuevaVenta.identificacionCliente,
                cantidadProducto: objetoNuevaVenta.cantidadProducto,
                precioUnitario: objetoNuevaVenta.precioUnitario,
                valorTotal: objetoNuevaVenta.valorTotal
            },

            (response) => {// si se recibe respuesta se ejecuta el mensaje, response= es palabra reservada
                // si se recibe respuesta entonces se hace eso significa el .then entonces
                console.log(response.data);
                console.log(response);
                toast.success('Venta agregada con ??xito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                // alert('SI.........FUNCIONO LA PETICION POST!!! !!!');
                console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
                // irTablasVentas(true);
            },

            (error) => { // si se recibe error se ejecuta el mensaje de error --> esta funcion es equivalente a function (error) {
                console.error(error);
                toast.error('Error registrando venta', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                // alert('NO.........FUNCIONO LA PETICION POST!!! !!!');
                console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');
            }
        );


        // // ahora con axios ejecutaremos la peticion le enviaremos como parametro de entrada la varible con la informacion
        // await axios  // el await es para decirle que debe esperar una respuesta puesto que estas operaciones son asincronas se tiene que
        //     // esperar a obtener un resultado para esto mostraremos loading para mejorar la experiencia de usuario mietras espera
        //     // pero por eso se coloca await para que espere pero se debe colocar async la funcion que este use el await
        //     // cuando necesitemos o debemos que esperar a que una operacion ocurra debemos usar await para ayudarnos a esperar a que el
        //     // backend nos de una respuesta y por eso se usa await para esperar y luego ejecutar el resultado si de esta peticion si fue realizada
        //     // con exito o no

        //     // axios esta funcion axios no se tienen que ejecutar sin el await por que no tendre como esperar a ver que paso
        //     .request(options)// peticion funcion de peticion con el argumento de entrada la variable con la informacion la data
        //     // y los procesos a ejecutar
        //     .then(function (response) {// si se recibe respuesta se ejecuta el mensaje, response = es palabra reservada
        // si se recibe respuesta entonces se hace eso significa el .then entonces
        //     console.log(response.data);
        //     toast.success('Venta agregada con ??xito', {
        //         position: "bottom-center",
        //         autoClose: 5000,
        //     });
        //     // alert('SI.........FUNCIONO LA PETICION POST!!! !!!');
        //     console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
        //     irTablasVentas(true);
        // })
        // .catch(function (error) { // si se recibe error se ejecuta el mensaje de error
        //     console.error(error);
        //     toast.error('Error registrando venta', {
        //         position: "bottom-center",
        //         autoClose: 5000,
        //     });
        //     // alert('NO.........FUNCIONO LA PETICION POST!!! !!!');
        //     console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');
        // });

        irTablasVentas(true) // llamada de funcion que entro como prop al formulario y me muestra y permite modificar el estado usado para
        // la renderizacion condicional y mostrar la tabla apenas ocurre el evenot onSubmit

        funcionAgregarNuevaVenta([...listaVentas, objetoNuevaVenta]);// permite primero con el operador ... agrega los datos anteriores o todos los
        // que tiene la data o datos enviados y leidos desde el backend y luego le agrego al final de esta lista de objetos una nueva venta



        // console.log('datos del formulario enviados', claveValorDeValuesFomulario);// con referenciaFomulario.current me saca todo el codigo en
        // bloque html del form .. formulario de la etiqueta <form> a la cual se puse de ref={referenciaFomulario} le puse el hook useRef()
        // me permite tener todo el bloque de este html como una variable y asi acceder al valor actual registrado por el usuario en cada uno de
        // los inputs de este formulario que hemos referenciado con el hook useRef y nos sirve para provar cosas con el backend nos permita sacar
        // esta infomacion en un formato super facil de manejar
    };


    // realmente FormData me traer en un paquete (un objeto)  los datos de los input relacionados donde la key es el name del input y el valor es el value
    // estonces seri name : value  key: valor

    return (
        <div className=' border rounded-xl p-3 bg-blue-400 '>
            <h1 className='text-4xl text-center font-extrabold mb-5 text-gray-800'>
                Formulario Ventas
            </h1>

            {/* usaremos una propiedad de los formularios para generar una accion y es con el evento onSubmit donde le pondremos una
            funcion para saber cuando se le esta haciendo submit con el boton del fomulario */}
            <form
                ref={referenciaFomulario} // con esto yo referencio esta etiqueta y como tal todo el grupo del fromulario y me devuelve un trozo
                // de este formulario como variable apenas ocurre el evento submit y permite traer la data completa con todos los input
                // registrados en el formulario
                onSubmit={submitFormulario} // con esto se le idica que ejecute esta accion esta funcion cuando se oprime el boton del formulario
                className='flex flex-col text-3xl'>
                <div className='grid-cols-2 grid gap-4 m-7'>
                    <label className='font-bold text-gray-800' htmlFor="fecha">Fecha Venta
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="date"
                            name='fecha'
                            required
                        // value={fecha}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                    cuando se usa un estado para cada input
                        //     setFecha(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                    <div>


                    </div>
                    {/* <label className='font-bold text-gray-800' htmlFor="codigoVenta">Codigo Venta
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type='text'
                            placeholder=''
                            name="codigoVenta"
                            required
                        // value={codigoVenta}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                        cuando se usa un estado para cada input
                        //     setCodigoVenta(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label> */}
                    <label className='font-bold text-gray-800' htmlFor="nombreVendedor">
                        <span>
                            Nombre Vendedor
                        </span>
                        <select className='p-2 rounded-lg block mt-2'
                            name="nombreVendedor"
                            id=""
                            defaultValue='' // me permite hacer validaciones de este DropDown
                            required>
                            <option disabled value=''>Seleccione un Vendedor</option>
                            {listaFiltradaResultadoBusqueda.map((objetoVendedorDentroDeListaVendedores) => {

                                return (

                                    <option
                                        key={objetoVendedorDentroDeListaVendedores._id}//Me permite tener un indentificador para cada elemento option que el .map
                                        // crea y le permite a react saber cual es cual .. nanoid es una libreria muy liviana (no usar nanoid genero un bug)
                                        // es mejor usar el id de mongo que nanoid
                                        value={objetoVendedorDentroDeListaVendedores.name}>
                                        {`${objetoVendedorDentroDeListaVendedores.name}`}
                                    </option>

                                );

                            })}


                        </select>
                        {/* <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreVendedor'
                            required
                        // value={nombreVendedor}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                        cuando se usa un estado para cada input
                        //     setNombreVendedor(evento.target.value);  //--------------------------------------------------
                        // }}
                        /> */}
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="identificacionVendedor">Indentificaci??n
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='identificacionVendedor'
                            required
                        // value={identificacionVendedor}                       //---------------------------------------------------
                        // onChange={(evento) => {                                          //intrucciones necesarias para tener control del un input
                        //     //                                               cuando se usa un estado para cada input
                        //     setIdentificacionVendedor(evento.target.value);                                //--------------------------------------------------
                        // }}
                        />
                    </label>


                    <label className='font-bold text-gray-800' htmlFor="nombreCliente">Nombre Cliente
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreCliente'
                            required
                        // value={nombreCliente}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                       cuando se usa un estado para cada input
                        //     setNombreCliente(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="identificacionCliente">Indentificaci??n
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='identificacionCliente'
                            required
                        // value={identificacionCliente}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                                    cuando se usa un estado para cada input
                        //     setIdentificacionCliente(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>

                    <label className='font-bold text-gray-800 ' htmlFor="descripcionProducto">
                        <span className='pb-2'>
                            Producto
                        </span>
                        <select className='p-2 rounded-lg block mt-2 '
                            name="codigoProducto"
                            id=""
                            defaultValue=''
                            required
                            onChange={
                                (evento) => {
                                    setPrecioProductoSeleccionado(evento.target.value);
                                }
                            }
                        >
                            <option disabled value=''>Seleccione un Producto</option>
                            {productos.map((objetoProductoDentroDeListaProductos) => {

                                return (

                                    <option
                                        key={objetoProductoDentroDeListaProductos._id}// es mejor usar el id de mongo que nanoid
                                        value={objetoProductoDentroDeListaProductos.descripcionProducto}>
                                        {`${objetoProductoDentroDeListaProductos.descripcionProducto}`}
                                    </option>

                                );

                            })}


                        </select>



                        {/*
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='codigoProducto'
                            required

                        // value={codigoProducto}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                            cuando se usa un estado para cada input
                        //     setCodigoProducto(evento.target.value);  //--------------------------------------------------
                        // }}
                        /> */}
                    </label>

                    <label className='font-bold text-gray-800' htmlFor="cantidadProducto">Cantidad Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='cantidadProducto'
                            required
                            // value={cantidadProducto}                       //---------------------------------------------------
                            onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                                //                                    cuando se usa un estado para cada input
                                setCantidadProducto(evento.target.value);  //--------------------------------------------------
                            }}
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="precioUnitario">Precio Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='precioUnitario'
                            required
                            value={productos.includes(precioProductoSeleccionado)}
                            // value={precioUnitario}                       //---------------------------------------------------
                            onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                                //                                    cuando se usa un estado para cada input
                                setPrecioUnitario(evento.target.value);  //--------------------------------------------------
                            }}


                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="valorTotal">Valor Total
                        <input className=' block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='valorTotal'
                            value={precioUnitario * cantidadProducto}                      //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                    cuando se usa un estado para cada input
                        //     setValorTotal(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                </div>
                <button className=' text-3xl bg-blue-500 border border-gray-500 p-5 self-center m-3
                rounded-full  hover:bg-blue-900 text-gray-200'
                    type='submit'
                // onClick={() => {                   //intrucciones necesarias para tener control del un input
                //     enviarAlBackend();            //    cuando se usa un estado para cada input

                // }
                // }
                >Registrar Venta</button>
            </form>



        </div>
    )
}


export default ModuloVentas









































// import React, { useEffect, useState, useRef } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { nanoid } from 'nanoid'; // me permite tener id
// import { Dialog, Tooltip } from '@material-ui/core';
// import { obtenerVentasDelBackend } from 'utils/api';
// import { crearVenta } from 'utils/api';
// import { editarVenta } from 'utils/api';
// import { deleteVenta } from 'utils/api';
// import { obtenerUsuarios } from 'utils/api';
// import { obtenerProductos } from 'utils/api';


// const ModuloVentas = () => {

//     //creo las variables de estado .. creo los estados que almacenara cada cambio de cada componente
//     //y elemento de html de mi aplicacion sobre todos los componente relacionado a eventos, para esto de el
//     // almacenamiento se usa el hook useState()

//     const [mostrarTablaVentas, setMostrarTablaVentas] = useState(false);// estado usado para renderizar la tabla o el formulario dependiendo
//     // de si es true (tabla) o false (formulario)
//     // // const [fecha, setFecha] = useState('dd/mm/aa');
//     const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Venta');


//     const [ventas, setVentas] = useState([]); // estado o variable que me almacena los datos del backend en formato .json --> este
//     // estado se pasa como prop al componente tablaVentas para que lo muestre en la tabla por medio de .map

//     const [ventaTabla, setVentaTabla] = useState([]);

//     // crearemos otro estado que me permita ejecutar la consulta GET para traer informacion del backend y actualizar mi frontend
//     // cada ves que edito creo o elimino un registro del backend
//     const [ejecutarConsultaGET, setEjecutarConsultaGET] = useState(true);
//     //luego setEjecutarConsultaGET la pasamos como prop a la tabla y luego a la filaVenta para que los botones iconos de eliminar y editar
//     // puedan ejecutar esta consulta y se actualice la informacion en el frontend y se muetre el cambio en edicion y eliminacion de un registro


//     // escucharemos con el useEffect el valor de ejecutarConsultaGET si esta cambia se ejecuta las instrucciones del useEffect siguiente
//     useEffect(() => {



//         if (ejecutarConsultaGET) {

//             //                      parametro para la funcion que tengo en api y hace la peticion GET
//             obtenerVentasDelBackend(
//                 // esta funcion siguiente es una funcion anonima que se ejecuta despues de un evento y el evento es
//                 // la peticion get, cuando el servidor devuelve una respuesta a esta peticion la instruccion .then revisa esta respuesta y
//                 // ejecuta alguna de las dos funciones anonimas siguientes si la respuesta es positiva ejecuta la siguiente si no es
//                 // positiva ejecuta el .catch
//                 // function (response) { // si recibo respuesta entonces guardo la data en mi estado ventas la lista de ventas
//                 // que mostrare en el mi tabla ventas del frontend


//                 // las siguientes dos funciones son callback por que se ejecutan depues que sucede un evento (la peticion get --> obtenerVentasDelBackend)
//                 (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function
//                     setVentas(response.data); // response es la respuesta del backend a la peticion get es decir trae toda la trama de la respuesta
//                     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
//                     console.log('SI.........FUNCIONO LA PETICION GET!!! !!!');
//                 },
//                 (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
//                     console.error(error);
//                     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
//                     console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
//                 }
//             ); // si se ejecuta la consulta es porque el estado de ejecutarConsultaGET es true por ende ejecutaremos la
//             // funcion que ejecuta la peticion GET .. obtenerVentasDelBackend

//             // luego de consultar le retornamos el valor a false para estar lista para solicitarla de nuevo

//             setEjecutarConsultaGET(false);
//         }

//     }, [ejecutarConsultaGET]) // supervisamos esta variable o estado  de ejecutarConsultaGET


//     useEffect(() => {


//         if (mostrarTablaVentas) {   // si estamos en la pagina de la tabla ventas ejecute la funcion de obtenerVentasDelBackend
//             // esto con el proposito que siempre me traiga los datos del backend a la tabla
//             setEjecutarConsultaGET(true)// su muestro la tabla ejecuto la consulta GET y traigo los datos del Backend
//         }

//         // setVentas([]); // tendremos una lista vacia en el inicio
//     }, [mostrarTablaVentas])//apenas sucede un cambio en el estado mostrar tabla se hace la peticion traer informacion
//     // GET



//     useEffect(() => {
//         mostrarTablaVentas ? setCambiarNombreBoton('Nueva Venta') : setCambiarNombreBoton('Tabla Ventas')

//     }, [mostrarTablaVentas])
//     return (
//         <div className='flex flex-col' >

//             <button className=' self-start text-3xl bg-blue-500 p-5  mt-3 mb-4
//                 rounded-full shadow-md hover:bg-blue-900 border hover:border-gray-700 text-gray-100'
//                 type='button'
//                 onClick={() => {


//                     setMostrarTablaVentas(!mostrarTablaVentas)
//                 }
//                 }
//             >{cambiarNombreBoton}</button>

//             {/* el props que le paso al componente TablaVentas es mi estado donde esta
//                                                 almacenado las ventas desde el backend */}
//             {mostrarTablaVentas ? (
//                 <TablaVentas listaVentas={ventas} setEjecutarConsultaGET={setEjecutarConsultaGET} /> // prop lista de las ventas es decir los datos del backend para que se muestren en la tabla
//             ) : (
//                 <FormularioCreacionVentas
//                     irTablasVentas={setMostrarTablaVentas}  // prop para permitir renderizacion condicional del tabla ventas
//                     funcionAgregarNuevaVenta={setVentas}   // prop para poder agregar ventas desde el formulario
//                     listaVentas={ventas}
//                     setVentaTabla={setVentaTabla}
//                     ventaTabla={ventaTabla} // necesito tambien la lista de formato json osea mis datos backend para poder agregrar esos y los nuevos
//                 />)}

//             {/* // enviarDatosAlBackend();  // funcion del boton cuando se ejecuta el evento onClick
//                         // enviarAMaestroVentas();

//                     }}>Registro Venta</button> */}


//             <ToastContainer position="top-center"
//                 autoClose={5000} />
//         </div>
//     )

// }

// // por medio de los props le envio mis datos del backend al componente TablaVentas para que el lo muestre
// // ese props o input para el componente TablaVentas se llamara listaVentas y este es mi estado ventas por ende debo usar
// // un useEffect para escuchar ese estado

// // tambien le pasamos como prop la modificacion del estado que me permite ejecutar la consulta GET para actulizar la informacion de backend
// // cuando se modifica elimina un registro del backend con los botones de edicion y eliminacion de la tabla de ventas puesto que si no se lo pasamos
// // no se actualizara la informacion en en front a menos que le demos refrescar a la pagina web con f5 pero no tiene sentido eso tiene que
// // actualizar solo por eso se le pasa el prop ejecutarConsultaGET
// const TablaVentas = ({ listaVentas, setEjecutarConsultaGET }) => {


//     // creamos un estado para hacer busqueda me guarda el dato entrado por el input de busqueda y luego lo uso para hacer el
//     //el filtro
//     const [datoInputBusqueda, setDatoInputBusqueda] = useState('');// inicializamos en vacio
//     // necesito un estado para almacenar la lista filtadra que me retorna el .filter y asi luego pasarla al .map de
//     // la renderizacion de las filas de la tabla y muestre dinamicamente las filas del resultado de la busqueda
//     const [listaFiltradaResultadoBusqueda, setListaFiltradaResultadoBusqueda] = useState(listaVentas);// evidentemente
//     // su valor inicial debe ser la listaventas traida del backend
//     // la funcion setListaFiltradaResultadoBusqueda le pasare la lista filtrada resultado de la busqueda


//     useEffect(() => {
//         // console.log('valor almacenado en el estado busqueda : ', datoInputBusqueda); //imprimiremos lo que tiene el input busqueda la idea es almacenar
//         //   el dato o robar el dato del input de buscar venta y guardarlo en el estado busqueda para luego trabajar con este dato y buscarlo en la
//         //   tabla
//         // console.log("lista original", listaVentas)
//         setListaFiltradaResultadoBusqueda( // modifico el estdado listaFiltradaResultadoBusqueda, con el resultado de la busqueda
//             // es decir la listafiltrada con los criterios de busqueda, conicidencia el letras con el texto del input buscar venta

//             listaVentas.filter((objetoDeLaListaVentas) => {

//                 // console.log("objetoDeLaListaVentas", objetoDeLaListaVentas);
//                 return JSON.stringify(objetoDeLaListaVentas).toLowerCase().includes(datoInputBusqueda.toLowerCase()); // me permite
//                 // primero con JSON.stringify() transformo todo el objetoDeLaListaVentas en string luego con
//                 // toLowerCase() convierto ese string en minusculas y luevo con includes busco en ese string coincidencia
//                 // en letras o palabras con el datoInputBusqueda que tambien lo converti en minusculas y retorno esas coincidencisa
//                 // y asi se hace la busqueda filter me devuelve una lista de objetos con la coincidencia  NO TENGO EL BACKEND POR ESO NO ME IMPRIME NADA
//             })) // con .filter busco dentro de un lista de objetos las conin
//         // dencias deacuerdo a lo que le especifique tengo que dentro de los parentesis entregarle una arrow funcion con
//         // parametro cada elementto de la lista de obejtos es decir cada objeto
//         // console.log("lista Filtrada",listaVentas.filter((objetoDeLaListaVentas) => {

//         //     console.log("objetoDeLaListaVentas",objetoDeLaListaVentas);
//         //     return JSON.stringify(objetoDeLaListaVentas).toLowerCase().includes(datoInputBusqueda.toLowerCase()); // me permite
//         //     // primero con JSON.stringify() transformo todo el objetoDeLaListaVentas en string luego con
//         //     // toLowerCase() convierto ese string en minusculas y luevo con includes busco en ese string coincidencia
//         //     // en letras o palabras con el datoInputBusqueda que tambien lo converti en minusculas y retorno esas coincidencisa
//         //     // y asi se hace la busqueda filter me devuelve una lista de objetos con la coincidencia  NO TENGO EL BACKEND POR ESO NO ME IMPRIME NADA
//         // })) // con .filter busco dentro de un lista de objetos las conin
//         // // dencias deacuerdo a lo que le especifique tengo que dentro de los parentesis entregarle una arrow funcion con
//         // // parametro cada elementto de la lista de obejtos es decir cada objeto
//     }, [datoInputBusqueda, listaVentas]);

//     // useEffect(() => {
//     //     console.log("lista ventas en mi componente tabla:  ",listaVentas)

//     // }, [listaVentas])

//     return (
//         <div>
//             <div className='border rounded-xl p-3 bg-blue-400 '>
//                 <div className='flex flex-col '>
//                     <h1 className=' text-center font-extrabold text-4xl mt-2'>
//                         Maestro Ventas
//                     </h1>

//                     <form className='text-3xl font-bold text-gray-800 '>
//                         <div className='bg-blue-500 w-max p-3 rounded-xl'>
//                             <label className='font-bold' htmlFor="buscar">
//                                 Buscar Venta
//                                 <input
//                                     className='bg-gray-50 border border-gray-300 p-2 rounded-lg ml-5 focus:outline-none'
//                                     name='buscar'
//                                     id="buscar"
//                                     placeholder='Buscar'
//                                     type="text"
//                                     value={datoInputBusqueda} //le asignamos el estado a valor del input
//                                     onChange={(evento) => {
//                                         setDatoInputBusqueda(evento.target.value); // cada ves que se registre (cambio) un dato en el input
//                                         // busqueda lo guardo en el estado datoInputBusqueda
//                                     }}
//                                 />

//                             </label>
//                         </div>
//                     </form>
//                     <button
//                         type='button'
//                         className='  self-end text-3xl bg-blue-600 p-5 mb-14 rounded-full shadow-md hover:bg-blue-900 text-gray-100'

//                     >Actualizar Estado</button>

//                 </div>
//                 <div className=' hidden md:flex w-full'>
//                     <table className='tabla'>
//                         <thead>
//                             <tr>
//                                 <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Codigo Venta</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 ' >Fecha</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Producto</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Cantidad</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 ' >Vendedor</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Cliente</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Precio Unitario</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Valor Venta</th>
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Estado Venta</th>
//                                 {/* agregaremos un nuevo header para las acciones del crud */}
//                                 <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Acciones</th>
//                             </tr>
//                             {/* codigoVenta: '123',
//                                 fecha: '15/2/2021',
//                                 codigoProducto: 'tarjeta elenctronica',
//                                 cantidadProducto: '50',
//                                 nombreVendedor: 'jhon',
//                                 nombreCliente: 'Jhonny',
//                                 precioUnitario: '150000',
//                                 valorTotal: '' */}

//                         </thead>
//                         <tbody>
//                             {/* ya el componente TablaVentas tiene el json de los datos del backend el cual
//                             es un array y para mostrarlos en cada uno  las celdas correpondientes debemos recorrerlo
//                             el array con el siguiente codigo en javaScript justo aqui donde arriba de las celdas al
//                             inicion de tbody */}
//                             {listaFiltradaResultadoBusqueda.map((elementoventa) => {// le paso la lista filtrada al .map para que me lo convierta
//                                 // a una lista de elementos de html y los muestre en la table los td y filas de la tabla
//                                 // ejecuto al arreglo el metodo .map y el me entrega un  parametro de entrada  un objeto de venta
//                                 // el arreglo y los datos en formato .json de mi datos del backend

//                                 return (
//                                     // en el retorno pongo el html relacionada con el arreglo de mi informacion
//                                     // componente FilaVenta me representa las fila de la tabla ventas
//                                     // le pasamos el prop de  setEjecutarConsultaGET
//                                     <FilaVenta
//                                         key={nanoid()}
//                                         venta={elementoventa}
//                                         setEjecutarConsultaGET={setEjecutarConsultaGET} />/*ELEMENTO PADRE DEL .MAP DEBE TENER UN ID O KEY UNICO con nanoid me resuelve esto
//                                     me pone un id unico para cada elemento*/
//                                 );
//                             })}{/* este codigo me transforma un array de tipo json en un array
//                              de tipo html y es con .map me recorre el estado listaVentas */}
//                         </tbody>

//                     </table>
//                 </div>
//                 <div className='flex flex-col w-full md:hidden'>

//                     {listaFiltradaResultadoBusqueda.map((elemento) => { // me retorna todos los elementos de la lista en formato html

//                         return (
//                             < div className='bg-blue-300 m-2 shadow-xl  flex flex-col border border-red-800 p-4 rounded-xl text-gray-700 '
//                                 key={nanoid()}  >
//                                 <span className='bg-blue-50'>{elemento.codigoVenta}</span>
//                                 <span className='bg-blue-50'>{elemento.fecha}</span>
//                                 <span className='bg-blue-50'>{elemento.codigoProducto}</span>
//                                 <span className='bg-blue-50'>{elemento.cantidadProducto}</span>
//                                 <span className='bg-blue-50'>{elemento.nombreVendedor}</span>
//                                 <span className='bg-blue-50'>{elemento.nombreCliente}</span>
//                                 <span className='bg-blue-50'>{elemento.precioUnitario}</span>
//                                 <span className='bg-blue-50'>{elemento.valorTotal}</span>
//                             </div>
//                         )
//                     })}
//                     <div>

//                     </div>
//                 </div>
//             </div>

//         </div >
//     )
// }

// // creamos nuevo componente para la fila de cada venta de la TablaVentas para poder hacer las acciones de eliminar y editar mucho msa facil
// // le pasamos el prop a FilaVenta puesto que en este componente estan los botones de eliminacion y ediccion de los registros
// // entonces deben de poder actualizar la informacion en en frontend para visualizar dinamicamente la modificiacion o eliminacion de un regristro
// // de la base de datos
// const FilaVenta = ({ venta, setEjecutarConsultaGET }) => {
//     //console.log(venta); //imprime mi ventas traidas del backend
//     // creamos un estado de tipo boolean para hacer la renderizacion condicional del cambio de campos de tabla
//     // a campos de input de fomulario para poder editar los datos

//     const [permitirEditar, setPermitirEditar] = useState(false) // estado de control de permitir ediccion si es true se puede editar si es falso no
//     // const [ventaid, setVentaid] = useState({venta_id:venta._id.slice(20)}) // estado de control de permitir ediccion si es true se puede editar si es falso no
//     // si es true me pinta los inputs del formulario si es false me pinta las celdas de la tabla normal, ese estado me lo cambia de valor el icono
//     // de editar con el evento onclick
//     const [infoNuevaVenta, setInfoNuevaVenta] = useState({ // estado que me tiene la informacion de una venta de cualquier fila que elija
//         // para editar  algun campo

//         _id: venta._id,
//         fecha: venta.fecha,
//         codigoProducto: venta.codigoProducto,
//         cantidadProducto: venta.cantidadProducto,
//         nombreVendedor: venta.nombreVendedor,
//         nombreCliente: venta.nombreCliente,
//         precioUnitario: venta.precioUnitario,
//         valorTotal: venta.valorTotal,
//         estadoVenta: venta.estadoVenta

//     })

//     const [mostrarDialog, setMostrarDialog] = useState(false)// muestra dialog para confirmar accion delete


//     const actualizarVenta = async () => { // debe ser asyncrona
//         // console.log(infoNuevaVenta);
//         await editarVenta(
//             venta._id,

//             {
//                 fecha: infoNuevaVenta.fecha,
//                 codigoProducto: infoNuevaVenta.codigoProducto,
//                 cantidadProducto: infoNuevaVenta.cantidadProducto,
//                 nombreVendedor: infoNuevaVenta.nombreVendedor,
//                 nombreCliente: infoNuevaVenta.nombreCliente,
//                 precioUnitario: infoNuevaVenta.precioUnitario,
//                 valorTotal: infoNuevaVenta.valorTotal,
//                 estadoVenta: infoNuevaVenta.estadoVenta


//             }

//             ,

//             (response) => {

//                 console.log(response.data);
//                 // console.log(response.data);
//                 // alert('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
//                 console.log('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
//                 toast.success('Venta actualizada con ??xito', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                 });
//                 setPermitirEditar(false);
//                 setEjecutarConsultaGET(true);
//             },
//             (error) => {
//                 console.error(error);
//                 // alert('NO.........FUNCIONO LA PETICION PATCH!!! !!!')

//                 console.log('NO.......funciono LA PETICION PATCH!!!');
//                 toast.error('Error modificando venta', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                 });
//                 // setPermitirEditar(false);// APENAS FUNCIONE SE LO QUITO AUN NO SE HACE EL BACKEND POR ESO MO FUNCIONA TODAVIA
//             }

//         )


//     };

//     const eliminarVenta = async () => { // funcion de eliminar venta esta me ejecuta la peticion DELETE al servidor

//         await deleteVenta(

//             venta._id,

//             { id: venta._id },

//             (response) => {
//                 console.log(response.data);
//                 // alert('SI.........FUNCIONO LA PETICION DELETE!!! !!!')
//                 console.log('SI.........FUNCIONO LA PETICION DELETE!!! !!!');

//                 toast.success('Venta eliminada con ??xito', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                 });
//                 setEjecutarConsultaGET(true); // si elimino con exito actualiza la tabla con esta funcion de setEjecutarConsultaGET en true por que
//                 //         // me ejecuta la consulta GET y me trae la informacion y la muestra en el frontend
//                 //         // irTablasVentas(true);
//                 //         // setPermitirEditar(false)
//             },

//             (error) => {
//                 console.error(error);
//                 console.log('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
//                 // alert('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
//                 toast.error('Error eliminando venta', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                 })
//             }
//         );

//         setMostrarDialog(false); // despues de eliminar cerramos el dialog

//         // const options = {
//         //     method: 'DELETE', // metodo de eliminar
//         //     url: `http://localhost:5000/ventas/${venta._id}/`, // url de mi api servidor backend y la instruccion delete en el
//         //     // final de la url
//         //     headers: { 'Content-Type': 'application/json' },
//         //     data: { id: venta._id }, // le tengo que pasar el id del dato o registro a eliminar y lo saco del prop que entro al componente filaVenta puesto
//         //     // que este prop me tiene las filas selecionada de la ventas

//         // };

//         // await axios
//         //     .request(options)
//         //     .then(function (response) {
//         //         console.log(response.data);
//         //         // alert('SI.........FUNCIONO LA PETICION DELETE!!! !!!')
//         //         console.log('SI.........FUNCIONO LA PETICION DELETE!!! !!!')

//         //         toast.success('Venta eliminada con ??xito', {
//         //             position: "bottom-center",
//         //             autoClose: 5000,
//         //         })
//         //         setEjecutarConsultaGET(true); // si elimino con exito actualiza la tabla con esta funcion de setEjecutarConsultaGET en true por que
//         //         // me ejecuta la consulta GET y me trae la informacion y la muestra en el frontend
//         //         // irTablasVentas(true);
//         //         // setPermitirEditar(false)
//         //     })
//         //     .catch(function (error) {
//         //         console.log(error);
//         //         console.log('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
//         //         // alert('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
//         //         toast.error('Error eliminando venta', {
//         //             position: "bottom-center",
//         //             autoClose: 5000,
//         //         })
//         //     });
//         // setMostrarDialog(false); // despues de eliminar cerramos el dialog


//     };


//     return (
//         <tr> {permitirEditar ?
//             (
//                 <>
//                     <td className=' p-2 text-xl'>
//                         {infoNuevaVenta._id} {/*me permite poner el id generado por mongoDB y acortado con slice a digitos  */}
//                     </td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl'
//                         type="text"
//                         name="fecha"
//                         id=""
//                         value={infoNuevaVenta.fecha}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, fecha: evento.target.value });
//                         }} />
//                     </td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
//                         type="text"
//                         name="codigoProducto"
//                         id=""
//                         value={infoNuevaVenta.codigoProducto}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, codigoProducto: evento.target.value });
//                         }} /></td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
//                         type="text"
//                         name="cantidadProducto"
//                         id=""
//                         value={infoNuevaVenta.cantidadProducto}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, cantidadProducto: evento.target.value });
//                         }} /></td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
//                         type="text"
//                         name="nombreVendedor"
//                         id=""
//                         value={infoNuevaVenta.nombreVendedor}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, nombreVendedor: evento.target.value });
//                         }} /></td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
//                         type="text"
//                         name="nombreCliente"
//                         id=""
//                         value={infoNuevaVenta.nombreCliente}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, nombreCliente: evento.target.value });
//                         }} /></td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
//                         type="text"
//                         name="precioUnitario"
//                         id=""
//                         value={infoNuevaVenta.precioUnitario}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, precioUnitario: evento.target.value });
//                         }} /></td>
//                     <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full text-xl '
//                         type="text"
//                         name="valorTotal"
//                         id=""
//                         value={infoNuevaVenta.precioUnitario * infoNuevaVenta.cantidadProducto}
//                         onChange={(evento) => {
//                             setInfoNuevaVenta({ ...infoNuevaVenta, valorTotal: evento.target.value });
//                         }} /></td>
//                     {/* Drop-down list */}
//                     <td>
//                         <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg  text-xl'
//                             type="text"
//                             name="estadoVenta"
//                             id=""
//                             defaultValue={0}
//                             value={infoNuevaVenta.estadoVenta}
//                             onChange={(evento) => {

//                                 setInfoNuevaVenta({ ...infoNuevaVenta, estadoVenta: evento.target.value })

//                             }}
//                         >
//                             <option disabled defaultValue={0}>Seleccione una opci??n
//                             </option>
//                             <option defaultValue="proceso">En Proceso
//                             </option>
//                             <option defaultValue="entregada">Entregada
//                             </option>
//                             <option defaultValue="cancelada">Cancelada
//                             </option>
//                         </select>
//                     </td>
//                 </>) : (
//                 <>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl '>
//                         {/* {venta._id.slice(20)} */}
//                         {venta._id}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.fecha}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.codigoProducto}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.cantidadProducto}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.nombreVendedor}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.nombreCliente}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.precioUnitario}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.precioUnitario * venta.cantidadProducto}
//                     </td>
//                     <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
//                         {venta.estadoVenta}
//                     </td>
//                 </>
//             )


//         }
//             {/* agregaremos un nuevo boton que me hara las acciones del crud */}
//             <td><div className='flex w-full justify-around '>
//                 {/* elemento icono de editar, con este edito  */}
//                 {permitirEditar ? (
//                     <>
//                         <Tooltip title='Actualizar venta' arrow>
//                             <i className="fas fa-check text-green-500 hover:text-green-800 ml-5"
//                                 onClick={
//                                     () => {
//                                         // setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso
//                                         actualizarVenta();
//                                         // y si estaba falso lo pone true
//                                     }
//                                 } />
//                         </Tooltip>
//                         <Tooltip title='Cancelar' arrow>
//                             <i className="fas fa-window-close text-yellow-700 hover:text-yellow-500 ml-5"
//                                 onClick={
//                                     () => {
//                                         setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso
//                                         // y si estaba falso lo pone true
//                                     }
//                                 } />
//                         </Tooltip>
//                     </>

//                 ) : (
//                     <>
//                         {/* //agregamos tooltip mensaje que sale al pasar por encima de un boton y me indica que accion hace ese boton */}
//                         <Tooltip title='Editar venta' arrow>
//                             <i className="fas fa-edit text-yellow-700 hover:text-yellow-500 ml-5"
//                                 onClick={
//                                     () => {
//                                         setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso
//                                         // y si estaba falso lo pone true
//                                     }
//                                 } />
//                         </Tooltip>
//                         {/* /* elemento icono de eliminar, con este elimino  */}

//                         {/* /* agregamos tooltip mensaje que sale al pasar por encima de un boton y me indica que accion hace ese boton  */}

//                         <Tooltip title='Eliminar venta' arrow>

//                             <i className="fas fa-trash-alt text-red-800 hover:text-red-600 ml-2"
//                                 onClick={() => {
//                                     setMostrarDialog(true)
//                                     // eliminarVenta(); // cuando ocurre el evento onClick en el boton icono de trash de eliminar se ejecuta esta funcion

//                                 }}
//                             />
//                         </Tooltip >
//                     </>
//                 )
//                 }
//             </div>
//                 <Dialog open={mostrarDialog}>
//                     <div className='bg-blue-200 p-4'>
//                         <h1 className='font-extrabold m-3 '>??Est?? seguro de querer eliminar la venta?</h1>
//                         <div className='flex justify-center text-xl '>
//                             <button
//                                 className='bg-green-500 p-3 m-1 px-4 hover:bg-green-700  text-white'
//                                 onClick={() => eliminarVenta()}>
//                                 Si</button>
//                             <button
//                                 className='bg-red-600 p-3 m-1 hover:bg-red-800 text-white'
//                                 onClick={() => setMostrarDialog(false)}> No</button>
//                         </div>
//                     </div>

//                 </Dialog>
//             </td>
//         </tr>
//     );
// };

// const FormularioCreacionVentas = ({
//     // props
//     irTablasVentas,  // funcion de modificacion estado usado para la renderizacion condicional
//     listaVentas,      // representa mis datos del backend, las ventas y  ventasDatosBackend
//     funcionAgregarNuevaVenta,  // me permite modificar los datos del backend es decir la lista ventas
//     setVentaTabla,
//     ventaTabla


// }) => {
//     // const [totalVenta, setTotalVenta] = useState("")

//     const [vendedores, setVendedores] = useState([]);
//     const [productos, setProductos] = useState([]); // me guarda todos los productos de mi base de datos
//     const [listaFiltradaResultadoBusqueda, setListaFiltradaResultadoBusqueda] = useState(vendedores);
//     const datoInputBusquedaVendedor = "vendedor"

//     useEffect(() => {

//         setListaFiltradaResultadoBusqueda( // modifico el estdado listaFiltradaResultadoBusqueda, con el resultado de la busqueda
//             // es decir la listafiltrada con los criterios de busqueda, conicidencia el letras con el texto del input buscar venta

//             vendedores.filter((objetoDeLaListaVendedores) => {

//                 // console.log("objetoDeLaListaVentas", objetoDeLaListaVentas);
//                 return JSON.stringify(objetoDeLaListaVendedores).toLowerCase().includes(datoInputBusquedaVendedor.toLowerCase());
//             }))


//     }, [vendedores]);
//     //
//     useEffect(() => {

//         const obtenerVendedores = async () => {

//             await obtenerUsuarios(
//                 (response) => {// si se recibe respuesta se ejecuta el mensaje, response= es palabra reservada
//                     // si se recibe respuesta entonces se hace eso significa el .then entonces

//                     setVendedores(response.data);// guardo todos los usuarios de la base de datos en el estado
//                     // vendedores luego tengo que hacer un flitro por rol
//                     // console.log(response.data);

//                     console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
//                 },
//                 (error) => { // si se recibe error se ejecuta el mensaje de error --> esta funcion es equivalente a function (error) {
//                     console.error(error);
//                     console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');

//                 });
//             await obtenerProductos(
//                 (response) => {// si se recibe respuesta se ejecuta el mensaje, response= es palabra reservada
//                     // si se recibe respuesta entonces se hace eso significa el .then entonces

//                     setProductos(response.data);// guardo todos los usuarios de la base de datos en el estado
//                     // vendedores luego tengo que hacer un flitro por rol
//                     // console.log(response.data);

//                     console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
//                 },
//                 (error) => { // si se recibe error se ejecuta el mensaje de error --> esta funcion es equivalente a function (error) {
//                     console.error(error);
//                     console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');

//                 });

//         }

//         obtenerVendedores();// sin hacer la llamada a esta funcion aqui igual me funciona
//         obtenerProductos();// sin hacer la llamada a esta funcion aqui igual me funciona


//     }, [])

//     // const [vendedores, setVendedores] = useState([]);


//     // useEffect(() => {

//     //     const obtenerVendedores = async () => {

//     //     }
//     //     obtenerVendedores();

//     // }, [])
//     // con el useRef y el FormData ya podemos eliminar cada estado para cada input por pruebas solo los comentaremos
//     // const [fecha, setFecha] = useState('')
//     // const [codigoVenta, setCodigoVenta] = useState('')
//     // const [nombreVendedor, setNombreVendedor] = useState('')
//     // const [identificacionVendedor, setIdentificacionVendedor] = useState('')
//     // const [nombreCliente, setNombreCliente] = useState('')
//     // const [identificacionCliente, setIdentificacionCliente] = useState('')
//     const [cantidadProducto, setCantidadProducto] = useState('')
//     // const [codigoProducto, setCodigoProducto] = useState('')
//     const [precioUnitario, setPrecioUnitario] = useState('')
//     // const [valorTotal, setValorTotal] = useState('')
//     // const [reset, setReset] = useState()

//     // const [productosSelecionados, setProductosSelecionados] = useState([]) // guardo una lista de componentes de react y es el componente

//     // // DropDownProductos este componente lo estoy guardando en el estado productosSelecionado varias veces es decir cada ves que el evento
//     // // onclick del boton agregar nuevo producto en este estado se esta guardando una instacia del componente DropDownProductos uno de tras
//     // // de otro cada que se hace clic




//     // useEffect(() => {
//     //     console.log("productos Selecionados para agregar a una venta", productosSelecionados)
//     // }, [productosSelecionados])



//     // funcion que me hace todo el proceso de registro en la tabla ventas
//     // const enviarAlBackend = () => {


//     // console.log('fecha:', fecha, 'codigoVenta:', codigoVenta, 'nombreVendedor:', nombreVendedor, 'identificacionVendedor:',
//     //     identificacionVendedor, 'nombreCliente:', nombreCliente, 'identificacionCliente:', identificacionCliente, 'cantidadProducto:',
//     //     cantidadProducto, 'codigoProducto:', codigoProducto, 'precioUnitario:', precioUnitario, 'valorTotal:', valorTotal);

//     //codigo para evitar que se envie una casilla vacia usando condicional if existe otra mejor forma y es usando html los atributos required de
//     // los input y el boton asociado al formulario ponerlo de tipo submit

//     //     if (fecha === '' || codigoVenta === '' || nombreVendedor === '' || identificacionVendedor === '' || nombreCliente === ''
//     //         || identificacionCliente === '' || cantidadProducto === '' || codigoProducto === '' || precioUnitario === '') {

//     //         toast.error('Ingrese todos los datos', {
//     //             position: "bottom-center",
//     //             autoClose: 5000,
//     //         })
//     //     } else {


//     //         toast.success('Registro Exitoso', {
//     //             position: "bottom-center",
//     //             autoClose: 5000,
//     //         })

//     //         irTablasVentas(true);// esto es equivante internamente a setMostrarTablaVentas (true) cambio el estado de mostrarTablaVentas


//     //         funcionAgregarNuevaVenta([        // esta funcion es setVentas entonces me agrega nuevos datos a el array json pero necesito dejar lo que tiene y
//     //             // agregra nuevos datos a la cola de este para esto se usa ...ventas me dice ponga los que ya tiene guardados
//     //             // listaVentas es el prop que es equivalente y le asigne el estado ventas la variable ventas
//     //             //spread operator ( ... ) significa ponga lo que ya tenia mas las cosas nuevas

//     //             ...listaVentas, {
//     //                 codigoVenta: codigoVenta,
//     //                 fecha: fecha,
//     //                 codigoProducto: codigoProducto,
//     //                 cantidadProducto: cantidadProducto,
//     //                 nombreVendedor: nombreVendedor,
//     //                 nombreCliente: nombreCliente,
//     //                 precioUnitario: precioUnitario,
//     //                 valorTotal: valorTotal
//     //             }
//     //         ])

//     //     }

//     // };

//     // useEffect(() => {
//     //     console.log(fecha)


//     // }, [fecha])

//     const referenciaFomulario = useRef(null); //aun no se pero la idea es que me devuelve una referencia apuntando al codigo html que le indique

//     //la palabra async me indica que la funcion es asincrona que tiene que esperar respuesta antes de ejecutar y con esta palabra
//     // me permite usar la palabra reservada await
//     const submitFormulario = async (evento) => {  // con esta funcion nos permite controlar mejor la validaciones y no solo eso
//         // subtmitFormulario es la funcion que se ejecuta cuando ocurre el evento onSubmit del formulario y es cuando el usurario
//         //da clic en el boton de enviar una venta o nuevo regirstro
//         // dentro de esta funcion tendremos las instrucciones o llamados a funciones o a demas funciones que controlen
//         // validaciones, capture la data actual de la referencia hecha por el hook useRef, es decir aqui instanciamos el objeto
//         // FormData, que le pasamos como parmetro la referencia actual, este objeto me devuele la data de la venta
//         //  luego lo recorremos esta data con un foreach para acceder a las keys (name de los inputs) y valores(values de los inputs)
//         //  y las guardamos en un objeto vacio luego hacemos llamado a la funcion de renderizaciion de la tabla y a la lista
//         //  le agregamos este nuevo objeto que tiene la data del nuevo registro

//         evento.preventDefault(); // nos permite tener mayor control sobre los inputs

//         //ahora haremos la extraccion de los datos del formulario de referencia al cual le apuntamos con el hoo useRef para esto usaremos
//         // la funcion FormData( dentro le pasamos el trozo de codigo html devuelto por el useRef es decir referenciaFomulario.current ) pero debemos
//         // guardar esto en una variable y depues la recorremos con un forEach todo esto se hace cuando ocurre el evento submit es decir el boton
//         // del fomulario se oprime

//         // agregamos los datos del formulario en una variable claveValorDeValuesFomulario
//         const claveValorDeValuesFomulario = new FormData(referenciaFomulario.current); //FormData=  interfaz que  proporciona una manera de construir f??cilmente
//         //  un conjunto de pares clave / valor que representan campos de formulario y sus valores, que luego se pueden enviar f??cilmente mediante
//         //  el XMLHttpRequest.send()m??todo. Utiliza el mismo formato que usar??a un formulario si se configurara el tipo de codificaci??n
//         //   "multipart/form-data".
//         // necesita que los input tengan un name esta se usara de clave para relacionarla con el value de ese input

//         // creamos una variable de tipo objeto, es decir un objeto que me contenga todos los datos de los input del formulario
//         // es decir sera la venta, un objeto venta, nueva venta, me guarda los valores actuales que ingresan por los inputs
//         //y estan en la data ..
//         const objetoNuevaVenta = {};  //variable objeto la declaro vacia aqui estara mi objeto nueva venta que representa una venta
//         // con todos los datos de los inputs actualmente registrados cada ves que se registra un nueva venta aqui se guarda y luego es a??adida

//         // FormData saca un objeto con  los nombres de los inputs como key y los datos escritos por el usuario en cada input del formulario
//         // como value .. es decir un objeto con la forma de:
//         // {nombreInput1(key):registroenInput1(value)
//         // nombreInput2(key):registroenInput2(value)
//         // nombreInput3(key):registroenInput3(value)}

//         claveValorDeValuesFomulario.forEach((valorDeCadaElementoDelFormData, claveDeCadaElementoDelFormData) => {

//             // console.log(claveDeCadaElementoDelFormData + ' : ', valorDeCadaElementoDelFormData)

//             objetoNuevaVenta[claveDeCadaElementoDelFormData] = valorDeCadaElementoDelFormData; //lleno en objeto con los
//             // datos de una venta, la cual sus atributos son los datos entrados por los inputs que el usuario registro
//             // en la interaccion con el formulario de la aplicacion
//             // setTotalVenta(objetoNuevaVenta.cantidadProducto * objetoNuevaVenta.precioUnitario);
//             // todo esto con la finalidad de evitar el uso de un estado para cada input puesto que con el FormData me muestra todo los datos
//             // pero para usar esto primero usamos permitimos el evento onSubmit en el form y el boton debe ser type=submit luego referenciamos
//             // el formulario con el hook useRef y luego le obtenemos el valor actual y a este se lo damos como entrada a FormData para que
//             // le de un formato y lo acomode en clave valor y luego esto se lo asignamos a una  variable y por ultimo la recorremos con un
//             // foreach y mostramos la clave y el valor
//         })


//         // codigo que me trasnforma las peticiones de submit a formato REST en este caso estamos haciendo la peticion de crear venta
//         //o registrar venta y en REST se hace con POST.. pero para hacer esto debemos tener instalado axios la cual es la libreria
//         // que me transformara ese codigo en formato REST y poder hacer las peticiones al backend

//         // la accion de ejecutar la peticion POST la hace el submit de formulario
//         // operacion de tipo POST

//         // data: {  // datos a enviar
//         //     fecha: objetoNuevaVenta.fecha, codigoVenta: objetoNuevaVenta.codigoVenta, nombreVendedor: objetoNuevaVenta.nombreVendedor,
//         //     identificacionVendedor: objetoNuevaVenta.identificacionVendedor, nombreCliente: objetoNuevaVenta.nombreCliente,
//         //     identificacionCliente: objetoNuevaVenta.identificacionCliente, codigoProducto: objetoNuevaVenta.codigoProducto,
//         //     cantidadProducto: objetoNuevaVenta.cantidadProducto, precioUnitario: objetoNuevaVenta.precioUnitario,
//         //     valorTotal: objetoNuevaVenta.valorTotal
//         // },
//         // datos a enviar,
//         await crearVenta(
//             {

//                 fecha: objetoNuevaVenta.fecha,
//                 codigoProducto: objetoNuevaVenta.codigoProducto,
//                 nombreVendedor: objetoNuevaVenta.nombreVendedor,
//                 identificacionVendedor: objetoNuevaVenta.identificacionVendedor,
//                 nombreCliente: objetoNuevaVenta.nombreCliente,
//                 identificacionCliente: objetoNuevaVenta.identificacionCliente,
//                 cantidadProducto: objetoNuevaVenta.cantidadProducto,
//                 precioUnitario: objetoNuevaVenta.precioUnitario,
//                 valorTotal: objetoNuevaVenta.valorTotal
//             },

//             (response) => {// si se recibe respuesta se ejecuta el mensaje, response= es palabra reservada
//                 // si se recibe respuesta entonces se hace eso significa el .then entonces
//                 // console.log(response.data);
//                 toast.success('Venta agregada con ??xito', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                 });
//                 // alert('SI.........FUNCIONO LA PETICION POST!!! !!!');
//                 console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
//                 // irTablasVentas(true);
//             },

//             (error) => { // si se recibe error se ejecuta el mensaje de error --> esta funcion es equivalente a function (error) {
//                 console.error(error);
//                 toast.error('Error registrando venta', {
//                     position: "bottom-center",
//                     autoClose: 5000,
//                 });
//                 // alert('NO.........FUNCIONO LA PETICION POST!!! !!!');
//                 console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');
//             }
//         );


//         // // ahora con axios ejecutaremos la peticion le enviaremos como parametro de entrada la varible con la informacion
//         // await axios  // el await es para decirle que debe esperar una respuesta puesto que estas operaciones son asincronas se tiene que
//         //     // esperar a obtener un resultado para esto mostraremos loading para mejorar la experiencia de usuario mietras espera
//         //     // pero por eso se coloca await para que espere pero se debe colocar async la funcion que este use el await
//         //     // cuando necesitemos o debemos que esperar a que una operacion ocurra debemos usar await para ayudarnos a esperar a que el
//         //     // backend nos de una respuesta y por eso se usa await para esperar y luego ejecutar el resultado si de esta peticion si fue realizada
//         //     // con exito o no

//         //     // axios esta funcion axios no se tienen que ejecutar sin el await por que no tendre como esperar a ver que paso
//         //     .request(options)// peticion funcion de peticion con el argumento de entrada la variable con la informacion la data
//         //     // y los procesos a ejecutar
//         //     .then(function (response) {// si se recibe respuesta se ejecuta el mensaje, response = es palabra reservada
//         // si se recibe respuesta entonces se hace eso significa el .then entonces
//         //     console.log(response.data);
//         //     toast.success('Venta agregada con ??xito', {
//         //         position: "bottom-center",
//         //         autoClose: 5000,
//         //     });
//         //     // alert('SI.........FUNCIONO LA PETICION POST!!! !!!');
//         //     console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
//         //     irTablasVentas(true);
//         // })
//         // .catch(function (error) { // si se recibe error se ejecuta el mensaje de error
//         //     console.error(error);
//         //     toast.error('Error registrando venta', {
//         //         position: "bottom-center",
//         //         autoClose: 5000,
//         //     });
//         //     // alert('NO.........FUNCIONO LA PETICION POST!!! !!!');
//         //     console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');
//         // });

//         irTablasVentas(true) // llamada de funcion que entro como prop al formulario y me muestra y permite modificar el estado usado para
//         // la renderizacion condicional y mostrar la tabla apenas ocurre el evenot onSubmit

//         funcionAgregarNuevaVenta([...listaVentas, objetoNuevaVenta]);// permite primero con el operador ... agrega los datos anteriores o todos los
//         // que tiene la data o datos enviados y leidos desde el backend y luego le agrego al final de esta lista de objetos una nueva venta



//         // console.log('datos del formulario enviados', claveValorDeValuesFomulario);// con referenciaFomulario.current me saca todo el codigo en
//         // bloque html del form .. formulario de la etiqueta <form> a la cual se puse de ref={referenciaFomulario} le puse el hook useRef()
//         // me permite tener todo el bloque de este html como una variable y asi acceder al valor actual registrado por el usuario en cada uno de
//         // los inputs de este formulario que hemos referenciado con el hook useRef y nos sirve para provar cosas con el backend nos permita sacar
//         // esta infomacion en un formato super facil de manejar

//         const listaComprasAEnviarAlBackend = Object.keys(objetoNuevaVenta).map((key) => {
//             if (key.includes('_id')) {
//                 return ventaTabla.filter((v )=> v._id === objetoNuevaVenta[key])[0]

//             }

//         }) 

//         console.log ("listaComprasAEnviarAlBackend"+listaComprasAEnviarAlBackend);
//         console.log("datos de todos mis inpust del formulario crear una venta = ", objetoNuevaVenta)
//     };


//     // realmente FormData me traer en un paquete (un objeto)  los datos de los input relacionados donde la key es el name del input y el valor es el value
//     // estonces seri name : value  key: valor

//     return (
//         <div className=' flex flex-col border rounded-xl p-3 bg-blue-400 h-full w-full items-center '>
//             <h1 className='text-4xl text-center items-center justify-center font-extrabold mb-5 text-gray-800'>
//                 Formulario Ventas
//             </h1>

//             {/* usaremos una propiedad de los formularios para generar una accion y es con el evento onSubmit donde le pondremos una
//             funcion para saber cuando se le esta haciendo submit con el boton del fomulario */}
//             <form
//                 ref={referenciaFomulario} // con esto yo referencio esta etiqueta y como tal todo el grupo del fromulario y me devuelve un trozo
//                 // de este formulario como variable apenas ocurre el evento submit y permite traer la data completa con todos los input
//                 // registrados en el formulario
//                 onSubmit={submitFormulario} // con esto se le idica que ejecute esta accion esta funcion cuando se oprime el boton del formulario
//                 className='flex flex-col text-3xl'>
//                 <div className='grid-cols-2 grid gap-4 m-7'>
//                     <label className='font-bold text-gray-800' htmlFor="fecha">Fecha Venta
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="date"
//                             name='fecha'
//                             required
//                         // value={fecha}                       //---------------------------------------------------
//                         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                         //     //                                    cuando se usa un estado para cada input
//                         //     setFecha(evento.target.value);  //--------------------------------------------------
//                         // }}
//                         />
//                     </label>
//                     <div>


//                     </div>
//                     {/* <label className='font-bold text-gray-800' htmlFor="codigoVenta">Codigo Venta
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type='text'
//                             placeholder=''
//                             name="codigoVenta"
//                             required
//                         // value={codigoVenta}                       //---------------------------------------------------
//                         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                         //     //                                        cuando se usa un estado para cada input
//                         //     setCodigoVenta(evento.target.value);  //--------------------------------------------------
//                         // }}
//                         />
//                     </label> */}
//                     <label className='font-bold text-gray-800' htmlFor="nombreVendedor">
//                         <span>
//                             Nombre Vendedor
//                         </span>
//                         <select className='p-2 rounded-lg block mt-2'
//                             name="nombreVendedor"
//                             id=""
//                             defaultValue=''
//                             required>
//                             <option disabled value=''>Seleccione un Vendedor</option>
//                             {listaFiltradaResultadoBusqueda.map((objetoVendedorDentroDeListaVendedores) => {

//                                 return (

//                                     <option
//                                         key={nanoid()}//Me permite tener un indentificador para cada elemento option que el .map
//                                         // crea y le permite a react saber cual es cual .. nanoid es una libreria muy liviana
//                                         value={objetoVendedorDentroDeListaVendedores.nombre}>
//                                         {`${objetoVendedorDentroDeListaVendedores.nombre}
//                                           ${objetoVendedorDentroDeListaVendedores.apellido}`}
//                                     </option>

//                                 );

//                             })}


//                         </select>
//                         {/* <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='nombreVendedor'
//                             required
//                         // value={nombreVendedor}                       //---------------------------------------------------
//                         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                         //     //                        cuando se usa un estado para cada input
//                         //     setNombreVendedor(evento.target.value);  //--------------------------------------------------
//                         // }}
//                         /> */}
//                     </label>
//                     <label className='font-bold text-gray-800' htmlFor="identificacionVendedor">Indentificaci??n
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='identificacionVendedor'
//                             required
//                         // value={identificacionVendedor}                       //---------------------------------------------------
//                         // onChange={(evento) => {                                          //intrucciones necesarias para tener control del un input
//                         //     //                                               cuando se usa un estado para cada input
//                         //     setIdentificacionVendedor(evento.target.value);                                //--------------------------------------------------
//                         // }}
//                         />
//                     </label>


//                     <label className='font-bold text-gray-800' htmlFor="nombreCliente">Nombre Cliente
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='nombreCliente'
//                             required
//                         // value={nombreCliente}                       //---------------------------------------------------
//                         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                         //     //                                       cuando se usa un estado para cada input
//                         //     setNombreCliente(evento.target.value);  //--------------------------------------------------
//                         // }}
//                         />
//                     </label>
//                     <label className='font-bold text-gray-800' htmlFor="identificacionCliente">Indentificaci??n
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='identificacionCliente'
//                             required
//                         // value={identificacionCliente}                       //---------------------------------------------------
//                         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                         //     //                                                    cuando se usa un estado para cada input
//                         //     setIdentificacionCliente(evento.target.value);  //--------------------------------------------------
//                         // }}
//                         />
//                     </label>

//                     {/*
//                         agregarNuevoProductoAVenta es una funcion que estoy pasando como prop a componente TablaProductosVenta se
//                         la paso completa la funcion sin los parentesis por que paso la funcion no la ejecucion, en caso de pasarla con
//                         parentesis le estaria pasando la ejecucion es decir la estaria invocando o llamando a su ejecucion  */}

//                     <TablaProductosAVender productos={productos} setProductos={setProductos} setVentaTabla={setVentaTabla}
//                     ventaTabla={ventaTabla} />












//                     <label className='font-bold text-gray-800' htmlFor="cantidadProducto">Cantidad Producto
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='cantidadProducto'
//                             required
//                             // value={cantidadProducto}                       //---------------------------------------------------
//                             onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                                 //                                    cuando se usa un estado para cada input
//                                 setCantidadProducto(evento.target.value);  //--------------------------------------------------
//                             }}
//                         />
//                     </label>
//                     <label className='font-bold text-gray-800' htmlFor="precioUnitario">Precio Producto
//                         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='precioUnitario'
//                             required
//                             // value={precioUnitario}                       //---------------------------------------------------
//                             onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                                 //                                    cuando se usa un estado para cada input
//                                 setPrecioUnitario(evento.target.value);  //--------------------------------------------------
//                             }}
//                         />
//                     </label>
//                     <label className='font-bold text-gray-800' htmlFor="valorTotal">Valor Total
//                         <input className=' block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//                             type="text"
//                             name='valorTotal'
//                             value={precioUnitario * cantidadProducto}                      //---------------------------------------------------
//                         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//                         //     //                                    cuando se usa un estado para cada input
//                         //     setValorTotal(evento.target.value);  //--------------------------------------------------
//                         // }}
//                         />
//                     </label>
//                 </div>
//                 <button className=' text-3xl bg-blue-500 border border-gray-500 p-5 self-center m-3
//                 rounded-full  hover:bg-blue-900 text-gray-200'
//                     type='submit'
//                 // onClick={() => {                   //intrucciones necesarias para tener control del un input
//                 //     enviarAlBackend();            //    cuando se usa un estado para cada input

//                 // }
//                 // }
//                 >Registrar Venta</button>
//             </form>



//         </div>
//     )
// }


// const TablaProductosAVender = ({ productos, setProductos, setVentaTabla ,ventaTabla }) => {

//     const [productoAAgregar, setProductoAAgregar] = useState({})
//     const [filasTablaProductoAVender, setFilasTablaProductoAVender] = useState([])// array de objetos seleccionados luego puedo 
//     // usar el .map para recorrer cada elemento de esta lista y mostrar por cada objeto de la lista un fila de la tabla de 
//     // porductos a vender 

//     const agregarNuevoProductoAVenta = () => {

//         setFilasTablaProductoAVender([...filasTablaProductoAVender, productoAAgregar]) // me permite ir guardando cada objeto de 
//         // producto seleccionado en una lista de productos seleccionados de manera que cada objeto producto me represente un fila 
//         // de la tabla donde estaran los productos seleccionados para vender 

//         setProductos(productos.filter((p) => p._id !== productoAAgregar._id))// me permite quitar del dropdown el producto que acabo 
//         // de agregar a la tabla de productosa a vender dado que me cambia el estado donde estan almacenado los productos traidos desde 
//         // la base de datos pero en esta instrucion dejo los mismos solo menos cada producto que voy agregando a la tabla de productos 
//         // a vender 

//         setProductoAAgregar({}); // me permite reinicializar el dropdown y que no me salga el siguiente producto de primero mostrandose
//         // si no que vuelva a su estado inicial mostrando el mensaje de selecionar producto y dentro esten los demas productos menos el 
//         // que se acabo de agregar 
//     }

//     useEffect(() => {

//         // console.log("producto seleccionado : ", productoAAgregar)
//         // console.log("filasTablaProductoAVender : ", filasTablaProductoAVender)// lista de objeto productos seleccionados para vender 
//     }, [productoAAgregar, filasTablaProductoAVender])


//     useEffect(() => {

//         setVentaTabla(filasTablaProductoAVender)
//         console.log("filasTablaProductoAVender : ", filasTablaProductoAVender)// lista de objeto productos seleccionados para vender 
//         console.log("soy la data a enviar ...ventaTabla", ventaTabla)

//     }, [filasTablaProductoAVender, setVentaTabla])

//     const eliminarProductoDeLaFila = (productoDeLaFilaAEliminar) => {

//         setFilasTablaProductoAVender(filasTablaProductoAVender.filter((productoAVender) =>  // me guarda en todos los productos 
//             // seleccionados anteriomente nuevamente en la TablaProductoAVender pero solo los productos que tiene el id 
//             // diferente a producto que queremos eliminar (productoDeLaFilaAEliminar)
//             productoAVender._id !== productoDeLaFilaAEliminar._id

//         ));

//         setProductos([...productos, productoDeLaFilaAEliminar])// me permite retornar a la lista de productos el el dropdown 
//         // los cuales solo todos los productos del backend, el producto que acabo de eliminar mas los anteriores que ya estan guardados
//         // esta instruccion expresion (...productos) indica traiga todo lo que este guardado actualmente en productos y siga guardandolo 

//     }
//     // useEffect(() => {

//     //     console.log(productoAAgregar)
//     //     console.log(filasTablaProductoAVender)
//     // }, [productoAAgregar])



//     return (

//         <div>
//             <div className='flex '>




//                 <label className='font-bold text-gray-800 ' htmlFor="descripcionProducto">

//                     <select className='p-2 rounded-lg block mt-2 '
//                         name="codigoProducto"
//                         id=""
//                         value={productoAAgregar._id ?? ''}// ?? me permite preguntarle si el elemento con id no existe agrege ' ' 
//                         // es decir como en el inicio no hay ningun producto seleccionado no ha ocurrido el evendo onChange el dato guardsd
//                         // en el estado productoAAgregar._id no existe y por ende no me ponga eso si no el mensaje de la primera option el cual 
//                         // debe tener el mismo value = '' para ponerlo 
//                         onChange={evento => setProductoAAgregar(productos.filter((producto) => producto._id === evento.target.value)[0])}> {/*con el [0] tomo el 
//                         primer elemento de la lista de objetos sin ese [0] la funcion filter me arroja una lista de objetos [{}]y necesit el objeto
//                         como tal primero el producto seleccionado  */}
//                         <option disabled value=''>Seleccione un Producto</option>
//                         {productos.map((objetoProductoDentroDeListaProductos) => {

//                             return (

//                                 <option
//                                     key={nanoid()}
//                                     value={objetoProductoDentroDeListaProductos._id}> {/*este es un detalle a analizar para la visualizacion en la tabla ventas*/}
//                                     {`${objetoProductoDentroDeListaProductos.codigoProducto}
//                           ${objetoProductoDentroDeListaProductos.descripcionProducto}`}
//                                 </option>

//                             );

//                         })}


//                     </select>



//                     {/*
//         <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
//             type="text"
//             name='codigoProducto'
//             required

//         // value={codigoProducto}                       //---------------------------------------------------
//         // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
//         //     //                                            cuando se usa un estado para cada input
//         //     setCodigoProducto(evento.target.value);  //--------------------------------------------------
//         // }}
//         /> */}
//                 </label>
//                 <button
//                     className='text-3xl bg-blue-500 border border-gray-500 p-5 self-center m-3 rounded-full  hover:bg-blue-900 text-gray-200'
//                     type='button'
//                     onClick={() => {
//                         agregarNuevoProductoAVenta();

//                     }}
//                 >
//                     Agregar producto
//                 </button>


//             </div>
//             <table className='tabla'>
//                 <thead>
//                     <tr>
//                         <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Id</th>
//                         <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Descripci??n</th>
//                         <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Precio Unitario</th>
//                         <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Estado</th>
//                         <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Cantidad</th>
//                         <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Eliminar</th>
//                         <th className='hidden'>Input</th>

//                     </tr>


//                 </thead>
//                 <tbody>
//                     {filasTablaProductoAVender.map((objetoDeLaLista, index) => {
//                         return (
//                             <tr key={nanoid()} >
//                                 <td>{objetoDeLaLista._id}</td>
//                                 <td>{objetoDeLaLista.descripcionProducto}</td>
//                                 <td>{objetoDeLaLista.precioUnitario}</td>
//                                 <td>{objetoDeLaLista.estadoProducto}</td>
//                                 <td>
//                                     <label htmlFor={`cantidadProducto_${index}`}>
//                                         <input type="number" name={`cantidadProducto_${index}`} />
//                                     </label>
//                                 </td>
//                                 <td>

//                                     <i
//                                         className="fas fa-trash-alt text-red-800 hover:text-red-600 ml-2 cursor-pointer"
//                                         onClick={() => {

//                                             eliminarProductoDeLaFila(objetoDeLaLista);
//                                         }}

//                                     />
//                                 </td>
//                                 <input hidden defaultValue={objetoDeLaLista._id} name={`producto_${index}`} /> {/*input oculto que me 
//                                 robara cada valor de la tabla y puedan ser enviados dado que FormData solo funciona en inputs no 
//                                 en tablas  */}
//                             </tr>
//                         )
//                     })}



//                 </tbody>
//             </table>
//         </div>


//     )

// }

// export default ModuloVentas

