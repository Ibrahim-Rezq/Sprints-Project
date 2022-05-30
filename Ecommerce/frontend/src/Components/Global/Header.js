import React from 'react'

function Header() {
    return   (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid ">
        <a className="navbar-brand fs-1" href="#">Gamer <span className='text-danger'>Zone</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item fs-4 ">
              <a className="nav-link "  href="#">Log in</a>
            </li>
            <li className="nav-item fs-4 ">
              <a className="nav-link" href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      )
}

export default Header
