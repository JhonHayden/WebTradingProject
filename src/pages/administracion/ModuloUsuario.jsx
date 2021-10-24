import React, { useEffect, useState, useRef } from 'react'
// import useActiveRoute from 'hooks/useActiveRoute'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'; // me permite tener id 
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerUsuarios, editarUsuario, deleteUsuario } from 'utils/api';
import PrivateComponent from 'components/PrivateComponent';


const ModuloUsuario = () => {

    // const [mostrarTablaUsuarios, setMostrarUsuarios] = useState(true);

    const [ejecutarConsultaGET, setEjecutarConsultaGET] = useState(true);

    const [usuarios, setUsuarios] = useState([]);// lista de usuarios traidos desde el backend 
    const [datoInputBusqueda, setDatoInputBusqueda] = useState('');// inicializamos en vacio 
    // necesito un estado para almacenar la lista filtadra que me retorna el .filter y asi luego pasarla al .map de 
    // la renderizacion de las filas de la tabla y muestre dinamicamente las filas del resultado de la busqueda
    const [listaFiltradaResultadoBusqueda, setListaFiltradaResultadoBusqueda] = useState(usuarios);// evidentemente 
    // su valor inicial debe ser la listaUsuarios traida del backend 
    // la funcion setListaFiltradaResultadoBusqueda le pasare la lista filtrada resultado de la busqueda


    useEffect(() => {
        // console.log('valor almacenado en el estado busqueda : ', datoInputBusqueda); //imprimiremos lo que tiene el input busqueda la idea es almacenar
        //   el dato o robar el dato del input de buscar usuario y guardarlo en el estado busqueda para luego trabajar con este dato y buscarlo en la 
        //   tabla
        // console.log("lista original", listaUsuarios)
        setListaFiltradaResultadoBusqueda( // modifico el estdado listaFiltradaResultadoBusqueda, con el resultado de la busqueda
            // es decir la listafiltrada con los criterios de busqueda, conicidencia el letras con el texto del input buscar usuario

            usuarios.filter((objetoDeLaListaUsuarios) => {

                // console.log("objetoDeLaListaUsuarios", objetoDeLaListaUsuarios);
                return JSON.stringify(objetoDeLaListaUsuarios).toLowerCase().includes(datoInputBusqueda.toLowerCase()); // me permite
                // primero con JSON.stringify() transformo todo el objetoDeLaListaUsuarios en string luego con 
                // toLowerCase() convierto ese string en minusculas y luevo con includes busco en ese string coincidencia
                // en letras o palabras con el datoInputBusqueda que tambien lo converti en minusculas y retorno esas coincidencisa
                // y asi se hace la busqueda filter me devuelve una lista de objetos con la coincidencia  NO TENGO EL BACKEND POR ESO NO ME IMPRIME NADA
            })) // con .filter busco dentro de un lista de objetos las conin
        // dencias deacuerdo a lo que le especifique tengo que dentro de los parentesis entregarle una arrow funcion con 
        // parametro cada elementto de la lista de obejtos es decir cada objeto
        // console.log("lista Filtrada",listaUsuarios.filter((objetoDeLaListaUsuarios) => {

        //     console.log("objetoDeLaListaUsuarios",objetoDeLaListaUsuarios);
        //     return JSON.stringify(objetoDeLaListaUsuarios).toLowerCase().includes(datoInputBusqueda.toLowerCase()); // me permite
        //     // primero con JSON.stringify() transformo todo el objetoDeLaListaUsuarios en string luego con 
        //     // toLowerCase() convierto ese string en minusculas y luevo con includes busco en ese string coincidencia
        //     // en letras o palabras con el datoInputBusqueda que tambien lo converti en minusculas y retorno esas coincidencisa
        //     // y asi se hace la busqueda filter me devuelve una lista de objetos con la coincidencia  NO TENGO EL BACKEND POR ESO NO ME IMPRIME NADA
        // })) // con .filter busco dentro de un lista de objetos las conin
        // // dencias deacuerdo a lo que le especifique tengo que dentro de los parentesis entregarle una arrow funcion con 
        // // parametro cada elementto de la lista de obejtos es decir cada objeto
    }, [datoInputBusqueda, usuarios]);



    useEffect(() => {

        const fetchUsuarios = async () => {


            await obtenerUsuarios(
                (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function
                    setUsuarios(response.data); // response es la respuesta del backend a la peticion get es decir trae toda la trama de la respuesta
                    // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
                    console.log('SI.........FUNCIONO LA PETICION GET!!! !!!', response.data);
                },
                (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
                    console.error(error);
                    // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
                    console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
                }
            );
        }

        if (ejecutarConsultaGET) {


            fetchUsuarios();
            setEjecutarConsultaGET(false);
        }

    }, [ejecutarConsultaGET]);

    // const ruta = '/administracion/moduloUsuario';
    // const isRutaActiva = useActiveRoute(ruta);

    // useEffect(() => {


    //     console.log(isRutaActiva, ruta)

    //     setEjecutarConsultaGET(true)
    // }, [isRutaActiva, ruta])


    // console.log(usuarios);

    // useEffect(() => {


    //     if (mostrarTablaUsuarios) {   // si estamos en la pagina de la tabla usuarios ejecute la funcion de obtenerUsuariosDelBackend 
    //         // esto con el proposito que siempre me traiga los datos del backend a la tabla 
    //         setEjecutarConsultaGET(true)// su muestro la tabla ejecuto la consulta GET y traigo los datos del Backend
    //     }

    //     // setUsuarios([]); // tendremos una lista vacia en el inicio 
    // }, [mostrarTablaUsuarios])//apenas sucede un cambio en el estado mostrar tabla se hace la peticion traer informacion 
    // // GET

    return (
        <div className='border rounded-xl bg-blue-400 self-start mt-24 p-8'>
            <div className='flex flex-col  '>
                <h1 className='text-center font-extrabold text-4xl mt-2 mb-5'>
                    Maestro Usuarios
                </h1>

                <form className='text-3xl font-bold'>
                    <div className='bg-blue-500 w-max p-3 rounded-xl mb-10'>
                        <label htmlFor="buscar">
                            Buscar Usuario
                            <input
                                className='bg-gray-50 border border-gray-300 p-2 rounded-lg m-2 '
                                name='buscar'
                                id="buscar"
                                type="text"
                                value={datoInputBusqueda} //le asignamos el estado a valor del input
                                onChange={(evento) => {
                                    setDatoInputBusqueda(evento.target.value); // cada ves que se registre (cambio) un dato en el input
                                    // busqueda lo guardo en el estado datoInputBusqueda
                                }} />
                        </label>
                    </div>
                </form>

            </div>
            <div>
                <table >
                    <tr>
                        <th className='text-3xl  bg-blue-500 rounded-xl p-1'>Nombre</th>
                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Correo</th>
                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Rol</th>
                        <th className='text-3xl  bg-blue-500 rounded-xl p-1 ' >Estado</th>
                        <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Acciones</th>
                    </tr>
                    <tbody>
                        {listaFiltradaResultadoBusqueda.map((elementoUsuario) => {// le paso la lista filtrada al .map para que me lo convierta
                            // a una lista de elementos de html y los muestre en la table los td y filas de la tabla
                            // ejecuto al arreglo el metodo .map y el me entrega un  parametro de entrada  un objeto de usuario
                            // el arreglo y los datos en formato .json de mi datos del backend 
                            return (
                                // en el retorno pongo el html relacionada con el arreglo de mi informacion 
                                // componente FilaUsuario me representa las fila de la tabla usuarios
                                // le pasamos el prop de  setEjecutarConsultaGET
                                <FilaUsuario
                                    key={nanoid()}
                                    usuario={elementoUsuario}
                                    setEjecutarConsultaGET={setEjecutarConsultaGET} />/*ELEMENTO PADRE DEL .MAP DEBE TENER UN ID O KEY UNICO con nanoid me resuelve esto
                                    me pone un id unico para cada elemento*/
                            );
                        })
                        }{/* este codigo me transforma un array de tipo json en un array
                             de tipo html y es con .map me recorre el estado listaUsuarios */}

                    </tbody>

                </table>

            </div>
        </div>
    )
}

