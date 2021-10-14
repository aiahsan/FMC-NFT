import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
 import {
  
  Element,
   
  animateScroll as scroll,
   
} from 'react-scroll';
export default ()=>{
    return  <Element name='faq' className='m16'>
    <section className='faq'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-center'>
              <h2>What to Know about the Future </h2>
              <h2>Millionaires Club </h2>
              <p className='light-text'>F.A.Q.</p>
            </div>

            <Accordion defaultActiveKey='0'>
              <Card className='mt-4'>
                <Card.Header>
                  <Accordion.Toggle
                    className='btn d-flex w-100 align-items-center justify-content-between collapsed'
                    as={Button}
                    variant='link'
                    eventKey='0'
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit?
                    </span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    Mauris ullamcorper, eros vitae mattis laoreet, sem justo
                    pharetra mauris.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='mt-4'>
                <Card.Header>
                  <Accordion.Toggle
                    className='btn d-flex w-100 align-items-center justify-content-between collapsed'
                    as={Button}
                    variant='link'
                    eventKey='1'
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit?
                    </span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    Mauris ullamcorper, eros vitae mattis laoreet, sem justo
                    pharetra mauris.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className='mt-4'>
                <Card.Header>
                  <Accordion.Toggle
                    className='btn d-flex w-100 align-items-center justify-content-between collapsed'
                    as={Button}
                    variant='link'
                    eventKey='2'
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit?
                    </span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    Mauris ullamcorper, eros vitae mattis laoreet, sem justo
                    pharetra mauris.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <div className='d-flex justify-content-center'>
              <button className='nav-btn d-flex login-btn nav-link m-0 mt-5 w-100 mx-250'>
                More Questions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Element>
 
  
  
}