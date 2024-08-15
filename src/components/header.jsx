import React from 'react'
import '../App.css'
function Header() {
  return (
    <div>

<nav className="mynav py-2  border-bottom" >
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item"><a href="#" className="nav-link text-white px-2 active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white  px-2">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white  px-2">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white  px-2">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white  px-2">About</a></li>
      </ul>
      <ul className="nav">
        <li className="nav-item"><a href="#" className="nav-link text-white px-2">Login</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>
  <header className=" mynav py-3  border-bottom">
    <div className="container d-flex flex-wrap justify-content-center">
      <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkhref:href="#bootstrap"></use></svg>
        <span className="fs-4 text-white">Social Media App</span>
      </a>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </header>
    </div>
  )
}

export default Header