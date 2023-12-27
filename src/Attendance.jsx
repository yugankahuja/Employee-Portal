import "E:/Projects/react-app/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookLogo from "./facebook-logo.png";
import LinkedinLogo from "./linkedin-logo.png";

function Attendance() {
  const exportToCsv = () => {
    let csvContent = "data:text/csv;charset=utf-8,";

    // Get table headers
    const headers = document.querySelectorAll('table thead th');
    const headerArray = Array.from(headers).map(header => header.textContent);
    csvContent += headerArray.join(',') + "\r\n";

    // Get table rows
    const rows = document.querySelectorAll('table tbody tr');
    rows.forEach(row => {
      const cols = row.querySelectorAll('td');
      const colArray = Array.from(cols).map(col => col.textContent);
      csvContent += colArray.join(',') + "\r\n";
    });

    // Create a download link and trigger it
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div>
      <h1>Employee Attendance</h1>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Punch-In Time</th>
            <th>Punch-Out Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-09-01</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
          </tr>
          <tr>
            <td>2023-09-02</td>
            <td>09:15 AM</td>
            <td>04:45 PM</td>
          </tr>
        </tbody>
      </table>
      <div className="button-container">
        <button id="export-btn" onClick={exportToCsv}>Export to Excel</button>
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

export default Attendance;
