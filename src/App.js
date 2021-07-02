// Single Application page
// import the dependencies and various JSX content to render as html 
import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponents/asyncComponents';

const asyncCheckout = asyncComponent (()=>{
  return import('./containers/Checkout/Checkout')
})

const asyncOrders = asyncComponent (()=>{
  return import('./containers/Orders/Orders')
})

const asyncAuth = asyncComponent (()=>{
  return import('./containers/Auth/Auth')
})

//class based App component 
class App extends Component{
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders}/>
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return(
      //JSX code writtent as HTML
      <div>
        <Layout>                    
          {routes}
        </Layout>
      </div>
    );
  }
}

//exports the application to index.js 
const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
