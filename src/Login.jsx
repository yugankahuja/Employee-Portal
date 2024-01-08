import React, { useState } from 'react';
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dcmLogo from './dcm_logo.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import facebookLogo from './facebook-logo.png';
import linkedinLogo from './linkedin-logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const YourComponent= ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Static credentials
    const credentials = {
      'admin@gmail.com': { password: 'admin123', role: 'admin' },
      'user@gmail.com': { password: 'user123', role: 'user' }
    };

    const user = credentials[email];

    if (user && user.password === password) {
      onLoginSuccess(user.role);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>        
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={dcmLogo} alt="Bootstrap" width="100" height="100" />
        </a>
        
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Image 3" />
            </div>
            <div className="carousel-item">
              <img src={image4} className="d-block w-100" alt="Image 4" />
            </div>
            <div className="carousel-item">
              <img src={image5} className="d-block w-100" alt="Image 5" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
          
        

        <div className="login-container">
          <h2>Login</h2>
          
                <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
        </div>
        

        <footer>
          <div className="social-media">
            <p>
              <strong>Social Media</strong>
            </p>
            <a href="https://m.facebook.com/profile.php?id=109117873846274" target="_blank">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/dcm-infotech-limited/mycompany/" target="_blank">
              <img src={linkedinLogo} alt="LinkedIn" />
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
                Email: <a href="mailto:sample@example.com">sales@dcminfotech.com</a>
              </li>
              <li>
                Phone: <a href="tel:+1234567890">+91 (124) 412 2800</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default YourComponent;
