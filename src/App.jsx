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
import { UserContextRol } from 'contexto/UserContextRol'
import Login from 'pages/auth/Login';
import RegistroUsuario from 'pages/auth/RegistroUsuario';
import { Auth0Provider } from "@auth0/auth0-react";// contexto para la autenticacion 
import PrivateRoute from 'components/PrivateRoute';

function App() {

  const [userRol, setUserRol] = useState({})
  const [darkMode, setDarkMode] = useState(false); // la idea de tener esto es para usar estados sin pasarlos por props 
  // este useState sera usado por todos los componentes de mis aplicacion puede acceder a lo que tiene guardado y ademas pueden modificarlo 
  // con el setDarkMode sin tener que pasarlo por props esto es para lo que sirve el crear contextos un context
  useEffect(() => {
    // console.log('Modo Dark', darkMode);
  }, [darkMode]);

  return (
    <Auth0Provider     //aqui en los props de Auth0Provider enviamos el perfil de autenticacion son los tres props 
      domain="auth0-web-trading-project.us.auth0.com"
      clientId="dEyN0UkLXkCK6jTtPIJUZ1wIRgOlusWU"
      redirectUri="http://localhost:3000/administracion"// me direcciona a esta pagina apenas inicie sesion pero debo 
      // configurar esta uri para permitir esto en Auth0 en opcion (Allowed Callback URLs)
      audience='api/autenticacion/web/trading/project' //mismo nombre de la api de Auth0 y debe ser 
    // la misma audience del backend del middleware
    >
      <div>

        {/* con <DarkModeContext.Provider value={{darkMode,setDarkMode}}></DarkModeContext.Provider> permito usar un contexto un estado una variable usada
      por todos mis componentes de la aplicacion sin tener que pasarlo por los props  */}

        <UserContextRol.Provider value={{ userRol, setUserRol }}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}> {/*en value coloco el estado que quiero que se transmita a toda la aplicacion*/}
            <Router>
              <Switch>
                <Route path={['/administracion/moduloUsuario', '/administracion/ventas',
                  '/administracion/moduloproductos', '/administracion/moduloVentas', '/administracion']}>
                  <PrivateLayout>
                    <Switch>
                      <Route path='/administracion/moduloUsuario'>
                        <PrivateRoute listaRoles='Administrador'>
                          <ModuloUsuario />
                        </PrivateRoute>
                      </Route>
                      <Route path='/administracion/moduloproductos'>
                        <PrivateRoute listaRoles='Administrador'>
                          <ModuloProductos />
                        </PrivateRoute>
                      </Route>
                      <Route path='/administracion/moduloVentas'>
                        <PrivateRoute listaRoles={['Administrador','Vendedor']}>
                          <ModuloVentas />
                        </PrivateRoute>
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
        </UserContextRol.Provider>
      </div>
    </Auth0Provider>
  );
}
export default App;


