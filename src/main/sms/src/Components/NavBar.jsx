import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div className="text-light">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-between">
            <div>
              <Navbar.Brand className="text-light">Database Management System</Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/" className="text-light">Home</Nav.Link>
                  <NavDropdown title="Details" >
                    <NavDropdown.Item href="/department">
                      Departments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/student">
                      Students
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/semester">
                      Semesters
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/subject">
                      Subject lists
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/mark">Scores</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
