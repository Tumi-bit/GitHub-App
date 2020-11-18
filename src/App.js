import React, {Component} from 'react';
import { Container , Card, Col, Row} from 'react-bootstrap'
import Navbar from './components/Navbar'
import './App.css'
import RepoTable from './components/RepoTable'





class App extends Component{
   render() {
       return (
        
        <Container className ="App">
        <Navbar />
        <div className ="header-conatiner">
   <Card bg ="secondary" border ="secondary" className= "text-center" style ={{width: "auto"}} style={{height: "10rem"}}>
        <Row className="justify-content-md-center">
          <Col> Trending Repositories</Col>
        </Row>
        </Card>
        </div>
       <RepoTable />
        </Container>
  );
}
}

export default App;
