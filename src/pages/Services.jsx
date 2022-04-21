import React from 'react'
import { useState } from 'react';
import Navigationbar from '../components/Navigationbar';
import Workplc from "./workplc.json";
import Footer from '../components/Footer';

export default function Services() {
    const[imgs ,setImgs] = useState(Workplc);

    const showImages = (type)=>{
        let images = Workplc.filter(img=>{
            return img.catagory === type
            
        })
        setImgs(images)
    }
     
    return (
        <div style = {{fontFamily:' Arial, Helvetica, sans-serif'}}>
            <Navigationbar />
            <div className="container " style = {{marginTop :'150px'}}>
                <div className="row">
                    <div className="col services">
                        
                    <button href="" onClick={()=>setImgs(Workplc)}>All</button>

                        <button href="" onClick={()=>showImages('Rooms')}>Rooms</button>
                        <button href="" onClick={()=>showImages('Windows')}>Window</button>
                        <button href="" onClick={()=>showImages('Walls')}>Wall</button>
                        <button href="" onClick={()=>showImages('Kitchen')}>Kitchen</button>
                        <button href="" onClick={()=>showImages('Floor')}>Floor</button>
                        <button href="" onClick={()=>showImages('Door')}>Door</button>
                        <button href="" onClick={()=>showImages('Wall Paper')}>WallPaper</button>
                        <button href="" onClick={()=>showImages('Paint')}>Paint</button>
                        <button href="" onClick={()=>showImages('Fasadpanel')}>Fasadpanel</button>
                        <button href="" onClick={()=>showImages('Fasadmalning')}>Fasadmanking</button>
                        <button href="" onClick={()=>showImages('Altan')}>Altan</button>
                        <button href="" onClick={()=>showImages('Staket')}>Staket</button>
                        <button href="" onClick={()=>showImages('Trappor')}>Tarrapor</button>
                        
                    {/* <button className='btn btn-warning' style={{color:"#9198e5"}}
                        onclick={()=> filturItem("Rooms")}>room</button> */}
                                    
                    </div>
                </div>
            </div>
            
            <div className="container" style = 
                {{marginTop :'20px',marginBottom:'10px' ,fontSize:"25px"}}> 
                <div className="row">
                    {
                        imgs.map((pic)=>{
                            
                            return(
                                <>
                                    <div className="col-6 col-md-3 my-2">
                                    <img src={pic.imge} alt="" style={{ height:"100px" , width:"100%"}} />
                                    
                                </div>
                                </>
                            )
                        })

                    }
              </div>      
            </div>
            <Footer/>
        </div>
    )
}

