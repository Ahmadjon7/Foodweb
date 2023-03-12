import React from 'react';
import Container from '../../../utils/Container'
import './More.scss'
import Group30 from '../../images/Group 30.svg'
import Group31 from '../../images/Group 31.svg'
import Group32 from '../../images/Group 32.svg'
import Group33 from '../../images/Group 33.svg'


const More = () => {
    return (
        <section className='more'>
            <Container>
                <div className="more-box">
                    <ul className="more-list">
                        <li className="more-item">
                            <img src={Group30} alt="" />
                            <h5>Return Policy</h5>
                            <p>Purchasing from select family farmers who farm organically.</p>
                        </li>
                        <li className="more-item">
                            <img src={Group31} alt="" />
                            <h5>100% Fresh</h5>
                            <p>Purchasing from select family farmers who farm organically.</p>
                        </li>
                        <li className="more-item">
                            <img src={Group32} alt="" />
                            <h5>Support 24/7</h5>
                            <p>Purchasing from select family farmers who farm organically.</p>
                        </li>
                        <li className="more-item">
                            <img src={Group33} alt="" />
                            <h5>Secured Payment</h5>
                            <p>Purchasing from select family farmers who farm organically.</p>
                        </li>
                    </ul>
                    <div className="more-item--box">
                        <span>~ Why Choose us? ~</span>
                        <h3>
                            We do not buy 
                            from the open market <br />
                            & traders.
                        </h3>
                        <p>
                            Purchasing from select family farmers who farm organically because they believe in it and so we do. We are conscious of air miles and our carbon footprint so a lot of our produce comes from Egypt.
                        </p>
                        <button className='universal-btn'>See more</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default More;