import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class PatientCard extends React.Component {
    constructor(props) {
        super(props);
    }

    onAcceptClick() {
        alert("Accepted the patient request!")
      }

  render() {
  return (
    <div className="patientCard">
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header className="text-dark" >{this.props.patient.email}</Card.Header>
        <Card.Body>
        <p class="card-text">Mood: {this.props.patient.feel}</p>
        <p class="card-text">Language: {this.props.patient.language}</p>
        <p class="card-text">Date Requested: {this.props.patient.visitDate}</p>
        <p class="card-text">Time Requested: {this.props.patient.visitTime}</p>
        <p class="card-text">Address Requested: {this.props.patient.address}</p>
        <p class="card-text">City: {this.props.patient.city}</p>
        <p class="card-text">Phone: {this.props.patient.phone}</p>
        <p class="card-text">Reason for visit: {this.props.patient.reason}</p>  
        <Button variant="primary" onClick={this.onAcceptClick}>Accept Visit</Button>
    </Card.Body>
  </Card>

    </div>
  );
}
}

export default PatientCard;