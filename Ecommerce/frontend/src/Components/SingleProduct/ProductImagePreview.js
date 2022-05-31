import React ,{useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function ProductImagePreview() {
    const imageArray = ["https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", " https://images.pexels.com/photos/4714924/pexels-photo-4714924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/8947923/pexels-photo-8947923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
    
    return   <Carousel className='product-slider '>
        {/* {imageArray.map((image) =>{
            <div >
            <img src={image}/>
            <p className="legend"></p>
        </div>
        })} */}
           <div >
                 <img src={imageArray[0]} />
                 <p className="legend"></p>
             </div>
             <div>
                 <img src={imageArray[1]} />
                 <p className="legend"></p>
             </div>
             <div>
                    <img src={imageArray[2]} />
                 <p className="legend"></p>
             </div>
             <div>
                 <img src={imageArray[3]} />
                 <p className="legend"></p>
            </div>
                
            </Carousel>
           
}
export default ProductImagePreview




