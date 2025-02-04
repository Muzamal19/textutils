 
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {

 
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.Title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.Shop}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.Contact}</a>
          </li>
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toogleMode}   type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
    
  </nav>
 
  
  )
}
 Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  Shop: PropTypes.string
}

// default props tab show ho ga jab ham componenets ko
//  define na kara or tab ya automatically show ho jay ga

// agar componenets ya value na add kia jay jaisa ka title or shop to
// us ki jagha par konsa value use ho gi
Navbar.defaultProps = {
  Title: 'Set Title',
  Shop: 'shop Now' 
};

