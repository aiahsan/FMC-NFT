import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
export default ({ title, body }) => {
  return (
    <>
      <Accordion defaultActiveKey='0'>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className='btn d-flex w-100 align-items-center justify-content-between collapsed'
              as={Button}
              variant='link'
              eventKey='0'
            >
              <span>
                Why should I choose <span className='blue-text'>Labels?</span>
              </span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>{body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};
