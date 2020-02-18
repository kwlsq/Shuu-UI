import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComp from './Comps/navbar';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import MenPage from './Pages/MenPage';
import WomenPage from './Pages/WomenPage';
import Feeds from './Pages/Feeds';
import BrandsPage from './Pages/BrandsPage';
import AdminPage from './Pages/AdminPage';
import NotFoundPage from './Pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarComp />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/men" component={MenPage} />
            <Route path="/women" component={WomenPage} />
            <Route path="/feeds" component={Feeds} />
            <Route path="/brands" component={BrandsPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;