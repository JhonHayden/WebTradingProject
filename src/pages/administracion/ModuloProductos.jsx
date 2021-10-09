import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// datos que simularan ser traidos desde el backend
const productosDatosDelBackend = [{

    codigoProducto: '123',
    descripcionProducto: 'tarjeta electronica',
    precioUnitario: '150000',
    estadoProducto: ''

},
{

    codigoProducto: '122',
    descripcionProducto: 'Motor',
    precioUnitario: '110000',
    estadoProducto: ''

},
{

    codigoProducto: '121',
    descripcionProducto: 'Rele electronico',
    precioUnitario: '170000',
    estadoProducto: ''

},]

const ModuloProductos = () => {

    //creo las variables de estado .. creo los estados que almacenara cada cambio de cada componente 
    //y elemento de html de mi aplicacion sobre todos los componente relacionado a eventos, para esto de el 
    // almacenamiento se usa el hook useState()

    const [mostrarTablaProductos, setMostrarTablaProductos] = useState(false);
    const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Producto');

    const [productos, setProductos] = useState([]); // estado o variable que me almacena los datos del backend en formato .json


    useEffect(() => {
        // con estes useEffect vacio mas adelante traemos los datos desde el backend y la guardaremos 7
        // en un estado y este sera el estado Productos
        setProductos(productosDatosDelBackend); // guardo en mi estado Productos los datos del backend

    }, [])



    useEffect(() => {
        mostrarTablaProductos ? setCambiarNombreBoton('Nuevo Producto') : setCambiarNombreBoton('Tabla Productos')

    }, [mostrarTablaProductos])
    return (
        <div >
            <h1 className='text-4xl'>Módulo Productos</h1>

            <button className='  self-end text-3xl bg-blue-400 p-5 mb-14 
                rounded-full shadow-md hover:bg-blue-900 text-gray-100'
                type='button'
                onClick={() => {


                    setMostrarTablaProductos(!mostrarTablaProductos)
                }
                }
            >{cambiarNombreBoton}</button>

            {/* el props que le paso al componente TablaProductos es mi estado donde esta 
                                                almacenado las Productos desde el backend */}
            {mostrarTablaProductos ? (
                <TablaProductos listaProductos={productos} />
            ) : (
                <FormularioProductos
                    irTablasProductos={setMostrarTablaProductos}
                    funcionAgregarNuevoProducto={setProductos}   // prop para poder agregar Productos desde el formulario 
                    listaProductos={productos} // necesito tambien la lista de formato json osea mis datos backend para poder agregrar esos y los nuevos 
                />)}

            {/* // enviarDatosAlBackend();  // funcion del boton cuando se ejecuta el evento onClick
                        // enviarAMaestroProductos();

                    }}>Registro Producto</button> */}


            <ToastContainer position="top-center"  /*componente de una libreria*/
                autoClose={5000} />   
        </div>
    )

}

// por medio de los props le envio mis datos del backend al componente TablaProductos para que el lo muestre
// ese props o input para el componente TablaProductos se llamara listaProductos y este es mi estado Productos por ende debo usar 
// un useEffect para escuchar ese estado 
const TablaProductos = ({ listaProductos }) => {


    useEffect(() => {
        console.log(listaProductos)

    }, [listaProductos])

    return (
        <div>
            
            <div>
                <div className='flex flex-col '>
                    <h1 className=' text-center font-extrabold text-4xl mt-12'>
                        Maestro Productos
                    </h1>

                    <form className='text-3xl font-bold'>
                        <label htmlFor="buscar">
                            Buscar Producto
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
                            <tr className='' >
                                <th className='text-3xl p-5'>Codigo Producto</th>
                                <th className='text-3xl p-5'>Descripción Producto</th>
                                <th className='text-3xl p-5'>Precio Unitario</th>
                                <th className='text-3xl p-5'>Estado Producto</th>
                                <th className='text-3xl p-5'>Estado Producto</th>
                            </tr>
                            {/* codigoProducto: '123',
                                descripcionProducto: 'tarjeta electronica',
                                precioUnitario: '150000',
                                estadoProducto: '' */}

                        </thead>
                        <tbody>
                            {/* ya el componente TablaProductos tiene el json de los datos del backend el cual 
                            es un array y para mostrarlos en cada uno  las celdas correpondientes debemos recorrerlo
                            el array con el siguiente codigo en javaScript justo aqui donde arriba de las celdas al
                            inicion de tbody */}
                            {listaProductos.map((productos) => {  // como parametro de entrada le paso el estado que me tiene guardado 
                                // el arreglo y los datos en formato .json de mi datos del backend

                                return (
                                    // en el retorno pongo el html relacionada con el arreglo de mi informacion 
                                    <tr>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="codigoProducto"
                                            id=""
                                            value={productos.codigoProducto} />
                                        </td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="descripcionProducto"
                                            id=""
                                            value={productos.descripcionProducto} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="precioUnitario"
                                            id=""
                                            value={productos.precioUnitario} /></td>
                                        <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                                            type="text"
                                            name="estadoProducto"
                                            id=""
                                            value={productos.estadoProducto} /></td>
                                        {/* Drop-down list */}
                                        <td>
                                            <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-xl'
                                                type="text"
                                                name="estadoProducto"
                                                id="">
                                                <option value="">
                                                </option>
                                                <option value={productos.estadoProducto}>Disponible
                                                </option>
                                                <option value={productos.estadoProducto}>No Disponible
                                                </option>

                                            </select>
                                        </td>
                                    </tr>
                                );
                            })}{/* este codigo me transforma un array de tipo json en un array
                             de tipo html y es con .map me recorre el estado listaProductos */}
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    )
}



