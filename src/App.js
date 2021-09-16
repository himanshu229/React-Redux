import React from "react";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from './Component/ProductListing'
import ProductDetails from './Component/ProductDetails'
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" component={ProductDetails} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
