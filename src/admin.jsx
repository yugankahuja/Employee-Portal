import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import dcmLogo from './dcm_logo.png';
import EmployeePhoto from "./admin_photo.jpg";
import FacebookLogo from "./facebook-logo.png";
import LinkedinLogo from "./linkedin-logo.png";


import { Navbar, Nav, NavDropdown, Container, Button, Table } from 'react-bootstrap';

function AdminPage() {
  
  return (
    <div>
          
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

        <Navbar collapseOnSelect expand="lg" bg="body-tertiary" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={dcmLogo} alt="Bootstrap" width="100" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Admin" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/nested" activeClassName="active">
                Attendance
            </Nav.Link>

            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">DCM Infotech Overview</NavDropdown.Item>
              <NavDropdown.Item href="#">Quality Processes</NavDropdown.Item>
              <NavDropdown.Item href="#">Competitive Advantage</NavDropdown.Item>
              <NavDropdown.Item href="#">Customer Testimonials</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/moderation" activeClassName="active">
                Moderation
            </Nav.Link>
            <Nav.Link as={Link} to="/login" activeClassName="active">
                Logout
            </Nav.Link>
          </Nav>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

        
       
        <div className="profile-container">
          <div className="employee-photo">
            <center>{<img src={EmployeePhoto} alt="Employee Photo" />}</center>
          </div>
          <div className="employee-details">
            <h1>Employee Details</h1>
            <table>
              <tr>
                <td>Name:</td>
                <td>Prateeksha Singh</td>
              </tr>
              <tr>
                <td>Date of Birth:</td>
                <td>January 1, 1980</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>123 Main Street, City</td>
              </tr>
              <tr>
                <td>Job Description:</td>
                <td>Software Engineer</td>
              </tr>
              <tr>
                <td>Task:</td>
                <td>Project XYZ</td>
              </tr>
            </table>
          </div>
        </div>

        <footer>
          <div className="social-media">
            <p>
              <strong>Social Media</strong>
            </p>
            <a
              href="https://m.facebook.com/profile.php?id=109117873846274"
              target="_blank"
            >
              <img src={FacebookLogo} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/dcm-infotech-limited/?originalSubdomain=in"
              target="_blank"
            >
              <img src={LinkedinLogo} alt="LinkedIn" />
            </a>
          </div>
          <div className="legal-menu">
            <p>
              <strong>Legal</strong>
            </p>
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="contact-menu">
            <p>
              <strong>Contact Us</strong>
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:sample@example.com">sales@dcminfotech.com</a>
              </li>
              <li>
                Phone: <a href="tel:+1234567890">+91 (124) 412 2800</a>
              </li>
            </ul>
          </div>
        </footer>
      
    </div>
    
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AdminPage />);
} else {
  console.error("Failed to find the root element");
}

export default AdminPage;