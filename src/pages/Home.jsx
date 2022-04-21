import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navigationbar />
        <div className="container-fluid" style = {{fontFamily:' Arial, Helvetica, sans-serif' , marginTop:"80px"}}>
            <div className="imgslider">
                <figure>
                    <img src="roomImges/room5.jpg" alt="" />
                    <img src="kImges/k5.jpg" alt="" />
                    <img src="windowImges/window4.jpg" alt="" />
                    <img src="paintImges/paint2.jpg" alt="" />
                    <img src="roomImges/room5.jpg" alt="" />
                </figure>
            </div>
            <div className="container pt-5 homeText ">
                <div className="row">
                    <div className="col-md-6 col-sm-12 pt-3 text-left">
                        <h2>Profile</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Velit optio dolores voluptas! Deleniti ea beatae vero dicta voluptate id 
                            quaerat accusamus soluta. Voluptatem, incidunt minima.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Velit optio dolores voluptas! Deleniti ea beatae vero dicta voluptate id 
                            quaerat accusamus soluta. Voluptatem, incidunt minima.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Velit optio dolores voluptas! Deleniti ea beatae vero dicta voluptate id 
                            quaerat accusamus soluta. Voluptatem, incidunt minima.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src="profile/profile.jpg" alt="" 
                        className ="profile"/>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}
