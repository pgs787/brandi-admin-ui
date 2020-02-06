import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ProductRegistration from 'pages/ProductRegistration';
import ProductManagement from 'pages/ProductManagement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/product/registration" component={ProductRegistration} />
        <Route path="/product/management" component={ProductManagement} />
      </Switch>
    </Router>
  );
};

export default App;
