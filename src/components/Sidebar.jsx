import React from 'react';
import '../App.css'
function Sidebar({setTab,homeclick,postclick}) {
    return (
        <div className="mynav d-flex flex-column flex-shrink-0 p-3 " style={{ width: '199px',height:'80vh' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkhref="#bootstrap"></use></svg>
                <span className="fs-5 text-white">DashBoard</span>
            </a>
            <hr  className='text-white'/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className={` ${setTab==="Home"? "nav-link active text-white":"nav-link   text-white"} `} aria-current="page" onClick={homeclick}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className={` ${setTab==="post"? "nav-link active text-white":" nav-link  text-white"} `} onClick={postclick}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref="#speedometer2"></use></svg>
                        Posts
                    </a>
                </li>
               
               
            </ul>
            <hr className='text-white'/>
            {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div> */}
        </div>
    );
}

export default Sidebar;
