import React from 'react';
import { Col, Row, Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Button, FormControl, Container } from 'react-bootstrap';
import './App.css';

import "react-datepicker/dist/react-datepicker.css";

class Patient extends React.Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     
  render() {
  return (
    <div className="patient">


<Form>
    <Form.Group controlId="formBasicEmail">
  <Form.Label>How do I feel today: </Form.Label>
        <Form.Control type="range" />
        </Form.Group>

        <h5 className="visitFor"> I'm requesting an visit for: </h5>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
  <Row>

    <Form.Group as={Col} controlId="formGridTime">
      <Form.Label>Time: </Form.Label>
      <Form.Control type="time" placeholder="Time" />
    </Form.Group>
  </Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address: </Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Row>

    <Form.Group  as={Row}>
      <Form.Label as="legend" column sm={2}>
        City: 
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Manhattan"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Brooklyn"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Queens"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Bronx"
          name="formHorizontalRadios"
          id="formHorizontalRadios"
        />
      </Col>
    </Form.Group>



    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip: </Form.Label>
      <Form.Control type="number"/>
    </Form.Group>
  </Row>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Reason for Visit:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl className="textarea" as="textarea"/> 
  </InputGroup>


  <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone: </Form.Label>
      <Form.Control type="number" placeholder="Enter phone number" />
    </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        
    </div>
  );
}
}

export default Patient;