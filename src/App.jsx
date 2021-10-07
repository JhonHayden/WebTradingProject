import React, { useState, useEffect} from 'react';
import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  // importo libreria para navegacion 
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import MaestroProductos from 'pages/administracion/MaestroProductos';
import MaestroProductosActualizar from 'pages/administracion/MaestroProductosActualizar';
import MaestroVentas from 'pages/administracion/MaestroVentas';
import ModuloVentas from 'pages/administracion/ModuloVentas';
import RegistroProductos from 'pages/administracion/RegistroProductos';
import MaestroUsuario from 'pages/administracion/MaestroUsuario';
import Admin from 'pages/administracion/Index';
import Login from 'pages/Login';
import Index from 'pages/Index';
import { DarkModeContext } from 'contexto/DarkMode'

function App() {
  const [darkMode, setDarkMode] = useState(false); // la idea de tener esto es para usar estados sin pasarlos por props 
// este useState sera usado por todos los componentes de mis aplicacion puede acceder a lo que tiene guardado y ademas pueden modificarlo 
// con el setDarkMode sin tener que pasarlo por props esto es para lo que sirve el crear contextos un context

useEffect(() => {
 
  console.log('Modo Dark',darkMode);
  }, [darkMode]); 

  return (
    <div>

      {/* con <DarkModeContext.Provider value={{darkMode,setDarkMode}}></DarkModeContext.Provider> permito usar un contexto un estado una variable usada
      por todos mis componentes de la aplicacion sin tener que pasarlo por los props  */}
      <DarkModeContext.Provider value={{darkMode,setDarkMode}}> {/*en value coloco el estado que quiero que se transmita a toda la aplicacion*/}
        <Router>
          <Switch>
            <Route path={['/administracion/maestroproductos', '/administracion/maestroproductosactualizar',
              '/administracion/maestrousuario', '/administracion/ventas', '/administracion/registroproductos',
              '/administracion/moduloVentas', '/administracion']}>
              <PrivateLayout>
                <Switch>
                  <Route path='/administracion/maestroproductos'>
                    <MaestroProductos />
                  </Route>
                  <Route path='/administracion/maestroproductosactualizar'>
                    <MaestroProductosActualizar />
                  </Route>
                  <Route path='/administracion/maestrousuario'>
                    <MaestroUsuario />
                  </Route>
                  <Route path='/administracion/maestroventas'>
                    <MaestroVentas />
                  </Route>
                  <Route path='/administracion/registroproductos'>
                    <RegistroProductos />
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
            <Route path='/login'>
              <AuthLayout>
                <Login />
              </AuthLayout>
            </Route>
            <Route path='/'>
              <PublicLayout>
                <Index />
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
      </DarkModeContext.Provider>
    </div>

  );
}

export default App;


