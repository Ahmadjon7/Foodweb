import React from 'react';
import Container from './../../../utils/Container';
import Group17  from '../../images/Group 17.png'
import Group1  from '../../images/Group 9.png'
import Group2  from '../../images/Group 10.png'
import Group3  from '../../images/Group 11.png'
import './Hero.scss'

const Hero = () => {
    return (
        <section className='hero-section'>
            <Container>
                <div className="hero-box">
                    <div className="hero-box--left">
                        <h2>Choose to best healthier way to life.</h2>
                        <p>Enjoy a healthy life by eating healthy foods thats have extraordinary flavors that make your life.</p>
                        <button className="universal-btn" >View details</button>
                        <ul className='hero-box--list'>
                            <li>Juicy Fruit</li>
                            <li>Food Logistics</li>
                            <li>SEAFOOD</li>
                        </ul>
                    </div>
                    <div className="hero-box--right">
                        <img src={Group17} alt="Group-17" />
                        <div>
                            <img src={Group1} alt="" />
                            <img src={Group2} alt="" />
                            <img src={Group3} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;