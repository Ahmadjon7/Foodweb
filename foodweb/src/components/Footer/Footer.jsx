import React from 'react';
import Container from '../../utils/Container'
import Group90 from '../images/Group 90.svg';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import Group33 from '../images/image 33.png'
import Group32 from '../images/image 32.png'
import Group35 from '../images/image 35.png'
import Group36 from '../images/image 36.png'
import Group34 from '../images/image 34.png'
import Group37 from '../images/image 37.png'
import Group121 from '../images/Group 121.svg'
import './Footer.scss'


const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer-box">
                    <div className="footer-box__local">
                        <img src={Group90} alt="" />
                        <p>
                            We work with a passion of taking
                            challenges and creating new ones
                            in advertising sector.
                        </p>
                        <span>
                            <AiFillLinkedin />
                            <AiFillInstagram />
                            <AiFillFacebook />
                            <AiFillTwitterSquare />
                        </span>
                    </div>
                    <div className="footer-box__links">
                        <h5>LINKS</h5>
                        <span>Home</span>
                        <span>Services</span>
                        <span>About us</span>
                        <span>Testimonials</span>
                        <span>News</span>
                    </div>
                    <div className="footer-box__info">
                        <h5>official info:</h5>
                        <span>
                            <HiOutlineLocationMarker className='footer-svg1' />
                            88 comercial road
                            fratton,london
                        </span>
                        <span>
                            <BsTelephone className='footer-svg2' />
                            0325-54598-544
                        </span>
                        <div>
                            <h6>OPEN HOURS:</h6>
                            <p>mon - sat: 8 am - 5 pm,</p>
                            <p>sunday : closed</p>
                        </div>
                    </div>
                    <div className="footer-box__instagram">
                        <h5>Instagram</h5>
                        <div>
                            <img src={Group33} alt="" />
                            <img src={Group32} alt="" />
                            <img src={Group35} alt="" />
                            <img src={Group36} alt="" />
                            <img src={Group34} alt="" />
                            <img src={Group37} alt="" />
                        </div>
                        <img src={Group121} alt="" />
                    </div>
                </div>
                <hr />
            </Container>
        </footer>
    );
};

export default Footer;