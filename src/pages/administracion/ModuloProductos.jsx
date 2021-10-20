import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerProductos } from 'utils/api';
import { crearProducto } from 'utils/api';
import { editarProducto } from 'utils/api';
import { deleteProducto } from 'utils/api';

const ModuloProductos = () => {

    const [mostrarTablaProductos, setMostrarTablaProductos] = useState(false);
    const [cambiarNombreBoton, setCambiarNombreBoton] = useState('Registrar Producto');
    const [productos, setProductos] = useState([]);
    const [ejecutarConsultaGET, setEjecutarConsultaGET] = useState(true);

    useEffect(() => {


        if (ejecutarConsultaGET) {

            obtenerProductos(
                (response) => {
                    setProductos(response.data);
                    console.log('SI.........FUNCIONO LA PETICION GET!!! !!!');
                },
                (error) => {
                    console.error(error);

                    console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
                }
            );


            setEjecutarConsultaGET(false);
        }

    }, [ejecutarConsultaGET])


    useEffect(() => {


        if (mostrarTablaProductos) {
            setEjecutarConsultaGET(true)
        }

    }, [mostrarTablaProductos])


    useEffect(() => {
        mostrarTablaProductos ? setCambiarNombreBoton('Nuevo Producto') : setCambiarNombreBoton('Tabla Productos')

    }, [mostrarTablaProductos])
    return (
        <div className='flex flex-col' >

            <button className=' self-start text-3xl bg-blue-500 p-5  mt-3 mb-4
                rounded-full shadow-md hover:bg-blue-900 border hover:border-gray-700 text-gray-100'
                type='button'
                onClick={() => {


                    setMostrarTablaProductos(!mostrarTablaProductos)
                }
                }
            >{cambiarNombreBoton}</button>

            {mostrarTablaProductos ? (
                <TablaProductos listaProductos={productos} setEjecutarConsultaGET={setEjecutarConsultaGET} />
            ) : (
                <FormularioCreacionProductos
                    irTablasProductos={setMostrarTablaProductos}
                    funcionAgregarNuevaProducto={setProductos}
                    listaProductos={productos}
                />)}


            <ToastContainer position="top-center"
                autoClose={5000} />
        </div>
    )

}

