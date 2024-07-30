import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import './styles/Navbar.css';

const Navbar = () => {
  const [menuLinks] = useState([
    { title: "Home", link: "/home", id: 1 },
    { title: "Book", link: "/book", id: 2 },
    { title: "Trips", link: "/trips", id: 3 },
    { title: "6E Rewards", link: "/6e-rewards", id: 4 },
    { title: "Check-in", link: "/check-in", id: 5 },
  ]);

  return (
    <div className="header">
      <div data-aos="zoom-in" className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        {menuLinks.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            className="menu-link"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="signup-menu">
        <Link to="/signup">
          <button>
            Sign-Up
          </button>
        </Link>
      </div>
      <div className="mobile-menu">
        <Link to="/signin">
          <button>
            Sign-In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
