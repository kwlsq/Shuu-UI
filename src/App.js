import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { keepLogin } from './Redux/Actions';
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
import StorePage from './Pages/storePage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import UserProfilePage from './Pages/UserProfilePage';


class App extends React.Component {
  componentDidMount() {
    this.props.keepLogin()
    console.log(this.props.user.id)
  }
  render() {
    //SuperAdmmin
    if (this.props.user.role_id === 1) {
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
            <Route path="/detail" component={ProductDetailPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      )
    } else if (this.props.user.role_id === 2) {
      //Store
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
            <Route path="/store" component={StorePage} />
            <Route path="/verified" component={VerificationPage} />
            <Route path="/detail" component={ProductDetailPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      )
    } else if (this.props.user.role_id === 3) {
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
            <Route path="/verified" component={VerificationPage} />
            <Route path="/detail" component={ProductDetailPage} />
            <Route path="/profile" component={UserProfilePage} />
            <Route path="/cart" component={CartPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      )
    } else {
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
            <Route path="/verified" component={VerificationPage} />
            <Route path="/detail" component={ProductDetailPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      )
    }

  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps, { keepLogin })(App);