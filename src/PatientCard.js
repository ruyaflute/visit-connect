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
    <Card border="primary" style={{ height: '55rem' }}>
        <Card.Header className="text-dark" ><strong>{this.props.patient.email}</strong></Card.Header>
        <Card.Body className="text-dark">
        <p class="card-text">Mood: <strong>{this.props.patient.feel}</strong></p>
        <p class="card-text">Language: <strong>{this.props.patient.language}</strong></p>
        <p class="card-text">Date Requested: <strong>{this.props.patient.visitDate}</strong></p>
        <p class="card-text">Time Requested: <strong>{this.props.patient.visitTime}</strong></p>
        <p class="card-text">Address Requested: <strong>{this.props.patient.address}</strong></p>
        <p class="card-text">City: <strong>{this.props.patient.city}</strong></p>
        <p class="card-text">Phone: <strong>{this.props.patient.phone}</strong></p>
        <p class="card-text">Reason for visit: <strong>{this.props.patient.reason}</strong></p>  
    </Card.Body>
    <Button variant="primary" onClick={this.onAcceptClick}>Accept Visit</Button>
  </Card>

    </div>
  );
}
}

export default PatientCard;