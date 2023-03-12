import React from 'react';
import Container from '../../../utils/Container'
import Group15 from '../../images/image 15.png'
import Group27 from '../../images/image 27.png'
import Group26 from '../../images/image 26.png'
import { MdAddBox } from 'react-icons/md'
import { TiStar } from 'react-icons/ti'
import './Product.scss'

const Product = () => {
    return (
        <section className='product'>
            <Container>
                <div className="product-box">
                    <p className='product-box--smlltitle'>~ Products ~</p>
                    <h2 className='product-box--title'>All of our products are organic & fresh.</h2>
                    <ul className='product-list'>
                        <li className='product-list__item'>
                            <img src={Group15} alt="" className='product-list__item--img1' />
                            <div className='product-list__item--tabs'>
                                <span className='product-list__item--tabs__span'></span>
                                <p className='product-list__item--tabs__title'>fresh orenge</p>
                                <div className='product-list__item--box'>
                                    <span>
                                        <div><TiStar /> 4.2</div>
                                        <p>$8.44</p>
                                    </span>
                                    <MdAddBox />
                                </div>
                            </div>
                        </li>
                        <li className='product-list__item'>
                            <img src={Group27} alt="" className='product-list__item--img2' />
                            <div className='product-list__item--tabs'>
                                <span className='product-list__item--tabs__span'></span>
                                <p className='product-list__item--tabs__title'>fresh pomegranate</p>
                                <div className='product-list__item--box'>
                                    <span>
                                        <div><TiStar /> 4.2</div>
                                        <p>$4.26</p>
                                    </span>
                                    <MdAddBox />
                                </div>
                            </div>
                        </li>
                        <li className='product-list__item'>
                            <img src={Group26} alt=""  className='product-list__item--img3' />
                            <div className='product-list__item--tabs'>
                                <span className='product-list__item--tabs__span'></span>
                                <p className='product-list__item--tabs__title'>fresh pomegranate</p>
                                <div className='product-list__item--box'>
                                    <span>
                                        <div><TiStar /> 4.2</div>
                                        <p>$9.55</p>
                                    </span>
                                    <MdAddBox />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Product;