import React from 'react';
import { Button, FormControl, Container } from 'react-bootstrap';
import { Col, Row, Form, InputGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

class Volunteer extends React.Component {
  render() {
  return (


    <div className="volunteer">
            <h3 className="header">
                Patient List
            </h3>
            <Container>
                <Row xs="2">
                        {}
                </Row>
            </Container>


            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card border="light" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Light Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

    </div>
  );
}
}

export default Volunteer;