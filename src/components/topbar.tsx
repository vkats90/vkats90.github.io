import { Link, useNavigate } from 'react-router-dom'
import Hamburger from './hamburger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ViewContext } from '../App'
import { useContext } from 'react'

const TopBar = () => {
  const navigate = useNavigate()
  const { inView } = useContext(ViewContext)
  return (
    <div
      className={`fixed flex flex-row w-full  px-5  h-10 z-30  ${
        inView
          ? 'bg-gradient-to-r from-white to-white/50'
          : 'bg-gradient-to-r from-white/0 to-white/50'
      }`}
    >
      <Hamburger />
      <div
        id="logo"
        className="flex-none flex flex-col  flex-grow md:flex-none text-center md:text-left cursor-pointer group "
        onClick={() => navigate('/')}
      >
        <h1 className="text-xl md:text-2xl font-Bebas transition duration-300 group-hover:translate-x-1 ">
          VL<span className="text-primary">A</span>D
        </h1>
        <h1 className="-my-3 translate-x-2 p-0 text-xl md:text-2xl font-Bebas transition duration-300 group-hover:!-translate-x-1">
          K<span className="text-primary">A</span>TS
        </h1>
      </div>
      <div
        id="links"
        className=" flex-grow text-xl pr-10 hidden md:flex flex-row justify-end gap-4   items-stretch "
      >
        {location.pathname != '/' && (
          <Link className="self-center cursor-pointer hover:text-primary" to="/">
            Home
          </Link>
        )}
        {location.pathname != '/resume' && (
          <Link className="self-center cursor-pointer hover:text-primary" to="/resume">
            Resume
          </Link>
        )}
        {location.pathname != '/projects' && (
          <Link className="self-center cursor-pointer hover:text-primary" to="/projects">
            Projects
          </Link>
        )}
        {location.pathname != '/contact' && (
          <Link className="self-center cursor-pointer hover:text-primary" to="/contact">
            Contact
          </Link>
        )}
      </div>
      <div id="social" className="flex-none flex flex-row justify-end items-stretch gap-4">
        <a
          href={'https://www.linkedin.com/in/vladimirkats/'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary transition duration-200 mt-1"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a
          href={'https://github.com/vkats90'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary transition duration-200 mt-1"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </div>
    </div>
  )
}

export default TopBar
