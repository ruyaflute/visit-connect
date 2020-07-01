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

        <Form.Label as="legend" column sm={2}>
        Language requesting: 
      </Form.Label>
  {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
      <Form.Check
        custom
        inline
        label="Enlish"
        type={type}
        id={`custom-inline-${type}-1`}
      />
      <Form.Check
        custom
        inline
        label="Español"
        type={type}
        id={`custom-inline-${type}-2`}
      />
      <Form.Check
        custom
        inline
        label="中文"
        type={type}
        id={`custom-inline-${type}-3`}
      />
    </div>
  ))}
       <br/>
        <Form.Label>I'm requesting an visit for: </Form.Label>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
  <Row>

    <Form.Group as={Col} controlId="formGridTime">
      <Form.Label>Time: </Form.Label>
      <Form.Control type="time" placeholder="Time" className="align-right" />
    </Form.Group>
  </Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address: </Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Row>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>City: </Form.Label>
    <Form.Control as="select" custom>
      <option>Manhattan</option>
      <option>Brooklyn</option>
      <option>Queens</option>
      <option>Bronx</option>
    </Form.Control>
  </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip: </Form.Label>
      <Form.Control type="number"/>
    </Form.Group>
  </Row>

  <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone: </Form.Label>
      <Form.Control type="number" placeholder="Enter phone number" />
    </Form.Group>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Reason for Visit:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl className="textarea" as="textarea"/> 
  </InputGroup>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        
    </div>
  );
}
}

export default Patient;