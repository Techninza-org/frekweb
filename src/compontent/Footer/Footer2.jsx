
import { Link } from "react-router-dom";
import postboxlogo from "../../assets/logo1.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
        <li>
            <Link to="/">
              <img src={postboxlogo} alt="Logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/term">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/refundpolicy">Refund Policy</Link>
           
          </li>
          <li>
            <Link to="/termandservices">Terms of Service</Link>
          </li>
          <li>
            <Link to="/childpolicy">Child Policy Safety</Link>
          </li>
          
        </ul>
      </div>
      <div className="footer-copyright">
        <ul>
          <li>© 2024 All Rights Reserved by</li>
          <li>Frek App LLC</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
