import './Nav.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Nav() {
 
  const [active, setActive] = useState(false)

  function handleClick() {
        setActive(prev=>!prev)
  }

  return (
    <>
    <nav className={`${active?'':"nav-mobile-active"} nav-mobile-menu`}>
        <section className='mb-nav-header'>
        <h3 className='mb-nav-title '>Shortly</h3>
        <section className='nav-mb-close-icon'>
            <FontAwesomeIcon icon={faXmark}
            onClick={handleClick}></FontAwesomeIcon>
        </section>
        </section>
        <section className='mb-nav-left '>
           
            <a href='#get-started' className='mb-nav-link '>Features</a>
            <a href='#' className='mb-nav-link '>Pricing</a>
            <a href='#' className='mb-nav-link '>Resources</a>
        </section>
        <section className='mb-nav-right '>
            <a href="#" className='mb-nav-link'>Login</a>
            <a href="#" className='mb-nav-button nav-button'>Sign up</a>
        </section>
    </nav>
    <nav className="nav ">
        <section className='nav-left '>
            <h3 className='nav-title '>Shortly</h3>
            <a href='#get-started' className='nav-link nav-mb-view'>Features</a>
            <a href='#' className='nav-link nav-mb-view'>Pricing</a>
            <a href='#' className='nav-link nav-mb-view'>Resources</a>
        </section>
        <section className='nav-right '>
            <a href="#" className='nav-link nav-mb-view'>Login</a>
            <a href="#" className='nav-button nav-mb-view'>Sign up</a>
        </section>
        <section className='nav-mb-view-icon'>
            <FontAwesomeIcon icon={faBars}
            onClick={handleClick}></FontAwesomeIcon>
        </section>
    </nav>
    </>
  )
}
