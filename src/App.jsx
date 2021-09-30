import 'styles/styles.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';  // importo libreria para navegacion 
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import MaestroProductos from 'pages/administracion/MaestroProductos';
import MaestroProductosActualizar from 'pages/administracion/MaestroProductosActualizar';
import MaestroVentas from 'pages/administracion/MaestroVentas';
import RegistroVentas from 'pages/administracion/RegistroVentas';
import RegistroProductos from 'pages/administracion/RegistroProductos';
import MaestroUsuario from 'pages/administracion/MaestroUsuario';
import Admin from 'pages/administracion/Index';
import Login from 'pages/Login';
import Index from 'pages/Index';

function App() { 
  return (  

    <Router>
      <Switch>
        <Route path={['/administracion/maestroproductos','/administracion/maestroproductosactualizar',
        '/administracion/maestrousuario','/administracion/ventas','/administracion/registroproductos',
        '/administracion/registroVentas','/administracion']}>
          <PrivateLayout>
            <Switch>
              <Route path='/administracion/maestroproductos'>
                <MaestroProductos/>
              </Route>
              <Route path='/administracion/maestroproductosactualizar'>
                <MaestroProductosActualizar/>
              </Route>
              <Route path='/administracion/maestrousuario'>
                <MaestroUsuario/>
              </Route>
              <Route path='/administracion/maestroventas'>
                <MaestroVentas/>
              </Route>
              <Route path='/administracion/registroproductos'>
                <RegistroProductos/>
              </Route>
              <Route path='/administracion/registroVentas'>
                <RegistroVentas/>
              </Route>
              <Route path='/administracion'>
                <Admin/>
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path='/login'>
          <AuthLayout>
            <Login/>
          </AuthLayout>
        </Route>
        <Route path= '/'>
          <PublicLayout>
            <Index/>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
      
  );
}

export default App;


 