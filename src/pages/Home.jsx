import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Footer from '../components/Footer'

export default function Home() {

    return (
        <>
            <Navigationbar />
            <div className="container-fluid" style = {{fontFamily:' Arial, Helvetica, sans-serif' , marginTop:"80px"}}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="roomImges/room5.jpg" className="d-block w-100 "style={{height :400}} alt="room" />
                </div>
                <div className="carousel-item">
                  <img src="windowImges/window4.jpg" className="d-block w-100 " style={{height :400}} alt="window" />
                </div>
                <div className="carousel-item">
                  <img src="kImges/k5.jpg" className="d-block w-100 " style={{height :400}} alt="kitchen" />
                </div>
                <div className="carousel-item">
                  <img src="roomImges/room5.jpg" className="d-block w-100 " style={{height :400}} alt="room" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
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
                        <img src="profile/profile.jpg" alt="profile imge" 
                        className ="profile img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}
