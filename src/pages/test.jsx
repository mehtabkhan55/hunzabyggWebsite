import React, { useState } from 'react'
import imgdata from "./workplc.json"


export default function Test() {

    const [imges] = useState(imgdata);

    var imgSize = document.querySelector(".imgSize");
    
    function resize(){
        imgSize.style("width: 100%,height:300px")
    }
  return (
        <div className="container">
            <div className="row">
        {imges.map((pic)=>{
            
            return(
                <>
                    <div className="col-6 col-md-3 my-2 ">
                         <div className="mySlides">
                            <img src={pic.imge} alt="" className='imgSize' onClick={resize}/>
                        </div> 
                        {/* <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={plusSlides(1)}>&#10095;</a> */}

                    </div>
                    
                </>
            )
        })}
        </div>
    </div>
  );
  
}
