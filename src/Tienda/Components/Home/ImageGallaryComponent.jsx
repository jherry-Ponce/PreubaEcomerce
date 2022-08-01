import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const  ImageGallaryComponent = ({images}) => {
   console.log(images);
        return (
            <div>     
                       
                <Carousel interval="5000" transitionTime="1000">
                  {images.map((img,index)=>
                     <div key={index}>
                        <img src={img} alt={'imagen tienda'} />                        
                    </div> )
                  }
                    
                </Carousel>
            </div>
        )

}
export default ImageGallaryComponent; 