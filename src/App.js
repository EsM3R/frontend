import { Row  , Col, Container} from 'reactstrap';
import { Categories } from './categories';
import { NavView } from './navi';
import { Products } from './products';

function App() {
  return (
    <Container>
      <Row>
        <NavView></NavView>
      </Row>
      <Row>
        <Col>
          <Categories></Categories>
        </Col> 
        <Col>
          <Products></Products>
        </Col>   
        <Col>
        </Col>       
      </Row>
    </Container>
  

  );
}

export default App;
