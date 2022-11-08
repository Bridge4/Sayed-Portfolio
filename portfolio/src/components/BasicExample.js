import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BasicExample.css';
function BasicExample() {
  return (
    <Card className='FirstCard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../images/landmass2.png')} />
      <Card.Body className='cardBody'>
        <Card.Title>OpenGL Stuff I Guess</Card.Title>
        <Card.Text>
          OpenGL Landmass Generator written in C++, C, and GLSL
        </Card.Text>
        <Button variant="primary">Github Link</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;