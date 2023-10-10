import React from "react";
import { NavLink } from "react-router-dom";
import "../header/header.scss";




const Navbar = () => {
  
  const NavLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
  ];

  
  return (
    <div className="navbar">
      {NavLinks.map((link) => {
        return (
          <NavLink
            key={link.title}
            to={link.href}
            className={({ isActive }) =>
              [isActive ? "active" : "plain"].join(" ")
            }
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
