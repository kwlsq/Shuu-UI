import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComp from './Comps/navbar';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

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
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;