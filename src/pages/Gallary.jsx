import React from "react";
import { useState } from "react";
import Workplc from "../pages/workplc";


export default function Gallery(){
    const[item] = useState(Workplc);
    return(
        <>
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
                        item.map((elem)=>{
                            const{imge,catagory,id} = elem;
                            return(
                                <>
                                    <div className="col-4 col-md-3 col-lg-2 my-2">
                                        <img src={imge} alt="" className="img-fluid" data-bs-toggle="modal" data-bs-target= {"#lightbox-"+id}
                                        style={{height:"100px",width:"150%"}} />
                                    </div>
                                    <div class="modal fade" id={"lightbox-"+id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{catagory}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src={imge} alt="" className="img-fluid" style={{height:"300px",width:"300%"}} />
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
        </>
    )
}