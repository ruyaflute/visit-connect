import React from 'react';
import Form from 'react-bootstrap/Form'
import DatePicker from "react-datepicker";
import { Button, FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'

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

        <h5> I'm requesting an visit for: </h5>
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
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City: </Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip: </Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Reason for Visit:</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>

  <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone: </Form.Label>
      <Form.Control type="phone" placeholder="Enter phone number" />
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