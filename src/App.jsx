import 'styles/styles.css';

import Index from 'pages/Index';

import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';  // importo libreria para navegacion 
import PrivateLayout from './layouts/PrivateLayout';
import AuthLayout from './layouts/AuthLayout';
import PublicLayout from './layouts/PublicLayout';

function App() { 
  return (  

    <Router>
      <Switch>
        <Route>
          <PrivateLayout>

          </PrivateLayout>
        </Route>
        <Route>
          <AuthLayout>

          </AuthLayout>
        </Route>
        <Route>
          <PublicLayout>
            

          </PublicLayout>

        </Route>
        
        
      </Switch>
    </Router>
      
  );
}

export default App;


 /*   <Router>
        <Switch>
          <Route path='/Admin'>
            <Admin/>       
          </Route>
          <Route path='/Login'>          
            <Login/>           
          </Route>
          <Route path='/Registro'>          
            <Registro/>           
          </Route>
          <Route path='/'>            
            <Index/>           
          </Route>
        </Switch>
      </Router>
 */