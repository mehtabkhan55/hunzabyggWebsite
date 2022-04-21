import React from 'react'
import '../App.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
    return (
        <div style = {{fontFamily:' Arial, Helvetica, sans-serif',background: "#0f396b"}}>
            <footer className = "container-fluid mt-5 text-light"  >
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-4 pt-2">
                        <h5 className = "text-light">Hunzabygg</h5>
                        <p >
                        Hunza builds is a construction company an Hunza focus on its own resources, we develop,
                         build and build everyday life where life is lived.                        </p>
                    </div>
                    <div className="col-md-4 pt-2">
                        <h5 className = "text-light">Contect Us</h5>
                        <a href="tel:0046737055649" className = "text-decoration-none text-light">tel : 0046737055649</a><br />
                        <a href="mailto:hunzabygg@gmail.com" className = "text-decoration-none text-light">E-post : Hunzabygg@gmail.com</a><br />
                        <a href="mailto:Snickare.mehtab@gmail.com" className = "text-decoration-none text-light">E-post : Snickare.mehtab@gmail.com</a>
                    </div>
                    <div className="col-md-3 pt-2">
                        <h5 className = "text-light">Follow Us</h5>
                        
                        <a href="https://www.facebook.com/Hunza-Bygg-272811981236201/"  style = {{fontSize :'37px'}}><i className=" fab fa-facebook text-light text-decoration-none"></i></a>
                        
                        <a href="https://web.whatsapp.com/"  style = {{fontSize :'37px'}}><i className="fab fa-whatsapp text-light text-decoration-none ms-3 p-1"></i></a>

                        <a href="/"  style = {{fontSize :'37px'}}><i className="fab fa-instagram text-light text-decoration-none ms-3 p-1"></i></a>

                        
                        <a href="https://youtube.com/channel/UCmIPkZTp6eRhTMXRSd9tGaw"  style = {{fontSize :'37px'}}><i className="fab fa-youtube text-light text-decoration-none ms-3"></i></a>
                                            
                    </div>
                    
                </div>
            </footer>
        </div>
    )
}
