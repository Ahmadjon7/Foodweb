import React from 'react';
import Container from '../../../../src/utils/Container'
import Cart from '../../images/Group 89.png'
import Group49 from '../../images/Group 49.svg'
import Group50 from '../../images/Group 50.svg'
import Group52 from '../../images/Group 52.svg'
import Group51 from '../../images/Group 51.svg'
import './Buy.scss'


const Buy = () => {
    return (
        <section className='buy'>
            <Container>
                {/* <div className="buy-box"> */}
                    <ul className="buy-list">
                        <li className='buy-item--left'>
                            <img src={Cart} alt="" />
                        </li>
                        <li className='buy-item--right'>
                            <div>
                                <img src={Group49} alt="" />
                                <span>                                    
                                    <h3>182+</h3>
                                    <p>Expert Team</p>
                                </span>
                            </div>
                            <div>
                                <img src={Group50} alt="" />
                                <span>                                    
                                    <h3>27+</h3>
                                    <p>Awards Winning</p>
                                </span>
                            </div>
                            <div>
                                <img src={Group52} alt="" />
                                <span>                                    
                                    <h3>1,542+</h3>
                                    <p>Satisfied Clients</p>
                                </span>
                            </div>
                            <div>
                                <img src={Group51} alt="" />
                                <span>                                    
                                    <h3>285+</h3>
                                    <p>Activate Products</p>
                                </span>
                            </div>
                        </li>
                    </ul>
                {/* </div> */}
            </Container>
        </section>
    );
};

export default Buy;