const FormularioProductos = ({
    irTablasProductos,
    listaProductos,                       // props 
    funcionAgregarNuevoProducto

}) => {


    // con el useRef y el FormData ya podemos eliminar cada estado para cada input por pruebas solo los comentaremos
    const [codigoProducto, setCodigoProducto] = useState('')
    const [descripcionProducto, setDescripcionProducto] = useState('')
    const [precioUnitario, setPrecioUnitario] = useState('')
    const [estadoProducto, setEstadoProducto] = useState('')
    // const [reset, setReset] = useState()


    // funcion que me hace todo el proceso de registro en la tabla Productos 
    const enviarAlBackend = () => {


        console.log('codigoProducto:', codigoProducto,'descripcionProducto:', descripcionProducto, 'precioUnitario:', precioUnitario, 'estadoProducto:', estadoProducto);

        //codigo para evitar que se envie una casilla vacia usando condicional if existe otra mejor forma y es usando html los atributos required de 
        // los input y el boton asociado al formulario ponerlo de tipo submit

        if (codigoProducto === ''  || descripcionProducto === '' || precioUnitario === '') {

            toast.error('Ingrese todos los datos', {
                position: "bottom-center",
                autoClose: 5000,
            })
        } else {


            toast.success('Registro Exitoso', {
                position: "bottom-center",
                autoClose: 5000,
            })

            irTablasProductos(true);// esto es equivante internamente a setMostrarTablaProductos (true) cambio el estado de mostrarTablaProductos


            funcionAgregarNuevoProducto([        // esta funcion es setProductos entonces me agrega nuevos datos a el array json pero necesito dejar lo que tiene y
                // agregra nuevos datos a la cola de este para esto se usa ...Productos me dice ponga los que ya tiene guardados 
                // listaProductos es el prop que es equivalente y le asigne el estado Productos la variable Productos 
                //spread operator ( ... ) significa ponga lo que ya tenia mas las cosas nuevas

                ...listaProductos, {
                    codigoProducto: codigoProducto,
                    descripcionProducto: descripcionProducto,
                    precioUnitario: precioUnitario,
                    estadoProducto: estadoProducto
                }
            ])

        }

    };


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

            console.log(claveDeCadaElementoDelFormData, valorDeCadaElementoDelFormData)

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
            <h1 className='text-4xl text-center font-extrabold p-14'>
                Formulario Productos
            </h1>

            {/* usaremos una propiedad de los formularios para generar una accion y es con el evento onSubmit donde le pondremos una 
            funcion para saber cuando se le esta haciendo submit con el boton del fomulario */}
            <form
                ref={referenciaFomulario} // con esto yo referencio esta etiqueta y como tal todo el grupo del fromulario y me devuelve un trozo
                // de este formulario como variable 
                onSubmit={submitFormulario} // con esto se le idica que ejecute esta accion esta funcion cuando se oprime el boton del formulario 
                className='flex flex-col text-4xl'>
                <label htmlFor="codigoProducto">Codigo Producto
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type='text'
                        placeholder=''
                        name="codigoProducto"
                        required
                        value={codigoProducto}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setCodigoProducto(evento.target.value);  //--------------------------------------------------
                        }}
                    />
                </label>
                <label htmlFor="descripcionProducto">Descripción Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='descripcionProducto'
                        required
                        value={descripcionProducto}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setDescripcionProducto(evento.target.value);  //--------------------------------------------------
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
                <label htmlFor="estadoProducto">Estado Producto:
                    <input className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                        type="text"
                        name='estadoProducto'
                        value={estadoProducto}                       //---------------------------------------------------
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setEstadoProducto(evento.target.value);  //--------------------------------------------------
                        }}
                    />
                </label>
                <label htmlFor="">

                    <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 text-xl'
                        type="text"
                        name="estadoProducto"
                        id=""
                        onChange={(evento) => {             //intrucciones necesarias para tener control del un input
                            //
                            setEstadoProducto(evento.target.value);  //--------------------------------------------------
                        }}
                    >
                        <option value="">
                        </option>
                        <option value='Disponible'>Disponible
                        </option>
                        <option value='No Disponible'>No Disponible
                        </option>

                    </select>

                </label>
                <button className='  self-end text-3xl bg-blue-400 p-5 mb-14 
                rounded-full shadow-md hover:bg-blue-900 text-gray-100'
                    type='submit'
                    onClick={() => {

                        enviarAlBackend();
                    }
                    }
                >Registrar Producto</button>
            </form>



        </div>
    )
}

export default ModuloProductos