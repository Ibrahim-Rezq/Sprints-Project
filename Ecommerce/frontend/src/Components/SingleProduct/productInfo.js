import React from 'react'

function productInfo() {
  return <div>
      <div className='d-flex flex-column'>
                    <div className='product-text-side'>
                        <h1>Playstation 4 Controller </h1>
                        <div className='reviews-num d-flex pt-2 pb-2 '>
                            <div className='pe-2 '>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        </div>
                      <a>( 2 customer reviews) </a>
                        </div>
                        <h2>$59.99</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel blanditiis eaque veritatis aliquid!
                            Corporis, eos?
                        </p>
                        <div className='d-flex justify-content-between align-items-center '>
                            <div>
                                <p className='product-status'>Colors : </p>
                                <p className='product-status'>SKU: </p>
                                <p className='product-status'>Brand: </p>
                            </div>
                            <div>
                                <p>In Stock</p>
                                <p>RectQrvzMGUGj1mqa</p>
                                <p>Sony</p>
                                
                            </div>
                            <button className='btn btn-danger btn-lg mt-5 '>Add Review</button> 
                        </div>
                        <hr />
                    </div>
                    </div>
    </div>
  
}

export default productInfo;

