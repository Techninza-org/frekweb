import  { useState } from "react";
import { Link } from "react-router-dom";
import postboxlogo from "../../assets/logo1.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="navbar-logo">
        <Link href="/">
        <img src={postboxlogo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contact Us</Link>
        </li> */}
       
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? "X" : "☰"}
      </button>
      </div>
     
    </nav>
  );
};

export default Navbar;
