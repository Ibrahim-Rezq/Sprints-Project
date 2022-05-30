import React from 'react'
import { FeaturedProducts } from '../../Utils/Constant' // Array
import ProductCard from '../Products/ProductCard'

function Featured({}) {
    return (
        <div className='on-sale '>
        <h3 className='fw-bold display-4  text-center py-5'>On <span> Sale</span> Today</h3>
        <div  className='underline'></div>
       <div className="sales">
        {FeaturedProducts.map((product)=>{
          return <ProductCard Product={product}/>
        })}
       
    
    
        </div>
        <div className='d-flex justify-content-center py-4 '>
        <a className='btn-lg  btn-primary my-3' href="">All products</a>
        </div>
        
        </div>
      )
    }

export default Featured
