import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom';
export default function Navbar(props){
    const c=()=>{
      if(props.mode=== 'light') return '#FFFFF0';
      else if(props.mode==='dark') return 'grey';
      else if(props.mode==='Green') return '#90EE90';
      else if(props.mode==='Blue') return '#ADD8E6';
      else return '#736AFF';
    }
    return (
     <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: c() }} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div className="btn-group mx-3" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" onClick={() => props.toggleMode('Green')} id="btnradio1" autoComplete="off" />
              <label className="btn btn-outline-dark" htmlFor="btnradio1">Green</label>

              <input type="radio" className="btn-check" name="btnradio" onClick={() => props.toggleMode('Blue')} id="btnradio2" autoComplete="off"/>
              <label className="btn btn-outline-dark" htmlFor="btnradio2">Blue</label>

              <input type="radio" className="btn-check" name="btnradio" onClick={() => props.toggleMode('SlateBlue')} id="btnradio3" autoComplete="off"/>
              <label className="btn btn-outline-dark" htmlFor="btnradio3">SlateBlue</label>

              <input type="radio" className="btn-check" name="btnradio" onClick={() => props.toggleMode('dark')} id="btnradio4" autoComplete="off"/>
              <label className="btn btn-outline-dark" htmlFor="btnradio4">Dark</label>

              <input type="radio" className="btn-check" name="btnradio" onClick={() => props.toggleMode('light')} id="btnradio5" autoComplete="off"/>
              <label className="btn btn-outline-dark" htmlFor="btnradio5">Light</label>
            </div>

            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={() => props.toggleMode('dark')} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}


