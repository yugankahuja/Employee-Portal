
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import dcmLogo from './dcm_logo.png'; // Ensure this image is in your project directory

function AdminModerationPanel() {
  return (
    <div>
      <h1><h2>Administrator Moderation Panel</h2></h1>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="body-tertiary" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <img src={dcmLogo} alt="Bootstrap" width="100" height="100" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/admin">Home</Nav.Link>
                <Nav.Item>
                  <Nav>
                    <NavDropdown
                      role="button"
                      
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      title="Users"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#">
                        Add
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Remove
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Edit
                      </NavDropdown.Item>
                  
                    </NavDropdown>
                  </Nav>
                </Nav.Item>
                 
                <Nav.Item>
                  <Nav className="nav-item">
                    <NavDropdown
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      title="Database"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#">
                        Refresh
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Save
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        Edit
                      </NavDropdown.Item>
                  
                    </NavDropdown>
                  </Nav>
                </Nav.Item>
                
                <Nav.Link href="#">Posts</Nav.Link>
                <Nav.Link href="#">Comments</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
              </Nav>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <Button variant="outline-success" type="submit">Search</Button>
              </form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      
      <table>
        <thead>
                <tr>
                    <th>Log Squence</th>
                    <th>Time</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>09:00 AM</td>
                    <td>security check</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>09:15 AM</td>
                    <td>login</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>

      <div className="button-container">
        <Button id="export-btn">Export Log File</Button>
      </div>
      
      <footer>
        <p>&copy; 2023 Admin Moderation Panel</p>
      </footer>
    </div>
  );
}

export default AdminModerationPanel;