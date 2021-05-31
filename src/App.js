// Single Application page
// import the dependencies and various JSX content to render as html 
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

//class based App component 
class App extends Component{
  render(){
    return(
      //JSX code writtent as HTML
      <div>
        <Layout>                    
          <Switch>
            
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

//exports the application to index.js 
export default App;
