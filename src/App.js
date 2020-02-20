import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import VerificationPage from './Pages/VerificationPage';

class App extends React.Component {
  render() {
    return (
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
          <Route path="/verified" component={VerificationPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App;