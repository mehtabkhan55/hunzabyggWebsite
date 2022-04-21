import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch,Route } from 'react-router-dom';
// import Footer from './components/Footer';
import Gallery from './pages/Gallary';
import Home from "./pages/Home";
import Services from './pages/Services';
import ContectUs from './pages/ContectUs';
import "../src/style.css"

export default function App() {
  return (
    <div>
       <BrowserRouter>
       
         <Switch>
           <Route path = "/services">
              <Services />
           </Route>
           <Route path = "/gallery">
              <Gallery />
              
           </Route>
           <Route path = "/contact">
              <ContectUs />
           </Route>
           <Route excat path = "/">
              <Home />
           </Route>
         </Switch>
         
       </BrowserRouter>
    </div>
  )
}
