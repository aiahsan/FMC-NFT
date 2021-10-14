import React from 'react';
import './App.css';
import Navbar from './componentes/navbar';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
 
import Home from './componentes/sections/home'
import Gallery from './componentes/sections/gallery'
import Mint from './componentes/sections/mint'
import FAQ from './componentes/sections/faq'
import Footer from './componentes/sections/footer';
function App() {
  
  return (
    <>
      <Navbar />
      <Home/> 
      <Mint/>
      <Gallery/>
      <FAQ/>
      {/* <Team/> */}
      <Footer/>
       </>
  );
}

export default App;
