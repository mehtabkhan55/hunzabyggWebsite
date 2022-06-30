import React from 'react'
 import Workplc from "../pages/workplc";
 import Navigationbar from '../components/Navigationbar';
import { useState } from 'react'
import Footer from '../components/Footer';

export default function GallerySlider() {

    const [images] = useState(Workplc);
   
    return (
        <>
            <Navigationbar/>
            <div className="container-fluid" style={{marginTop:"100px",fontFamily:' Arial, Helvetica, sans-serif'}}>
                <div className="row">
                    <div className="col text-center">
                        <h1 id="gH1">Services Gallery</h1>
                        <hr />
                    </div>
                </div>
            </div>        
                <div className='container-fluid'>
                    <div className="row">

                    {images.map((items) => {
                
                return (
                
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2" >
                    <a href={items.imge} data-lightbox="gridGallery" >
                        <img src={items.imge} alt="gallery imge" className="img-fluid" style={{height:"130px",width:"150%"}}/>
                    </a>
                    </div>

                );
            })}
        </div>
    </div> 
    <Footer />  
        </>
    )
}
