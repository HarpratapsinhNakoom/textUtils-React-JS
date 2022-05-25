import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const about = document.querySelector('#aboutBtn');
  if(about) {
    about.addEventListener('click' , () => {
      props.pTitle('About');
    });
  }

  const home = document.querySelector('#homeBtn');
  if(home) {
    home.addEventListener('click' , () => {
      props.pTitle('Home');
    });
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode?'dark' : 'light'} bg-${props.mode?'dark' : 'light'}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" id='homeBtn'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" id='aboutBtn'>About</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" / >
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch mx-5 text-${props.mode?'light': 'dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode?'Light Mode': 'Dark Mode'}</label>
        </div>
      </div> 
    </div>
  </nav>
  )
}


/* Used to put a check on prop type values passsed during calling */

/* we can do title : Prototypes.string.isRequired to make it compulsory for properties
    In case default props are set this will not give error if props arent set while calling*/
Navbar.prototype = {

    title : PropTypes.string.isRequired ,
    navItem1 : PropTypes.string ,
    navItem2 : PropTypes.string ,
}

/* Set Default props ie if no properties aka props are set*/

Navbar.defaultProps = {
    title : 'Set title here' , 
    navItem1 : 'Home here' ,
    navItem2 : 'About here'
}