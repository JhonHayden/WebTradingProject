import axios from 'axios';
// esta api.js se encarga solamente de hacer las consultas al servidor

// CRUD PARA VENTAS 


// funcion que ejecuta la peticion GET          prop funciones callback        
export const obtenerVentasDelBackend = async (successCallback, errorCallback) => {
    // dentro ponemos la peticion GET
    const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };
    await axios
        .request(options)
        .then(successCallback

            // esta funcion siguiente es una funcion anonima que se ejecuta despues de un evento y el evento es 
            // la peticion get, cuando el servidor devuelve una respuesta a esta peticion la instruccion .then revisa esta respuesta y 
            // ejecuta alguna de las dos funciones anonimas siguientes si la respuesta es positiva ejecuta la siguiente si no es 
            // positiva ejecuta el .catch 
            // function (response) { // si recibo respuesta entonces guardo la data en mi estado ventas la lista de ventas
            // que mostrare en el mi tabla ventas del frontend 


            // las siguientes dos funciones son callback por que se ejecutan depues que sucede un evento
            // (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function
            //     setVentas(response.data);
            //     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
            //     console.log('SI.........FUNCIONO LA PETICION GET!!! !!!');


            // }
        )
        .catch(errorCallback


            // // function (error) {
            // (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
            //     console.error(error);
            //     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
            //     console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
            // }
        );

};


export const crearVenta = async (data, successCallback, errorCallback) => {

    const options = { // Obejto que lleva la informacion del metodo REST a ejecutar, la url de la api, los 
        // headers, y la data toda la informacion a enviar en formato clave valor. donde cada clave son los campos o atributos de 
        // la base de datos y el valor es el registrado en los inpust del formulario 
        method: 'POST', // tipo de peticion es crear nuevo registro 
        url: 'http://localhost:5000/ventas/',// servidor donde enviare la peticion e informacion
        headers: { 'Content-Type': 'application/json' },
        data, // datos a enviar los recibo como parametro de la funcion crearVenta en el parametro data
        //     fecha: objetoNuevaVenta.fecha, codigoVenta: objetoNuevaVenta.codigoVenta, nombreVendedor: objetoNuevaVenta.nombreVendedor,
        //     identificacionVendedor: objetoNuevaVenta.identificacionVendedor, nombreCliente: objetoNuevaVenta.nombreCliente,
        //     identificacionCliente: objetoNuevaVenta.identificacionCliente, codigoProducto: objetoNuevaVenta.codigoProducto,
        //     cantidadProducto: objetoNuevaVenta.cantidadProducto, precioUnitario: objetoNuevaVenta.precioUnitario,
        //     valorTotal: objetoNuevaVenta.valorTotal
        // },
    } // este es el objeto donde esta la operacion POST, la URL de la api la ruta en el backend, la data a enviar mas 
    // los headers que me indica el tipo de contenido a enviar en esta peticion POST y pueden haber otras opciones 
    // para este metodo POST
    await axios.request(options).then(successCallback).catch(errorCallback);// me permite enviar la peticions 
    // con las opciones que me describe que peticion es .. en este caso POST y luego si (.then ) la respuesta es 
    // positiva es decir se creo una venta  en la base de datos ejecuta el successCallback y si no se recibe respuesta
    // positiva se ejecuta errorCallback
    // await se usa en operaciones que tienen tiempo de espera de respuesta de algun otro sistema como un servidor backend en este 
    // caso debo espera a que el servidor backend responda manda la peticion y espera a que responda y asi ejecutar los callback 
};

