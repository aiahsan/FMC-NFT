import React from 'react';
import { Fade, Rotate } from 'react-reveal';
import { GiAerialSignal } from 'react-icons/gi';
import { Element, animateScroll as scroll } from 'react-scroll';
import Card from '../card';
import OwnHeading from '../ownHeading';
import { useMediaQuery } from 'react-responsive'

export default () => {
  const [mintvalue, setmintvalue] = React.useState(0);
  const isTablet = useMediaQuery({
    query: '(max-width: 1245px)'
  })
  return (
    <Element name='Mint' className='m16'>
      <section className='container'>
       <div className='mintform flex-column left-portion m-auto mb-4'>
       {isTablet?<>            <h1>Future Millionaires Club</h1>
</>:<></>}
            {isTablet?<>  <p>Mint a FMC - NFT</p></>:<></>}
            {isTablet?<>  <p>
              by connecting your Solana <span>Sollet</span> or{' '}
              <span>Phantom</span> wallet.
            </p></>:<></>}
       </div>

        <div className='mintform'>
          
          <div className='kahfsdff'>
            <label className='njwe0w'>MINT A FMC NFT </label>
            <div className='input-mint'>
              <h2>
                0.89 <sub>SOL</sub>
              </h2>
            </div>
            <div className='input-mint-label'>
              <label>1x FMC unique NFT per tx 1x 0.89SOL per NFT</label>
            </div>

            <div className='d-flex justify-content-center'>
              <button className='nav-btn bg-thser d-flex login-btn nav-link m-0 mt-5 '>
                Mint HERE
              </button>
            </div>
          </div>
          <div>
        
          </div>
          <div className='left-portion'>
            {!isTablet?<>            <h1>Future Millionaires Club</h1>
</>:<></>}
            {!isTablet?<>  <p>Mint a FMC - NFT</p></>:<></>}
            {!isTablet?<>  <p>
              by connecting your Solana <span>Sollet</span> or{' '}
              <span>Phantom</span> wallet.
            </p></>:<></>}
          
            
            <div className='kjse-d d-flex justify-content-between'>
              <div className='fmc-desc'>
                <GiAerialSignal fontSize={25} color='#99efd0' />
                <p className='mt-3'>10,000 Ever </p>
                <p>Minted </p>
                <label>
                  We’re only ever generating 10k FMC NFTs. There will be no
                  further generations.
                </label>
              </div>
              <div className='fmc-desc'>
                <GiAerialSignal fontSize={25} color='#99efd0' />
                <p className='mt-3 mb-2'>Unique Artworks </p>

                <label>
                  Each FMC NFT is uniq algorithmically generated & minted on the
                  Solana blockchain.
                </label>
              </div>
            </div>
            <label className='lbb-min-desc mt-2'>
              ***We will <span>donate 10% charities</span> to selected{' '}
              <span>charities</span>.
            </label>
            <label className='lbb-min-desc '>
              We will use this to support projects that{' '}
              <span>build schools</span> and work to <span>positively</span>{' '}
              impact
            </label>
            <label className='lbb-min-desc  '>
              the education of <span>future generations</span>,{' '}
              <span>the Future Millionaires</span>.***{' '}
            </label>
          </div>
        </div>
      </section>

      <Fade>
        <section className='mt5p'>
          <div className='mnt-s'>
            <div className='container'>
              <div className='home-main d-flex justify-content-between'>
                <div className='left-portion'>
                  <h1>The most powerful law in the Universe! </h1>

                  <p>
                    Do you ever heard about the <span>Law of Attraction? </span>
                  </p>
                  <p>
                    Your <span>positive energy</span> attract opportunities.
                  </p>

                  <p>So when you manifest and feel all these great things,</p>
                  <p>
                    the <span>frequences</span> of your{' '}
                    <span>visualization</span> makes it happen that things can
                    actually happen faster than you think.
                  </p>
                </div>
                <div className='card-parent'>
                  <Card classcst='card-m1' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </Element>
  );
};
