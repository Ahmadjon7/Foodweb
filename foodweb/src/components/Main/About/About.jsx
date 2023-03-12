import React from 'react';
import Container from '../../../utils/Container'
import basKet from '../../images/basket.png'
import './About.scss'

const About = () => {
    return (
        <section className='about'>
            <Container>
                <ul className="about-list">
                    <li className="about-item--left">
                        <span>~ About us ~</span>
                        <h4>We believe in working with accredited farmers </h4>
                        <h6>Organic Foods and Café is a family runcompany founded in 2004 that runs organic supermarkets</h6>
                        <p>Organic means growing our food, which is to nourish us, without chemical aids during the growing process such as fertilisers, pesticides, fungcides, herbacides, larbicides etc</p>
                        <button className='universal-btn'>Read more</button>
                    </li>
                    <li className="about-item--right">
                        <img src={basKet} alt="" />
                    </li>
                </ul>
            </Container>
        </section>
    );
};

export default About;