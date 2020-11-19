import React, { Component } from 'react';
import { Container, Jumbotron, Col, Row } from 'react-bootstrap'
import './App.css'
import RepoTable from './components/RepoTable'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";



class App extends Component {
  render() {
    return (
      <Container className="App">
       <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">GitHub</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#foo">Explore</Nav.Link>
            <NavDropdown title="Dropdown">
              <NavDropdown.Item href="#action/1">Favorited</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="search" className="mr-sm-2" />
            <Button variant="outline-primary">search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        <div className="header-conatiner">
          <Jumbotron bg="secondary" border="secondary" className="text-center">
            <Row className="justify-content-md-center">
              <Col>Trending Repositories</Col>
            </Row>
          </Jumbotron>
          <RepoTable />
        </div>
      </Container>
    );
  }
}

export default App;
