import React from 'react';
import { Fade, Rotate } from 'react-reveal';
import { Element, animateScroll as scroll } from 'react-scroll';
import Card from '../card';
import OwnHeading from '../ownHeading';
export default () => {
  return (
    <Element name='home' className='mt5'>
      <Fade>
        <section>
          <div className=''>
            <div className='container'>
              <div className='home-main d-flex justify-content-between'>
                <div className='left-portion'>
                  <h1>Introducing the</h1>
                  <h1>Future Millionaires Club</h1>
                  <p>
                    These artworks are all about <span>motivation</span> and{' '}
                    <span>manifestation</span>.
                  </p>
                  <p>
                    We randomly generated <span>10,000 FMC</span> - NFTs.
                  </p>
                  <p>
                    Each displays <span>YOUR potential future!</span>
                  </p>
                  <p>We created more than 180+ traits!</p>

                  <div className='d-flex'>
                    <button className='bg-thser nav-btn mr-4 d-flex login-btn nav-link m-0 '>
                      JOIN THE DISCORD
                    </button>
                    <button className='nav-btn d-flex login-btn nav-link m-0 '>
                      learn more
                    </button>
                  </div>
                </div>
                <div className='card-parent'>
                  <Card />
                </div>
              </div>
              <div className='ownship'>
                <h1>
                  Cryptographically Signed & Staked with Proof of Ownership
                </h1>
                <h2>
                  Motivative, algorithmically generated,unique and collectible
                  NFTs.
                </h2>
                <div className='d-flex justify-content-between flex-wrap'>
                  <OwnHeading
                    title='10.000'
                    description='Ever Minted - forever!'
                  />
                  <OwnHeading
                    title='2.000.000+'
                    description='Possible combinations'
                  />
                  <OwnHeading title='180+' description='Unique attributes' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </Element>
  );
};
