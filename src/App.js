import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ProductRegistration from 'pages/ProductRegistration';
import ProductManagement from 'pages/ProductManagement';
import SellerInfo from 'pages/SellerInfo';
import UserManagement from 'pages/UserManagement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/product/registration" component={ProductRegistration} />
        <Route path="/product/management" component={ProductManagement} />
        <Route path="/seller/information/:id" component={SellerInfo} />
        <Route path="/seller/information" component={SellerInfo} />
        <Route path="/seller/management" component={UserManagement} />
      </Switch>
    </Router>
  );
};

export default App;
