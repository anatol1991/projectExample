import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter as Router,Route,Link,browserHistory,IndexRoute,Switch} from 'react-router-dom'
import { Home,Products,Servicies,About,Contact } from './components/Header.jsx'

ReactDOM.render((
  <Router>
  <App>
  <Switch>
    <Route exact path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/servicies" component={Servicies} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
    </Switch>
    </App>
  </Router>
  ),
  document.getElementById('app')
);
