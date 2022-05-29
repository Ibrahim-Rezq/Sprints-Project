import React from 'react'

function Header() {
    return   (
        <header>
          <nav>
        <h1> Gamer <span>Zone</span></h1>
    
      
        <ul className='nav-center' >
          <li><a href="#">Home </a></li>
          <li><a href="">About </a></li>
          <li><a href="">Products </a></li>
        </ul>
     
    
    
        <ul className='nav-right' >
        <li><a href="">Log in </a></li>
        <li><a href="">Cart   </a></li>
        </ul> 
        
      
        </nav>
        </header>
      )
}

export default Header
