import React, { useState, useEffect } from 'react';
import 'styles/styles.css';
import 'styles/responsive.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  // importo libreria para navegacion 
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import ModuloVentas from 'pages/administracion/ModuloVentas';
import ModuloProductos from 'pages/administracion/ModuloProductos';
import ModuloUsuario from 'pages/administracion/ModuloUsuario';
import Admin from 'pages/administracion/Index';
import { DarkModeContext } from 'contexto/DarkMode'
import Login from 'pages/auth/Login';
import RegistroUsuario from 'pages/auth/RegistroUsuario';

function App() {
  const [darkMode, setDarkMode] = useState(false); // la idea de tener esto es para usar estados sin pasarlos por props 
  // este useState sera usado por todos los componentes de mis aplicacion puede acceder a lo que tiene guardado y ademas pueden modificarlo 
  // con el setDarkMode sin tener que pasarlo por props esto es para lo que sirve el crear contextos un context

  useEffect(() => {

    console.log('Modo Dark', darkMode);
  }, [darkMode]);

  return (
    <div>

      {/* con <DarkModeContext.Provider value={{darkMode,setDarkMode}}></DarkModeContext.Provider> permito usar un contexto un estado una variable usada
      por todos mis componentes de la aplicacion sin tener que pasarlo por los props  */}
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}> {/*en value coloco el estado que quiero que se transmita a toda la aplicacion*/}
        <Router>
          <Switch>
            <Route path={['/administracion/moduloUsuario', '/administracion/ventas',
              '/administracion/moduloproductos', '/administracion/moduloVentas', '/administracion']}>
              <PrivateLayout>
                <Switch>
                  <Route path='/administracion/moduloUsuario'>
                    <ModuloUsuario />
                  </Route>
                  <Route path='/administracion/moduloproductos'>
                    <ModuloProductos />
                  </Route>
                  <Route path='/administracion/moduloVentas'>
                    <ModuloVentas />
                  </Route>
                  <Route path='/administracion'>
                    <Admin />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            <Route path={['/RegistroUsuario', '/']}>
              <AuthLayout>
                <Switch >
                  <Route path='/RegistroUsuario'>
                    <RegistroUsuario />
                  </Route>
                  <Route path='/'>
                    <Login />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
            <Route path='/public'>
              <PublicLayout>
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
      </DarkModeContext.Provider>
    </div>

  );
}

export default App;


