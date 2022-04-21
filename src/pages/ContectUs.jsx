import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Footer from '../components/Footer'

export default function ContectUs() {
    return (
        <div>
            <Navigationbar />
            
            <div className="container contactText"style = {{marginTop:'100px', fontFamily:' Arial, Helvetica, sans-serif'}}>
                <div className="row">
                    <div className="col-12 ">
                        <h2>Contect Us</h2>
                        <p><b>
                        How happy we are that you want to contact us! Below you will find contact information for all parts of our organization.
                        If you are unsure of where to turn, you are always welcome to contact our exchange.
                        We are here for you and look forward to hearing from you.
                        </b></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 text-left">
                        <h3 >General Questions</h3>
                        <p >
                        We at Peab's switchboard help you get in touch with the right person, 
                        regardless of the case. We know the whole organization - from north to south - 
                        and the best we know is to help find the right one in our organization. Do you have questions about services we perform for you?
                         We help you find the right one there too.
                        </p>
                        <h3>Switch</h3>
                        <p>Phone : <a href='tel:0046737055649'>0046737055649</a></p>
                        <p >Opening hours: Monday – Friday at 08:00 AM – 04:30 PM</p>
                        <p >E-post : <a href="mailto:hunzabygg@gmail.com">
                            Hunzabygg@gmail.com</a></p>
                        <p >E-post : <a href="mailto:Snickare.mehtab@gmail.com">
                        Snickare.mehtab@gmail.com</a></p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div >
                        <img src="contectImges/contect2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
