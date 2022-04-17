import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigationbar() {
    function clickMenu(){

        document.querySelector(".menu").classList.toggle("icon");
    }
        
    return (
        <div className='container-fluid header' style ={{fontFamily:' Arial, Helvetica, sans-serif'}}>
            <div className="row">
            <nav className="navbar navbar-expand-sm navbar-light fixed-top">
                <div className="container-fluid p-2">
                    <a className="navbar-brand text-light ms-3" href="/"><h4>Hunzabygg</h4></a>
                    
                    <div className="menu navbar-toggler" data-bs-toggle="collapse" 
                    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                     aria-label="Toggle navigation" onClick={clickMenu}>
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar">                        
                    <ul className="navbar-nav  ms-auto">
                            <li className="nav-item ">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item ">
                                <Link className="nav-link text-light" to="/services">Our Services</Link>
                            </li>
                            <li class="nav-item ">
                                <Link className="nav-link text-light" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item me-5">
                                <Link className="nav-link text-light" to="/contact" >Contact Us</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            </div>

            
        </div>
    )
}
