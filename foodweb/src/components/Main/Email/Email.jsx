import React from 'react';
import Container from '../../../utils/Container'
import './Email.scss'
import Group29 from '../../images/image 29.svg'
import Group30 from '../../images/image 30.svg'

const Email = () => {
    return (
        <section className='email'>
            <Container>
                <div className="email-box">
                    <img src={Group29} alt="" className='email-box__img1' />
                    <div className="email-box--tabs">
                        <h2>Subscribe to our Newsletter</h2>
                        <div className="email-box--tabs__form">
                            <div className="form-box">
                                <form>
                                    <input type="email"  placeholder='Type Your Email Address' />
                                    <button type='submit'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <img src={Group30} alt="" className='email-box__img2' />
                </div>
            </Container>
        </section>
    );
};

export default Email;