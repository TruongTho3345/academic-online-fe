import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav ? 'logo logo-bg' : 'logo'}>
            <img src={logo} alt="main logo" style={{ width: '150px' }}/>
        </div>

        <ul className="nav-menu" >
            <li>
                <button>Faculty</button>
            </li>
            <li>
                <button>Institution</button>
            </li>
            <li>
                <button>Venue</button>
            </li>
            <li>
                <button>Concept</button>
            </li>
        </ul>

        <div className="nav-icons">
            <BsPerson className='icon'/>
        </div>

        <div className="hamburger" onClick={handleNav}>
            {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-nav">
                <li>
                    <button>Faculty</button>
                </li>
                <li>
                    <button>Institution</button>
                </li>
                <li>
                    <button>Venue</button>
                </li>
                <li>
                    <button>Concept</button>
                </li>
            </ul>

            <div className="mobile-menu-bottom">
                <div className="menu-icons">
                    <button>Account</button>
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