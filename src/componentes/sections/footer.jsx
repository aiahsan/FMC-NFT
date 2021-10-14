import React from "react";
import FooterLinks from "./footerLinks";
import { LinksFooter } from "./links";
import { IoLogoTwitter } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa';
function App() {
   
  
  return (
    <>
      <div className="footer-part m16">
        <div className="footer-p container">
          <div className="footer">
            <h1>Enjoy the Future Millionaires Club</h1>
              <div className='d-flex'>
                <div className='d-iocn'>
                  {' '}
                  <IoLogoTwitter color='#5165f6' fontSize={25} />
                </div>
                <div className='d-iocn'>
                  <FaDiscord color='#5165f6' fontSize={25} />
                </div>
          
          
          
          </div>
          <div>
            <img src="images/group21.png"/>
          </div>
          </div>
        </div>
      </div>
          </>
  );
}

export default App;
