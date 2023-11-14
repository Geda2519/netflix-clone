import React, { useState, useEffect } from 'react'
import '../CSS/Nav.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing Images
import Logo from '../Resource/image/netflix-logo-history-32.png';
// import Avatar from '../Resource/image/avatar.png';

function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) setShow(true);
            else setShow(false);
        })
        // return () => window.removeEventListener('scroll');
    }, []);
    return (
        <div className={`nav position-fixed p-4 d-flex justify-content-between ${show && ' nav__black'
            } `}>
            <Link to="/"><img className='nav__logo position-fixed' src={Logo} alt="Netflix Logo" /></Link>

            <img
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avatar logo"
            />
        </div>
    )
}

export default Nav