const FilaUsuario = ({ usuario, setEjecutarConsultaGET }) => {
    //console.log(usuario); //imprime mi usuarios traidas del backend 
    // creamos un estado de tipo boolean para hacer la renderizacion condicional del cambio de campos de tabla 
    // a campos de input de fomulario para poder editar los datos
    const [permitirEditar, setPermitirEditar] = useState(false) // estado de control de permitir ediccion si es true se puede editar si es falso no 
    // si es true me pinta los inputs del formulario si es false me pinta las celdas de la tabla normal, ese estado me lo cambia de valor el icono 
    // de editar con el evento onclick
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({ // estado que me tiene la informacion de un usuario de cualquier fila que elija
        // para editar  algun campo 

        name: usuario.name,
        email: usuario.email,
        rol: usuario.rol,
        estado: usuario.estado
    })

    const [mostrarDialog, setMostrarDialog] = useState(false)// muestra dialog para confirmar accion delete 

    // console.log("soy el nuevo usuario : ", infoNuevoUsuario.rol);
    // console.log("soy el viejo usuario : ", usuario.rol);


    const actualizarUsuario = async () => { // debe ser asyncrona 
        // console.log(infoNuevoUsuario);
        await editarUsuario(
            usuario._id,

            infoNuevoUsuario,

            (response) => {

                console.log(response.data);
                // console.log(response.data);
                // alert('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
                console.log('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
                toast.success('Usuario actualizado con éxito', {
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
                toast.error('Error modificando usuario', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                // setPermitirEditar(false);// APENAS FUNCIONE SE LO QUITO AUN NO SE HACE EL BACKEND POR ESO MO FUNCIONA TODAVIA
            }

        )


    };

    const eliminarUsuario = async () => { // funcion de eliminar usuario esta me ejecuta la peticion DELETE al servidor

        await deleteUsuario(

            usuario._id,

            { id: usuario._id },

            (response) => {
                console.log(response.data);
                // alert('SI.........FUNCIONO LA PETICION DELETE!!! !!!')
                console.log('SI.........FUNCIONO LA PETICION DELETE!!! !!!');

                toast.success('Usuario eliminado con éxito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                setEjecutarConsultaGET(true); // si elimino con exito actualiza la tabla con esta funcion de setEjecutarConsultaGET en true por que 
                //         // me ejecuta la consulta GET y me trae la informacion y la muestra en el frontend

            },

            (error) => {
                console.error(error);
                console.log('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
                // alert('NO.........FUNCIONO LA PETICION DELETE!!! !!!')
                toast.error('Error eliminando usuario', {
                    position: "bottom-center",
                    autoClose: 5000,
                })
            }
        );

        setMostrarDialog(false); // despues de eliminar cerramos el dialog 


    };

    return (
        <tr> {permitirEditar ?
            (
                <>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl '>
                        {usuario.name}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {usuario.email}
                    </td>
                    <td>
                        <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg  text-xl'
                            type="text"
                            name="rol"
                            id=""
                            value={infoNuevoUsuario.rol}
                            onChange={(evento) => {

                                setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: evento.target.value })

                            }}
                        >
                            <option defaultValue='Seleccione una opción'>Seleccione una opción
                            </option>
                            <option defaultValue="administrador">Administrador
                            </option>
                            <option defaultValue="vendedor">Vendedor
                            </option>
                        </select>
                    </td>

                    {/* Drop-down list */}
                    <td>
                        <select className='bg-gray-50 border border-gray-300 p-2 rounded-lg  text-xl'
                            type="text"
                            name="estado"
                            id=""
                            value={infoNuevoUsuario.estado}
                            onChange={(evento) => {

                                setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: evento.target.value })
                                // console.log(evento.target.value);
                                // console.log(infoNuevoUsuario.estado);
                            }}
                        >
                            <option defaultValue={0}>Seleccione una opción
                            </option>
                            <option defaultValue="autorizado">Autorizado
                            </option>
                            <option defaultValue="no autorizado">No autorizado
                            </option>
                        </select>
                    </td>
                </>) : (
                <>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl '>
                        {usuario.name}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {usuario.email}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {usuario.rol}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {usuario.estado}
                    </td>
                </>
            )


        }
            {/* agregaremos un nuevo boton que me hara las acciones del crud */}
            <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl '>
                <div className='flex w-full justify-around '>
                    {/* elemento icono de editar, con este edito  */}
                    {permitirEditar ? (
                        <>
                            <Tooltip title='Actualizar usuario' arrow>
                                <i className="fas fa-check text-green-500 hover:text-green-800 ml-5"
                                    onClick={
                                        () => {
                                            // setPermitirEditar(!permitirEditar);// me cambia el estado actual  por el contrario si estaba en true lo pone falso 
                                            actualizarUsuario();
                                            setEjecutarConsultaGET(false);
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
                            <Tooltip title='Editar usuario' arrow>
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
                            <PrivateComponent listaRoles='Administrador'>
                                <Tooltip title='Eliminar usuario' arrow>

                                    <i className="fas fa-trash-alt text-red-800 hover:text-red-600 ml-2"
                                        onClick={() => {
                                            setMostrarDialog(true)
                                            // eliminarUsuario(); // cuando ocurre el evento onClick en el boton icono de trash de eliminar se ejecuta esta funcion 

                                        }}
                                    />
                                </Tooltip >

                            </PrivateComponent >
                        </>
                    )
                    }
                </div>
                <Dialog open={mostrarDialog}>
                    <div className='bg-blue-200 p-4'>
                        <h1 className='font-extrabold m-3 '>¿Está seguro de querer eliminar la usuario?</h1>
                        <div className='flex justify-center text-xl '>


                            <button
                                className='bg-green-500 p-3 m-1 px-4 hover:bg-green-700  text-white'
                                onClick={() => {

                                    eliminarUsuario()
                                    setEjecutarConsultaGET(false);
                                }
                                }
                            >
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

}

export default ModuloUsuario
