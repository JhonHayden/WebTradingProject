import 'styles/styles.css';
import Admin from 'pages/Admin';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';  // importo libreria para navegacion 

function App() { 
  return (  
  
      <Router>
        <Switch> 
          <Route pathP='/login'>            
              <Login />   
          </Route>
          <Route pathP='/registro'>            
            <Registro />   
          </Route>
          <Route pathP='/admin'>            
              <Admin />   
          </Route>
          <Route pathP='/'>            
              <Index />   
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;


 /*   <Router>
        <Switch>
          <Route pathP='/Admin'>
            <Admin/>       
          </Route>
          <Route pathP='/Login'>          
            <Login/>           
          </Route>
          <Route pathP='/Registro'>          
            <Registro/>           
          </Route>
          <Route pathP='/'>            
            <Index/>           
          </Route>
        </Switch>
      </Router>
 */