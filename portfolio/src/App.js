import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <div className='pageTitle'>
        <Card className="titleCard">
          <h1 className='title'>Sayed Abdulmohsen Alhashemi</h1>
          <h2 className='subtitle'>Software Developer</h2>
        </Card>
      </div>
      <div className="row">
        <div className="col-sm-6">
            <Card className='FirstCard'>
              <Card.Img variant="top" src={require('./images/landmass2.png')} />
              <Card.Body className='cardBody'>
                <Card.Title>OpenGL Landmass Generator</Card.Title>
                <Card.Text>
                  OpenGL Landmass Generator written in C++, C, and GLSL
                </Card.Text>
                <Button variant="primary" href="https://github.com/Bridge4/OpenGL-Landmass-Generation">Github</Button>
              </Card.Body>
            </Card>
        </div>
        <div className="col-sm-6">
        <Card className='FirstCard'>
              <Card.Img variant="top" src={require('./images/zombies.jpeg')} />
              <Card.Body className='cardBody'>
                <Card.Title>Unholy Epidemiology</Card.Title>
                <Card.Text>
                  Visualizing the spread of a zombie virus through different biological networks.
                </Card.Text>
                <Button variant="primary" href="https://github.com/Bridge4/Unholy-Epidemiology">Github</Button>
              </Card.Body>
            </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
