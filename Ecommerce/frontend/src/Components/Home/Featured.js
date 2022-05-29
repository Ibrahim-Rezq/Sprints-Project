import React from 'react'
import { FeaturedProducts } from '../../Utils/Constant' // Array

function Featured() {
    return (
        <div className='on-sale'>
        <h1>On Sale Today</h1>
       <div className="sales">
        
        <div className="sale1">
             <h2> 40%</h2>
            <img src="https://images.pexels.com/photos/8782574/pexels-photo-8782574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sale 1" />
             <p> Playstation 4 $399.99</p>
        </div>
    
        <div className="sale2">
              <h2>30%</h2>
              <img src="https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sale 2" />
              <p> Xbox Console          $699.99</p>
        </div>
    
        <div className="sale3">
             <h2>20%</h2>
             <img src="https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg" alt="Sale 3" />
              <p>Nintendo Switch  $559.99 </p>
        </div>
    
        </div>
    
        <button><a href="">All products</a></button>
        </div>
      )
    }

export default Featured
