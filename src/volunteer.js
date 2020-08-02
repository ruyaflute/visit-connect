import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PatientCard from './PatientCard'

class Volunteer extends React.Component {
  constructor() {
    super();
    this.state = {
      patients: [
        {
          "email": "ruya@gmail.com", "feel": "8", "language":"english", 
        "visitDate": "8/2/2020", "visitTime": "08:00", "address": "123 Main Ave",
        "city": "manhattan", "zip":"10029", "phone": "123-456-7890", 
        "reason": "need to talk"
      }, {
          "email": "rachel@gmail.com", "feel": "6", "language":"english", 
        "visitDate": "8/5/2020", "visitTime": "15:00", "address": "56 Main Ave",
        "city": "bronx", "zip":"10451", "phone": "999-888-8888", 
        "reason": "need assistance with medicaid"
        }, {
          "email": "whoever@gmail.com", "feel": "3", "language":"chinese", 
        "visitDate": "8/10/2020", "visitTime": "15:00", "address": "5 Allen St",
        "city": "manhattan", "zip":"10014", "phone": "999-999-9999", 
        "reason": "need assistance with doctor appointment"
        }
      ]
    }
  }

  onAcceptClick() {

  };

  render() {
    let patientCards = this.state.patients.map(patient => {
      return (
        <Col sm="6">
          <PatientCard patient={patient} />
        </Col>
      )
    })
  return (
    <div className="volunteer">
            <h3 className="header">
                Patient List
            </h3>
      <Container fluid>
        <Row>
          {patientCards}
        </Row>
      </Container>
    </div>
  );
}
}

export default Volunteer;