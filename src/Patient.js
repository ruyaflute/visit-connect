import React from 'react';
import { Col, Row, Form, InputGroup, FormGroup } from "react-bootstrap";
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
<br/><br/>
<Form>
    <Form.Group as={Col} controlId="formBasicEmail">
      <Form.Label>How do I feel today: </Form.Label>
        <Form.Control type="range" />

        <Form.Label as="legend">
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
    </Form.Group>
    </Form>
       
    <Form>  

    <Form.Group as={Col}>
        <Form.Label>I'm requesting an visit for:</Form.Label>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridTime">
      <Row>
      <Col xs={3}>
      <Form.Label>Time: </Form.Label>
      <Form.Control type="time" placeholder="Time" className="align-right" />
      </Col>
      <Col>
      <Form.Label>Address: </Form.Label>
      <Form.Control placeholder="1234 Main St" />
      </Col>
      </Row>
    </Form.Group>

    <Form.Group as={Col}>
<Row>
  <Col>
      <Form.Label>City: </Form.Label>
      <Form.Control as="select">
      <option>Manhattan</option>
      <option>Brooklyn</option>
      <option>Queens</option>
      <option>Bronx</option>
      </Form.Control>
  </Col>
  <Col>
      <Form.Label>Zip: </Form.Label>
      <Form.Control type="number"/>
  </Col>
    <Col> 
      <Form.Label>Phone: </Form.Label>
      <Form.Control type="number" placeholder="Enter phone number" />
      </Col>
  </Row>
  </Form.Group>

  <Form.Group as={Col}>
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Reason for Visit:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl className="textarea" as="textarea"/> 
  </InputGroup>


  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
  </Form>

    </div>
  );
}
}

export default Patient;