
import * as React from 'react';
import * as _ from 'ts-loader';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login/>
          </Route>
        <Route path='/register'>
           <Register/>
          </Route>
        <Route path='/'>
           <Dashboard/>
          </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
