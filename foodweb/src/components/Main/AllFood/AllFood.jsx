import React from 'react';
import Container from '../../../utils/Container'
import Group23 from '../../images/image 23.png'
import Group22 from '../../images/image 22.png'
import Group24 from '../../images/image 24.png'
import Group16 from '../../images/image 16.png'
import {VscArrowSmallRight} from 'react-icons/vsc'
import './AllFood.scss'

const AllFood = () => {
    return (
        <section className='allfood'>
            <Container>
                <div className="food-box">
                    <p>~ Categories ~</p>
                    <h4>We believe in working with accredited farmers</h4>
                    <ul className='food-box__list'>
                        <li className='food-box__list--item'>
                            <div className='list'>
                                <img src={Group23} alt="" />
                                <h5>Spiecs</h5>
                            </div>
                            <div className="box">
                                <p>Shop our selection of organic fresh vegetables in a discounted price.</p>
                                <span>
                                    Shop Now <VscArrowSmallRight/>
                                </span>
                            </div>
                        </li>
                        <li className='food-box__list--item'>
                            <div className='list'>
                                <img src={Group22} alt="" />
                                <h5>vegetables</h5>
                            </div>
                            <div className="box">
                                <p>Shop our selection of organic fresh vegetables in a discounted price.</p>
                                <span>
                                    Shop Now <VscArrowSmallRight/>
                                </span>
                            </div>
                        </li>
                        <li className='food-box__list--item'>
                            <div className='list'>
                                <img src={Group24} alt="" />
                                <h5>dried food</h5>
                            </div>
                            <div className="box">
                                <p>Shop our selection of organic fresh vegetables in a discounted price.</p>
                                <span>
                                    Shop Now <VscArrowSmallRight/>
                                </span>
                            </div>
                        </li>
                        <li className='food-box__list--item'>
                            <div className='list'>
                                <img src={Group16} alt="" />
                                <h5>fresh fruits</h5>
                            </div>
                            <div className="box">
                                <p>Shop our selection of organic fresh vegetables in a discounted price.</p>
                                <span>
                                    Shop Now <VscArrowSmallRight/>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default AllFood;