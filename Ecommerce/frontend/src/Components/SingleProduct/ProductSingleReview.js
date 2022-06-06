import React from 'react'

function ProductSingleReview() {
    return <div className=' d-flex flex-column  align-items-center justify-content-start p-3  '>
        <h1 className='mb-4'>Customers reviews</h1>
<div className="single-review d-flex flex-wrap">
    <img className='review-img' src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
" alt="" />
<div className='single-product-review-text ps-5'> 
<div className="d-flex ">
<p>PRODUCT REVIEWS (2)</p>    
  <div className='ps-3 '>
  <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star"></span>

   </div>
  </div>
<hr />
<h5>حلو اوي</h5>
<hr />
<p>جميل جدا زي الصوره بالظبط ويمكن احلي كمان❤️ن </p>
<hr />
<p>15-05-2022by Tota</p>
<hr />
</div>

</div>
<hr />
<div className="single-review  d-flex   ">
    <img className='review-img' src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
" alt="" />
<div className='ps-5'> 
<div className="d-flex">
<p>PRODUCT REVIEWS (2)</p>    
  <div className='ps-3 '>
  <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
 <span class="fa fa-star"></span>

   </div>
  </div>
<hr />
<h5>Beautiful and good</h5>
<hr />
<p>beautiful and good ❤️</p>
<hr />
<p>11-04-2022 by Ahmed</p>
<hr />
</div>

</div>
<button className='btn btn-danger btn-lg mt-5 '>Add Review</button> 
    </div>
}

export default ProductSingleReview
