import React from 'react';

import fineHeader from '../media/fine-footer.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav-back pt-0" >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="">
      <img src={fineHeader} alt="" className='fine-footer mx-5 px-1 pt-2' />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  nav-border ">
        <li className="nav-item p-2 pt-3 nav-border-remove">
          <NavLink className="nav-link  nav-link-css"  to="#" >
            HOME
          </NavLink>
        </li>
        <li className="nav-item p-2 pt-3 ">
          <NavLink className="nav-link nav-link-css"  to="#" >
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item p-2 pt-3 ">
          <NavLink className="nav-link nav-link-css"  to="#" >
            MENU
          </NavLink>
        </li>
        <li className="nav-item p-2 pt-3 ">
          <NavLink className="nav-link nav-link-css"  to="#" >
            CHEFS
          </NavLink>
        </li>
        <li className="nav-item p-2 pt-3 ">
          <NavLink className="nav-link nav-link-css"  to="#" >
            BOOK A TABLE
          </NavLink>
        </li>
        <li className="nav-item p-2 pt-3 " style={{marginRight: 15}} >
          <Link className="nav-link nav-link-css"  to="#" >
            CONTACT US
          </Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar