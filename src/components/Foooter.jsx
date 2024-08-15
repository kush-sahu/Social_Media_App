import React from 'react'
import '../App.css'
function Foooter() {
  return (
    <div>
      <div className="containers" >
        <footer className="py-3  mynav" >
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
          <p className="text-center text-white">© 2023 My Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Foooter