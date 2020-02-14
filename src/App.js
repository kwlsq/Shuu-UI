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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarComp />
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/men" component={MenPage}/>
            <Route path="/women" component={WomenPage}/>
            <Route path="/feeds" component={Feeds}/>
            <Route path="/brands" component={BrandsPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;