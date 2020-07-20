import React from 'react';
import { Button, FormControl, Container } from 'react-bootstrap';
import { Col, Row, Form, InputGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

class Volunteer extends React.Component {

  onAcceptClick() {

  };

  render() {
  return (


    <div className="volunteer">
            <h3 className="header">
                Patient List
            </h3>
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header className="text-dark" >Email{}</Card.Header>
        <Card.Body>
        <Card.Title className="text-dark">Language,{}</Card.Title>
        <Button variant="primary" onClick={this.onAcceptClick}>Accept Visit</Button>
    </Card.Body>
  </Card>
  <br />

    </div>
  );
}
}

export default Volunteer;