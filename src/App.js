
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    
      <div className='main'>
      <Container className="">
      <Row className="m-auto align-self-center">
        <Col xs={9}>
          <iframe className="map"
        src="https://ishan.users.earthengine.app/view/no2"
        title="Earth Engine App"
        width="100%"
        height={600}
        allowfullscreen

        ></iframe>
        </Col>
        <Col>
          <div className='info'>
          <Card class="shadow p-3 mb-5 bg-white rounded" border='none'>
            <Card.Body>
              <Card.Title>NO2 Pollution</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Please wait 20-30s for map to load</Card.Subtitle>
              <Card.Text>
                Explore this map displaying NO2 pollution before and during the pandemic.
              </Card.Text>
              <br></br>
              <Card.Link href="https://code.earthengine.google.com/a01831b73728c90e81ae816802ad8419">Earth Engine Code</Card.Link>
              <br></br>
              <Card.Text>View the javascript used to render the data inside the interactive split map.
              </Card.Text>


              <Card.Link href="https://ishansandhu.ca/#portfolio">Made by Ishan Sandhu 👨‍💻</Card.Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
      </Row>
      </Container>
      </div>
  );
}

export default App;
