import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { ViewContext } from '../App'
import { useContext } from 'react'

const Footer = () => {
  const { inView } = useContext(ViewContext)
  const location = useLocation()
  return (
    <div
      className={`flex flex-row  w-full  px-5  h-10 z-30  ${
        inView
          ? 'bg-gradient-to-r from-white to-white/50'
          : 'bg-gradient-to-r from-white/0 to-white/50'
      }`}
    >
      <div
        id="links"
        className="  flex-grow text-xl pr-10 flex flex-row justify-center  gap-5 md:gap-20 items-stretch "
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
      <button
        className="cursor-pointer hover:text-primary"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  )
}

export default Footer
