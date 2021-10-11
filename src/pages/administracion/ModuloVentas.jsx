import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';




const ModuloVentas = () => {

    //creo las variables de estado .. creo los estados que almacenara cada cambio de cada componente 
    //y elemento de html de mi aplicacion sobre todos los componente relacionado a eventos, para esto de el 
    // almacenamiento se usa el hook useState()

    const [mostrarTablaVentas, setMostrarTablaVentas] = useState(false);
    // // const [fecha, setFecha] = useState('dd/mm/aa');
    const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Venta');

    const [ventas, setVentas] = useState([]); // estado o variable que me almacena los datos del backend en formato .json


    useEffect(() => {
        // con este useEffect vacio mas adelante traemos los datos desde el backend y la guardaremos 
        // en un estado y este sera el estado ventas

        // aqui dentro haremos la peticion de GET de REST con axios para traer informacion de la API y la base de datos 
         
        setVentas([]); // tendremos una lista vacia en el inicio 
    }, [])



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
                <TablaVentas listaVentas={ventas} /> // prop lista de las ventas es decir los datos del backend para que se muestren en la tabla
            ) : (
                <FormularioVentas
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
const TablaVentas = ({ listaVentas }) => {


    useEffect(() => {
        console.log(listaVentas)

    }, [listaVentas])

    return (
        <div>
            <div className='border rounded-xl p-3 bg-blue-400 '>
                <div className='flex flex-col '>
                    <h1 className=' text-center font-extrabold text-4xl mt-2'>
                        Maestro Ventas
                    </h1>

                    <form className='text-3xl font-bold text-gray-800 '>
                        <div className='bg-blue-500 w-max p-3 rounded-xl'>
                            <label className='font-bold' htmlFor="buscar">
                                Buscar Venta
                                <input name='buscar'
                                    id="buscar"
                                    type="text"
                                    className='bg-gray-50 border border-gray-300 p-2 rounded-lg ml-5'
                                />

                            </label>
                        </div>
                    </form>
                    <button
                        type='button'
                        className='  self-end text-3xl bg-blue-600 p-5 mb-14 rounded-full shadow-md hover:bg-blue-900 text-gray-100'

                    >Actualizar Estado</button>

                </div>
                <div>
                    <table >
                        <thead >
                            <tr >
                                <th className='text-3xl  bg-blue-500 rounded-xl p-1 '>Codigo Venta</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 ' >Fecha</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Producto</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Cantidad</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 ' >Vendedor</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Cliente</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Precio Unitario</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Valor Venta</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Estado Venta</th>
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
                                            <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-xl'
                                                type="text"
                                                name=""
                                                id=""
                                                defaultValue={0}>
                                                <option value={0}>Seleccione una opción
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
    // props 
    irTablasVentas,  // funcion de modificacion estado usado para la renderizacion condicional
    listaVentas,      // representa mis datos del backend, las ventas y  ventasDatosBackend
    funcionAgregarNuevaVenta  // me permite modificar los datos del backend es decir la lista ventas 

}) => {


    // con el useRef y el FormData ya podemos eliminar cada estado para cada input por pruebas solo los comentaremos
    const [fecha, setFecha] = useState('')
    const [codigoVenta, setCodigoVenta] = useState('')
    const [nombreVendedor, setNombreVendedor] = useState('')
    const [identificacionVendedor, setIdentificacionVendedor] = useState('')
    const [nombreCliente, setNombreCliente] = useState('')
    const [identificacionCliente, setIdentificacionCliente] = useState('')
    const [cantidadProducto, setCantidadProducto] = useState('')
    const [codigoProducto, setCodigoProducto] = useState('')
    const [precioUnitario, setPrecioUnitario] = useState('')
    const [valorTotal, setValorTotal] = useState('')
    // const [reset, setReset] = useState()


    // funcion que me hace todo el proceso de registro en la tabla ventas 
    const enviarAlBackend = () => {


        console.log('fecha:', fecha, 'codigoVenta:', codigoVenta, 'nombreVendedor:', nombreVendedor, 'identificacionVendedor:',
            identificacionVendedor, 'nombreCliente:', nombreCliente, 'identificacionCliente:', identificacionCliente, 'cantidadProducto:',
            cantidadProducto, 'codigoProducto:', codigoProducto, 'precioUnitario:', precioUnitario, 'valorTotal:', valorTotal);

        //codigo para evitar que se envie una casilla vacia usando condicional if existe otra mejor forma y es usando html los atributos required de 
        // los input y el boton asociado al formulario ponerlo de tipo submit

        if (fecha === '' || codigoVenta === '' || nombreVendedor === '' || identificacionVendedor === '' || nombreCliente === ''
            || identificacionCliente === '' || cantidadProducto === '' || codigoProducto === '' || precioUnitario === '') {

            toast.error('Ingrese todos los datos', {
                position: "bottom-center",
                autoClose: 5000,
            })
        } else {


            toast.success('Registro Exitoso', {
                position: "bottom-center",
                autoClose: 5000,
            })

            irTablasVentas(true);// esto es equivante internamente a setMostrarTablaVentas (true) cambio el estado de mostrarTablaVentas


            funcionAgregarNuevaVenta([        // esta funcion es setVentas entonces me agrega nuevos datos a el array json pero necesito dejar lo que tiene y
                // agregra nuevos datos a la cola de este para esto se usa ...ventas me dice ponga los que ya tiene guardados 
                // listaVentas es el prop que es equivalente y le asigne el estado ventas la variable ventas 
                //spread operator ( ... ) significa ponga lo que ya tenia mas las cosas nuevas

                ...listaVentas, {
                    codigoVenta: codigoVenta,
                    fecha: fecha,
                    codigoProducto: codigoProducto,
                    cantidadProducto: cantidadProducto,
                    nombreVendedor: nombreVendedor,
                    nombreCliente: nombreCliente,
                    precioUnitario: precioUnitario,
                    valorTotal: valorTotal
                }
            ])

        }

    };

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
        const claveValorDeValuesFomulario = new FormData(referenciaFomulario.current); //FormData=  interfaz que  proporciona una manera de construir fácilmente
        //  un conjunto de pares clave / valor que representan campos de formulario y sus valores, que luego se pueden enviar fácilmente mediante 
        //  el XMLHttpRequest.send()método. Utiliza el mismo formato que usaría un formulario si se configurara el tipo de codificación
        //   "multipart/form-data".
        // necesita que los input tengan un name esta se usara de clave para relacionarla con el value de ese input 

        // creamos una variable de tipo objeto, es decir un objeto que me contenga todos los datos de los input del formulario 
        // es decir sera la venta, un objeto venta, nueva venta, me guarda los valores actuales que ingresan por los inputs
        //y estan en la data .. 
        const objetoNuevaVenta = {};  //variable objeto la declaro vacia aqui estara mi objeto nueva venta que representa una venta 
        // con todos los datos de los inputs actualmente registrados cada ves que se registra un nueva venta aqui se guarda y luego es añadida 



        claveValorDeValuesFomulario.forEach((valorDeCadaElementoDelFormData, claveDeCadaElementoDelFormData) => {

            console.log(claveDeCadaElementoDelFormData + ' : ', valorDeCadaElementoDelFormData)

            objetoNuevaVenta[claveDeCadaElementoDelFormData] = valorDeCadaElementoDelFormData; //lleno en objeto con los
            // datos de una venta, la cual sus atributos son los datos entrados por los inputs que el usuario registro 
            // en la interaccion con el formulario de la aplicacion 

            // todo esto con la finalidad de evitar el uso de un estado para cada input puesto que con el FormData me muestra todo los datos 
            // pero para usar esto primero usamos permitimos el evento onSubmit en el form y el boton debe ser type=submit luego referenciamos
            // el formulario con el hook useRef y luego le obtenemos el valor actual y a este se lo damos como entrada a FormData para que 
            // le de un formato y lo acomode en clave valor y luego esto se lo asignamos a una  variable y por ultimo la recorremos con un 
            // foreach y mostramos la clave y el valor  
        })

        // codigo que me trasnforma las peticiones de submit a formato REST en este caso estamos haciendo la peticion de crear venta
        //o registrar venta y en REST se hace con POST.. pero para hacer esto debemos tener instalado axios la cual es la libreria
        // que me transformara ese codigo en formato REST y porder hacer las peticiones al backend 

        // la accion de ejecutar la peticion POST la hace el submit de formulario 
        const options = {
            method: 'POST', // tipo de peticion es crear nuevo registro 
            url: 'https://vast-waters-45728.herokuapp.com/vehicle/create',// servidor donde enviare la peticion e informacion
            headers: { 'Content-Type': 'application/json' },
            data: {  // datos a enviar
                fecha: objetoNuevaVenta.fecha, codigoVenta: objetoNuevaVenta.codigoVenta, nombreVendedor: objetoNuevaVenta.nombreVendedor,
                identificacionVendedor: objetoNuevaVenta.identificacionVendedor,nombreCliente:objetoNuevaVenta.nombreCliente,
                identificacionCliente:objetoNuevaVenta.identificacionCliente,codigoProducto: objetoNuevaVenta.codigoProducto,
                 cantidadProducto:objetoNuevaVenta.cantidadProducto, precioUnitario:objetoNuevaVenta.precioUnitario,
                  valorTotal:objetoNuevaVenta.valorTotal
            },
        };

        await axios  // el await es para decirle que debe esperar una respuesta puesto que estas operaciones son asincronas se tiene que 
        // esperar a obtener un resultado para esto mostraremos loading para mejorar la experiencia de usuario mietras espera 
        // pero por eso se coloca await para que espere pero se debe colocar async la funcion que este use el await  
        // cuando necesitemos o debemos que esperar a que una operacion ocurra debemos usar await para ayudarnos a esperar a que el 
        // backend nos de una respuesta y por eso se usa await para esperar y luego ejecutar el resultado si de esta peticion si fue realizada
        // con exito o no 

        // axios esta funcion axios no se tienen que ejecutar sin el await por que no tendre como esperar a ver que paso 
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Venta agregada con éxito', {
                    position: "bottom-center",
                    autoClose: 5000,
                })
            })
            .catch(function (error) {
                console.error(error);
                toast.success('Error registrando venta', {
                    position: "bottom-center",
                    autoClose: 5000,
                })
            });

        // irTablasVentas(true) // llamada de funcion que entro como prop al formulario y me muestra y permite modificar el estado usado para
        // la renderizacion condicional y mostrar la tabla apenas ocurre el evenot onSubmit

        funcionAgregarNuevaVenta([...listaVentas, objetoNuevaVenta]);// permite primero con el operador ... agrega los datos anteriores o todos los
        // que tiene la data o datos enviados y leidos desde el backend y luego le agrego al final de esta lista de objetos una nueva venta 



        console.log('datos del formulario enviados', claveValorDeValuesFomulario);// con referenciaFomulario.current me saca todo el codigo en 
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
                // de este formulario como variable 
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
                    <label className='font-bold text-gray-800' htmlFor="codigoVenta">Codigo Venta
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
                    </label>

                    <label className='font-bold text-gray-800' htmlFor="nombreVendedor">Nombre Vendedor
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='nombreVendedor'
                            required
                        // value={nombreVendedor}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                        cuando se usa un estado para cada input
                        //     setNombreVendedor(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="identificacionVendedor">Indentificación
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
                    <label className='font-bold text-gray-800' htmlFor="identificacionCliente">Indentificación
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

                    <label className='font-bold text-gray-800' htmlFor="codigoProducto">Codigo Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='codigoProducto'
                            required
                        // value={codigoProducto}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                            cuando se usa un estado para cada input
                        //     setCodigoProducto(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="cantidadProducto">Cantidad Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='cantidadProducto'
                            required
                        // value={cantidadProducto}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                    cuando se usa un estado para cada input
                        //     setCantidadProducto(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="precioUnitario">Precio Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='precioUnitario'
                            required
                        // value={precioUnitario}                       //---------------------------------------------------
                        // onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                        //     //                                    cuando se usa un estado para cada input
                        //     setPrecioUnitario(evento.target.value);  //--------------------------------------------------
                        // }}
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="valorTotal">Valor Total
                        <input className=' block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='valorTotal'
                        // value={cantidadProducto * precioUnitario}                       //---------------------------------------------------
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