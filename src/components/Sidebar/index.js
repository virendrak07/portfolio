import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faPhotoFilm,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faWpforms,
  faXing,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo"></img>
      <img className="sub-logo" src={LogoSubtitle} alt="virendra"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#fff" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/about"
        className="about-link"
      >
        <FontAwesomeIcon icon={faUser} color="#fff" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/contact"
        className="contact-link"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#fff" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/certificates"
        className="certification-link"
      >
        <FontAwesomeIcon icon={faWpforms} color="#fff" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/virendra-kadam/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#fff"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/virendra-kadam/"
        >
          <FontAwesomeIcon icon={faXing} color="#fff"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/virendra-kadam/"
        >
          <FontAwesomeIcon icon={faPhotoFilm} color="#fff"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