const TablaProductos = ({ listaProductos, setEjecutarConsultaGET }) => {

    const [datoInputBusqueda, setDatoInputBusqueda] = useState('');
    const [listaFiltradaResultadoBusqueda, setListaFiltradaResultadoBusqueda] = useState(listaProductos);

    useEffect(() => {

        setListaFiltradaResultadoBusqueda(
            listaProductos.filter((objetoDeLaListaProductos) => {

                return JSON.stringify(objetoDeLaListaProductos).toLowerCase().includes(datoInputBusqueda.toLowerCase());
            }))
    }, [datoInputBusqueda, listaProductos]);


    return (
        <div>
            <div className='border rounded-xl p-3 bg-blue-400 '>
                <div className='flex flex-col '>
                    <h1 className=' text-center font-extrabold text-4xl mt-2'>
                        Maestro Productos
                    </h1>

                    <form className='text-3xl font-bold text-gray-800 '>
                        <div className='bg-blue-500 w-max p-3 rounded-xl mb-11 mt-9'>
                            <label className='font-bold' htmlFor="buscar">
                                Buscar Producto
                                <input
                                    className='bg-gray-50 border border-gray-300 p-2 rounded-lg ml-5 focus:outline-none'
                                    name='buscar'
                                    id="buscar"
                                    placeholder='Buscar'
                                    type="text"
                                    value={datoInputBusqueda}
                                    onChange={(evento) => {
                                        setDatoInputBusqueda(evento.target.value);
                                    }}
                                />
                            </label>
                        </div>
                    </form>
                </div>
                <div className=' hidden md:flex w-full'>
                    <table className='tabla'>
                        <thead>
                            <tr>
                                <th className='text-3xl  bg-blue-500 rounded-xl p-1'>Codigo Producto</th>
                                <th className='text-3xl  bg-blue-500 rounded-xl p-1'>Descripción Producto</th>
                                <th className='text-3xl  bg-blue-500 rounded-xl p-1'>Precio Unitario</th>
                                <th className='text-3xl  bg-blue-500 rounded-xl p-1'>Estado Producto</th>
                                <th className='text-3xl bg-blue-500 rounded-xl p-1 '>Acciones</th>
                            </tr>

                        </thead>
                        <tbody>

                            {listaFiltradaResultadoBusqueda.map((elementoproducto) => {

                                return (

                                    <FilaProducto
                                        key={nanoid()}
                                        producto={elementoproducto}
                                        setEjecutarConsultaGET={setEjecutarConsultaGET} />
                                );
                            })}
                        </tbody>

                    </table>
                </div>
                <div className='flex flex-col w-full md:hidden'>

                    {listaFiltradaResultadoBusqueda.map((elemento) => {

                        return (
                            < div className='bg-blue-300 m-2 shadow-xl  flex flex-col border border-red-800 p-4 rounded-xl text-gray-700 '
                                key={nanoid()}  >
                                <span className='bg-blue-50'>{elemento.codigoProducto}</span>
                                <span className='bg-blue-50'>{elemento.descripcionProducto}</span>
                                <span className='bg-blue-50'>{elemento.precioUnitario}</span>
                                <span className='bg-blue-50'>{elemento.cantidadProducto}</span>
                                <span className='bg-blue-50'>{elemento.estadoProducto}</span>


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

const FilaProducto = ({ producto, setEjecutarConsultaGET }) => {

    const [permitirEditar, setPermitirEditar] = useState(false)
    const [infoNuevaProducto, setInfoNuevaProducto] = useState({

        codigoProducto: producto.codigoProducto,
        descripcionProducto: producto.descripcionProducto,
        precioUnitario: producto.precioUnitario,
        estadoProducto: producto.estadoProducto,

    })

    const [mostrarDialog, setMostrarDialog] = useState(false)


    const actualizarProducto = async () => {

        await editarProducto(
            producto._id,

            infoNuevaProducto,

            (response) => {

                console.log(response.data);

                console.log('SI.........FUNCIONO LA PETICION PATCH!!! !!!')
                toast.success('Producto actualizada con éxito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                setPermitirEditar(false);
                setEjecutarConsultaGET(true);
            },
            (error) => {
                console.error(error);


                console.log('NO.......funciono LA PETICION PATCH!!!');
                toast.error('Error modificando producto', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
            }

        )

    };

    const eliminarProducto = async () => {

        await deleteProducto(

            producto._id,

            { id: producto._id },

            (response) => {
                console.log(response.data);

                console.log('SI.........FUNCIONO LA PETICION DELETE!!! !!!');

                toast.success('Producto eliminada con éxito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                setEjecutarConsultaGET(true);
            },

            (error) => {
                console.error(error);
                console.log('NO.........FUNCIONO LA PETICION DELETE!!! !!!')

                toast.error('Error eliminando producto', {
                    position: "bottom-center",
                    autoClose: 5000,
                })
            }
        );

        setMostrarDialog(false);


    };


    return (
        <tr> {permitirEditar ?
            (
                <>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full'
                        type="text"
                        name="codigoProducto"
                        id=""
                        value={infoNuevaProducto.codigoProducto}
                        onChange={(evento) => {
                            setInfoNuevaProducto({ ...infoNuevaProducto, codigoProducto: evento.target.value });
                        }} />
                    </td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full'
                        type="text"
                        name="descripcionProducto"
                        id=""
                        value={infoNuevaProducto.descripcionProducto}
                        onChange={(evento) => {
                            setInfoNuevaProducto({ ...infoNuevaProducto, descripcionProducto: evento.target.value });
                        }} />
                    </td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full '
                        type="text"
                        name="precioUnitario"
                        id=""
                        value={infoNuevaProducto.precioUnitario}
                        onChange={(evento) => {
                            setInfoNuevaProducto({ ...infoNuevaProducto, precioUnitario: evento.target.value });
                        }} /></td>
                    <td><input className='bg-gray-50 border border-gray-300 p-2 rounded-lg w-full '
                        type="text"
                        name="estadoProducto"
                        id=""
                        value={infoNuevaProducto.estadoProducto}
                        onChange={(evento) => {
                            setInfoNuevaProducto({ ...infoNuevaProducto, estadoProducto: evento.target.value });
                        }} /></td>

                </>) : (
                <>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl '>
                        {producto.codigoProducto}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {producto.descripcionProducto}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {producto.precioUnitario}
                    </td>
                    <td className='bg-gray-50 border border-gray-300 p-4 rounded-lg m-2 text-xl ' >
                        {producto.estadoProducto}
                    </td>

                </>
            )


        }
            <td><div className='flex w-full justify-around '>
                {permitirEditar ? (
                    <>
                        <Tooltip title='Actualizar producto' arrow>
                            <i className="fas fa-check text-green-500 hover:text-green-800 ml-5"
                                onClick={
                                    () => {

                                        actualizarProducto();

                                    }
                                } />
                        </Tooltip>
                        <Tooltip title='Cancelar' arrow>
                            <i className="fas fa-window-close text-yellow-700 hover:text-yellow-500 ml-5"
                                onClick={
                                    () => {
                                        setPermitirEditar(!permitirEditar);
                                    }
                                } />
                        </Tooltip>
                    </>

                ) : (
                    <>
                        <Tooltip title='Editar producto' arrow>
                            <i className="fas fa-edit text-yellow-700 hover:text-yellow-500 ml-5"
                                onClick={
                                    () => {
                                        setPermitirEditar(!permitirEditar);
                                    }
                                } />
                        </Tooltip>


                        <Tooltip title='Eliminar producto' arrow>

                            <i className="fas fa-trash-alt text-red-800 hover:text-red-600 ml-2"
                                onClick={() => {
                                    setMostrarDialog(true)

                                }}
                            />
                        </Tooltip >
                    </>
                )
                }
            </div>
                <Dialog open={mostrarDialog}>
                    <div className='bg-blue-200 p-4'>
                        <h1 className='font-extrabold m-3 '>¿Está seguro de querer eliminar la producto?</h1>
                        <div className='flex justify-center text-xl '>
                            <button
                                className='bg-green-500 p-3 m-1 px-4 hover:bg-green-700  text-white'
                                onClick={() => eliminarProducto()}>
                                Si</button>
                            <button
                                className='bg-red-600 p-3 m-1 hover:bg-red-800 text-white'
                                onClick={() => setMostrarDialog(false)}> No</button>
                        </div>
                    </div>

                </Dialog>
            </td>
        </tr >
    );
};

const FormularioCreacionProductos = ({

    irTablasProductos,
    listaProductos,
    funcionAgregarNuevaProducto

}) => {


   

    const referenciaFomulario = useRef(null); 
    const submitFormulario = async (evento) => {  

        evento.preventDefault(); 
        const claveValorDeValuesFomulario = new FormData(referenciaFomulario.current); 
        const objetoNuevaProducto = {}; 

        claveValorDeValuesFomulario.forEach((valorDeCadaElementoDelFormData, claveDeCadaElementoDelFormData) => {

            

            objetoNuevaProducto[claveDeCadaElementoDelFormData] = valorDeCadaElementoDelFormData; 

        })

        
        await crearProducto(
            {

                codigoProducto: objetoNuevaProducto.codigoProducto,
                descripcionProducto: objetoNuevaProducto.descripcionProducto,
                precioUnitario: objetoNuevaProducto.precioUnitario,
                estadoProducto: objetoNuevaProducto.estadoProducto,
               
            },

            (response) => {
                
                console.log(response.data);
                toast.success('Producto agregada con éxito', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                
                console.log('SI.........FUNCIONO LA PETICION POST!!! !!!');
              
            },

            (error) => { 
                console.error(error);
                toast.error('Error registrando producto', {
                    position: "bottom-center",
                    autoClose: 5000,
                });
                
                console.log('NO.........FUNCIONO LA PETICION POST!!! !!!');
            }
        );
       
        irTablasProductos(true) 

        funcionAgregarNuevaProducto([...listaProductos, objetoNuevaProducto]);
    };



    return (
        <div className=' border rounded-xl p-3 bg-blue-400 '>
            <h1 className='text-4xl text-center font-extrabold mb-5 text-gray-800'>
                Formulario Productos
            </h1>
            <form
                ref={referenciaFomulario} 
                onSubmit={submitFormulario} 
                className='flex flex-col text-3xl'>
                <div className='grid-cols-2 grid gap-4 m-7'>
                    <label className='font-bold text-gray-800' htmlFor="codigoProducto">Codigo Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='codigoProducto'
                            required
                       
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="descripcionProducto">Descripcion Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type='text'
                            name="descripcionProducto"
                            required
                       
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="precioUnitario">Precio Unitario
                        
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='precioUnitario'
                            required
                      
                        />
                    </label>
                    <label className='font-bold text-gray-800' htmlFor="estadoProducto">Estado Producto
                        <input className='block bg-gray-50 border border-gray-300 p-2 rounded-lg m-2'
                            type="text"
                            name='estadoProducto'
                            required
                      
                        />
                    </label>
                </div>
                <button className=' text-3xl bg-blue-500 border border-gray-500 p-5 self-center m-3 
                rounded-full  hover:bg-blue-900 text-gray-200'
                    type='submit'
               
                >Registrar Producto</button>
            </form>



        </div>
    )
}

export default ModuloProductos