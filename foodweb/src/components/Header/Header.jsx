import React from 'react';
import Container from '../../utils/Container'
import logoImage from '../images/Group 2.svg'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <nav className='header-navbar'>
                    <div className="header-logo">
                        <img src={logoImage} alt="logo-images" className='header-image' />
                        <span>Organio</span>
                    </div>
                    <div className='header-navbar__tabs'>
                        <ul className='header-navbar__list'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Pages</li>
                            <li>Shop</li>
                            <li>Service</li>
                        </ul>
                        <div className='header-navbar__booking'>
                            <FiSearch/>
                            <AiOutlineShoppingCart/>
                            <button className='universal-btn'>Booking now</button>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;