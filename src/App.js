import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import "../src/style.css"
import GallerySlider from './pages/GallerySlider';

export default function App() {
  return (
    <div>
       <BrowserRouter>
       
         <Switch>
           <Route path = "/services">
              <Services />
           </Route>
           <Route path = "/gallery">
              <GallerySlider />
           </Route>
           <Route path = "/contact">
              <ContactUs />
           </Route>
           <Route excat path = "/">
              <Home />
           </Route>
         </Switch>
         
       </BrowserRouter>
    </div>
  )
}
