
import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Importing standard icons for menu bar
import {faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
import {faHome,faUser,faEnvelope,faSuitcase,faBars,faFile} from '@fortawesome/free-solid-svg-icons'

// NavLink allows us to highligt a link as active
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="resume-link"
          to="/resume"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
        </NavLink>

      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/brent-johnson-b64101b5/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DevBrent3274"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Navbar