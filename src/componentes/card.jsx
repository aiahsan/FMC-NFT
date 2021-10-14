import React from 'react';
export default ({classcst}) => {
  return (
    <div className={`card-mn ${classcst}`}>
      <div className='d-flex justify-content-between'>
        <div>
          <h4>Portfolio Value:</h4>
        </div>
        <div>
          <h4 className="text-right">7,000,000,00 USD</h4>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h4>Property:</h4>
        </div>
        <div>
          <h4 className="text-right">MONACO APARTMENT 150SQM</h4>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h4>Car:</h4>
        </div>
        <div>
          <h4 className="text-right">FERRARI SF90</h4>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h4>Watch:</h4>
        </div>
        <div>
          <h4 className="text-right">ROLEX SUBMARINA HULK</h4>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h4>Jet:</h4>
        </div>
        <div>
          <h4 className="text-right">AIRBUS H130 HELICOPTER</h4>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div>
          <h4 className="text-uppercas">Yacht:</h4>
        </div>
        <div>
          <h4 className="text-right">45M Yacht W/ 1 Pool</h4>
        </div>
      </div>
      <hr></hr>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <h4>Quote:</h4>
        </div>
        <div>
          <p>Lorem Ipsum is simply </p>
          <p>Lorem Ipsum is simply </p>
          <p>Lorem Ipsum is simply </p>
        </div>
      </div>
    </div>
  );
};