export const editarVenta = async (id, data, successCallback, errorCallback) => {

    const options = {
        method: 'PATCH', // metodo actualizar 
        url: `http://localhost:5000/ventas/${id}/`, // url de mi api servidor backend
        headers: { 'Content-Type': 'application/json' },
        data, // datos a actualizar tiene toda la venta mas necesitamos pasarle 
        // el id del la fila que quiero actualizar del dato o venta que estoy actualizando 
        // ese id me representa la fila y venta que voy a actualizar 
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
}

export const deleteVenta = async (id, data, successCallback, errorCallback) => {

    const options = {
        method: 'DELETE', // metodo de eliminar
        url: `http://localhost:5000/ventas/${id}/`, // url del metodo delete orden que recibe el backend, le paso como un string literal para 
        // poder meter una variable dentro del string ademas la ultima / de la url me permite que funcionen los request en el navegador safari 
        // de los apples
        headers: { 'Content-Type': 'application/json' },
        data, // le tengo que pasar el id del dato o registro a eliminar y lo saco del prop que entro al componente filaVenta puesto 
        // que este prop me tiene las filas selecionada de la ventas

    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback)

}

// CRUD PARA USUARIOS



export const obtenerUsuarios = async (successCallback, errorCallback) => {
    // dentro ponemos la peticion GET
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
    await axios
        .request(options)
        .then(successCallback

            // esta funcion siguiente es una funcion anonima que se ejecuta despues de un evento y el evento es 
            // la peticion get, cuando el servidor devuelve una respuesta a esta peticion la instruccion .then revisa esta respuesta y 
            // ejecuta alguna de las dos funciones anonimas siguientes si la respuesta es positiva ejecuta la siguiente si no es 
            // positiva ejecuta el .catch 
            // function (response) { // si recibo respuesta entonces guardo la data en mi estado ventas la lista de ventas
            // que mostrare en el mi tabla ventas del frontend 


            // las siguientes dos funciones son callback por que se ejecutan depues que sucede un evento
            // (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function
            //     setVentas(response.data);
            //     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
            //     console.log('SI.........FUNCIONO LA PETICION GET!!! !!!');


            // }
        )
        .catch(errorCallback


            // // function (error) {
            // (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
            //     console.error(error);
            //     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
            //     console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
            // }
        );

};


export const crearUsuario = async (data, successCallback, errorCallback) => {
    // console.log("estoy en el crearUsuario: ", data);
    const options = { // Obejto que lleva la informacion del metodo REST a ejecutar, la url de la api, los 
        // headers, y la data toda la informacion a enviar en formato clave valor. donde cada clave son los campos o atributos de 
        // la base de datos y el valor es el registrado en los inpust del formulario 
        method: 'POST', // tipo de peticion es crear nuevo registro 
        url: 'http://localhost:5000/usuarios/',// servidor donde enviare la peticion e informacion
        headers: { 'Content-Type': 'application/json' },
        data, // datos a enviar los recibo como parametro de la funcion crearVenta en el parametro data
        //     fecha: objetoNuevaVenta.fecha, codigoVenta: objetoNuevaVenta.codigoVenta, nombreVendedor: objetoNuevaVenta.nombreVendedor,
        //     identificacionVendedor: objetoNuevaVenta.identificacionVendedor, nombreCliente: objetoNuevaVenta.nombreCliente,
        //     identificacionCliente: objetoNuevaVenta.identificacionCliente, codigoProducto: objetoNuevaVenta.codigoProducto,
        //     cantidadProducto: objetoNuevaVenta.cantidadProducto, precioUnitario: objetoNuevaVenta.precioUnitario,
        //     valorTotal: objetoNuevaVenta.valorTotal
        // },
    } // este es el objeto donde esta la operacion POST, la URL de la api la ruta en el backend, la data a enviar mas 
    // los headers que me indica el tipo de contenido a enviar en esta peticion POST y pueden haber otras opciones 
    // para este metodo POST
    await axios.request(options).then(successCallback).catch(errorCallback);// me permite enviar la peticions 
    // con las opciones que me describe que peticion es .. en este caso POST y luego si (.then ) la respuesta es 
    // positiva es decir se creo una venta  en la base de datos ejecuta el successCallback y si no se recibe respuesta
    // positiva se ejecuta errorCallback
    // await se usa en operaciones que tienen tiempo de espera de respuesta de algun otro sistema como un servidor backend en este 
    // caso debo espera a que el servidor backend responda manda la peticion y espera a que responda y asi ejecutar los callback 
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {

    const options = {
        method: 'PATCH', // metodo actualizar 
        url: `http://localhost:5000/usuarios/${id}/`, // url de mi api servidor backend
        headers: { 'Content-Type': 'application/json' },
        data, // datos a actualizar tiene toda la venta mas necesitamos pasarle 
        // el id del la fila que quiero actualizar del dato o venta que estoy actualizando 
        // ese id me representa la fila y venta que voy a actualizar 
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
}

export const deleteUsuario = async (id, data, successCallback, errorCallback) => {

    const options = {
        method: 'DELETE', // metodo de eliminar
        url: `http://localhost:5000/usuarios/${id}/`, // url del metodo delete orden que recibe el backend, le paso como un string literal para 
        // poder meter una variable dentro del string ademas la ultima / de la url me permite que funcionen los request en el navegador safari 
        // de los apples
        headers: { 'Content-Type': 'application/json' },
        data, // le tengo que pasar el id del dato o registro a eliminar y lo saco del prop que entro al componente filaVenta puesto 
        // que este prop me tiene las filas selecionada de la ventas

    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback)

}


// CRUD PRODUCTOS 

export const obtenerProductos = async (successCallback, errorCallback) => {
    // dentro ponemos la peticion GET
    const options = { method: 'GET', url: 'http://localhost:5000/productos/' };
    await axios
        .request(options)
        .then(successCallback

            // esta funcion siguiente es una funcion anonima que se ejecuta despues de un evento y el evento es 
            // la peticion get, cuando el servidor devuelve una respuesta a esta peticion la instruccion .then revisa esta respuesta y 
            // ejecuta alguna de las dos funciones anonimas siguientes si la respuesta es positiva ejecuta la siguiente si no es 
            // positiva ejecuta el .catch 
            // function (response) { // si recibo respuesta entonces guardo la data en mi estado ventas la lista de ventas
            // que mostrare en el mi tabla ventas del frontend 


            // las siguientes dos funciones son callback por que se ejecutan depues que sucede un evento
            // (response) => { // esta funcion es equivalente a la anterior function (response) { solo que esta escrita como arrow function
            //     setVentas(response.data);
            //     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
            //     console.log('SI.........FUNCIONO LA PETICION GET!!! !!!');


            // }
        )
        .catch(errorCallback


            // // function (error) {
            // (error) => {  // esta funcion es equivalente a la anterior function (error) { solo que esta escrita como arrow function
            //     console.error(error);
            //     // alert('SI.........FUNCIONO LA PETICION GET!!! !!!')
            //     console.log('NO.........FUNCIONO LA PETICION GET!!! !!!');
            // }
        );

};


export const crearProducto = async (data, successCallback, errorCallback) => {
    // console.log("estoy en el crearProducto: ", data);
    const options = { // Obejto que lleva la informacion del metodo REST a ejecutar, la url de la api, los 
        // headers, y la data toda la informacion a enviar en formato clave valor. donde cada clave son los campos o atributos de 
        // la base de datos y el valor es el registrado en los inpust del formulario 
        method: 'POST', // tipo de peticion es crear nuevo registro 
        url: 'http://localhost:5000/productos/',// servidor donde enviare la peticion e informacion
        headers: { 'Content-Type': 'application/json' },
        data, 
    } // este es el objeto donde esta la operacion POST, la URL de la api la ruta en el backend, la data a enviar mas 
    // los headers que me indica el tipo de contenido a enviar en esta peticion POST y pueden haber otras opciones 
    // para este metodo POST
    await axios.request(options).then(successCallback).catch(errorCallback);// me permite enviar la peticions 
    // con las opciones que me describe que peticion es .. en este caso POST y luego si (.then ) la respuesta es 
    // positiva es decir se creo una venta  en la base de datos ejecuta el successCallback y si no se recibe respuesta
    // positiva se ejecuta errorCallback
    // await se usa en operaciones que tienen tiempo de espera de respuesta de algun otro sistema como un servidor backend en este 
    // caso debo espera a que el servidor backend responda manda la peticion y espera a que responda y asi ejecutar los callback 
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {

    const options = {
        method: 'PATCH', // metodo actualizar 
        url: `http://localhost:5000/productos/${id}/`, // url de mi api servidor backend
        headers: { 'Content-Type': 'application/json' },
        data, // datos a actualizar tiene toda la venta mas necesitamos pasarle 
        // el id del la fila que quiero actualizar del dato o venta que estoy actualizando 
        // ese id me representa la fila y venta que voy a actualizar 
    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
}

export const deleteProducto = async (id, data, successCallback, errorCallback) => {

    const options = {
        method: 'DELETE', // metodo de eliminar
        url: `http://localhost:5000/productos/${id}/`, // url del metodo delete orden que recibe el backend, le paso como un string literal para 
        // poder meter una variable dentro del string ademas la ultima / de la url me permite que funcionen los request en el navegador safari 
        // de los apples
        headers: { 'Content-Type': 'application/json' },
        data, // le tengo que pasar el id del dato o registro a eliminar y lo saco del prop que entro al componente filaVenta puesto 
        // que este prop me tiene las filas selecionada de la ventas

    };

    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback)

}






// export const obtenerVendedores = (successCallback, errorCallback) => {

// }