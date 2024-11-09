import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegisterPage from "./RegisterPage";
import ProductPage from "./ProductPage";


//import the Header componement

import "./styles.css";

// it is imoort t
import {Route, Switch} from 'wouter';

//for react we will associate a route with a component;;
//componenet 


// export default is important
export default function App() {


  //for part 5 - router. 
  // each will show 1 react component. 






  return (
    <>
      <Navbar />
      <Switch>
        {/* Item that will be switched */}

        <Route path="/" component={Homepage}/>
        <Route path="/products" component={ProductPage}/>
        <Route path="/register" component={RegisterPage}/>

      </Switch>
      <Footer />




    </>
  );

}