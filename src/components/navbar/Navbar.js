import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [focusedButton, setFocusedButton] = useState('Faculty'); // Initialize the focused button

    const handleNav = () => setNav(!nav)

    const handleButtonClick = (buttonName) => {
        setFocusedButton(buttonName);
    };

    return (
    <div name="home" className={`navbar ${nav ? 'navbar-bg' : ''}`}>
        <div className={`logo ${nav ? 'logo-bg' : ''}`}>
          <img src={logo} alt="main logo" style={{ width: '150px' }} />
        </div>

        <ul className="nav-menu">
            <li>
                <button
                    className={`nav-menu__item ${focusedButton === 'Faculty' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Faculty')}
                >
                    Faculty
                </button>
            </li>
            <li>
                <button
                    className={`nav-menu__item ${focusedButton === 'Institution' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Institution')}
                >
                    Institution
                </button>
            </li>
            <li>
                <button
                    className={`nav-menu__item ${focusedButton === 'Venue' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Venue')}
                >
                    Venue
                </button>
            </li>
            <li>
                <button
                    className={`nav-menu__item ${focusedButton === 'Concept' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Concept')}
                >
                    Concept
                </button>
            </li>
        </ul>

        <div className="nav-icons">
            <BsPerson className='icon'/>
        </div>

        <div className="hamburger" onClick={handleNav}>
            {!nav ? (<HiOutlineMenuAlt4 className='icon' />)
             : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-nav">
                <li>
                    <button
                    className={`mobile-nav__item ${focusedButton === 'Faculty' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Faculty')}
                    >
                        Faculty
                    </button>
                </li>
                <li>
                    <button
                    className={`mobile-nav__item ${focusedButton === 'Institution' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Institution')}
                    >
                        Institution
                    </button>
                </li>
                <li>
                    <button
                    className={`mobile-nav__item ${focusedButton === 'Venue' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Venue')}
                    >
                        Venue
                    </button>
                </li>
                <li>
                    <button
                    className={`mobile-nav__item ${focusedButton === 'Concept' ? 'focused' : ''}`}
                    onClick={() => handleButtonClick('Concept')}
                    >
                        Concept
                    </button>
                </li>
            </ul>

            <div className="mobile-menu-bottom">
                <div className="menu-icons">
                    <button className="menu-icons__item">Account</button>
                </div>

                <div className="social-icons">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
        </div>   

    </div>
    )
}

export default Navbar