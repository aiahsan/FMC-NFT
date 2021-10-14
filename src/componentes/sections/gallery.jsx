import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from '../card';

import { Element, animateScroll as scroll } from 'react-scroll';
export default () => {
  return (
    <Element name='Gallery' className='m16'>
      <section>
        {' '}
        <div className='gallery container'>
          <h1>Gallery</h1>
          <OwlCarousel
            className='owl-theme gallery-car'
            navText={[
              "<img src='images/arrow-left.png'>",
              "<img src='images/arrow-right.png'>",
            ]}
            dots={false}
            responsive={{
              0: {
                items: 1,
              },
              769: {
                items: 2,
              },
              1046: {
                items: 3,
              },
              1601: {
                items: 3,
              },
            }}
            loop
            margin={10}
            nav
          >
            <div className='item'>
              <div className='card-parent w-100'>
                <Card classcst='card-m2' />
              </div>{' '}
            </div>
            <div className='item'>
            <div className='card-parent w-100'>
                <Card classcst='card-m3' />
              </div>            </div>
            <div className='item'>
            <div className='card-parent w-100'>
                <Card classcst='card-m4' />
              </div>            </div>
             
          </OwlCarousel>
          <button className='nav-btn d-flex login-btn nav-link m-0  more-tbn'>
            More
          </button>
        </div>
      </section>
    </Element>
  );
};
