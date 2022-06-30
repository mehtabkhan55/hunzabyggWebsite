import React from "react";
import { useState,useEffect } from "react";
import Navigationbar from "../components/Navigationbar";
import Workplc from "../pages/workplc";
import Footer from "../components/Footer";

export default function Gallery(){

    const[item] = useState(Workplc);
    
    const[crrunt,setCrrunt] = useState(0)
    const length = item.length;
    
    const nextslide= ()=>{
        setCrrunt(crrunt === length -1 ? 0 :crrunt +1)
    }
    console.log(crrunt);
    const prevslide = () =>{
        setCrrunt(crrunt === 0 ? length -1 : crrunt -1)
    }
    useEffect(() => {
    
    }, [crrunt])
    
    
    if(!Array.isArray(item) || item.length <= 0){
        return null
    }
    
    return(
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
            <div className="container-fluid">
                <div className="row">
                    {
                        item.map((slide)=>{
                             const{imge,catagory,id} = slide;
                            return(
                                <>
                                    <div className="col-4 col-md-3 col-lg-2 my-2">
                                        
                                        <img src={imge} alt="" className="img-fluid" data-bs-toggle="modal" data-bs-target= {"#lightbox_"+id}
                                        style={{height:"100px",width:"150%"}} />
                                    </div>
                                    
                                    <div class="modal fade" id={"lightbox_"+id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{catagory}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                <div className={id === crrunt ? 'imge active' : 'imge'} key={'#lightbox_'+id}>
                                                    {id === crrunt || (
                                                    <img src={imge} alt="" className="img-fluid" style={{height:"300px",width:"300%"}} />
                                                    )}
                                                    </div> 
                                                                    {/* previous buttton */}
                                                     <button className="carousel-control-prev" type="button" onClick={prevslide}
                                                      data-bs-target={"#lightbox-"+id} data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>

                                                                {/* next button */}
                                                    <button className="carousel-control-next" type="button" onClick={nextslide}
                                                    data-bs-target={"#lightbox-"+id} data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}