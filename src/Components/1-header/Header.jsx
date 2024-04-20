import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "/./public/logoNobg.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null); // Ref for the menu box
  // for scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // for canceling the menu box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header  ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul ref={menuRef} className={`links ${isMenuOpen ? "open" : ""} `}>
          <button className="close-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} className="close-box" />
          </button>
          <li>
            <Link
              to="home"
              
              spy={true}
              smooth={true}
              className="cursor-pointer"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="cards"
              activeClass="active"
              offset={-120}
              spy={true}
              smooth={true}
              className="cursor-pointer"
            >
              menu
            </Link>
          </li>
          <li>
            <Link
              to="reservation"
              activeClass="active"
              spy={true}
              offset={-120}
              smooth={true}
              className="cursor-pointer"
            >
              reservation
            </Link>
          </li>
          <li>
            <Link href="">gallery</Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              offset={-120}
              smooth={true}
              className="cursor-pointer"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="reservation"
              activeClass="active"
              spy={true}
              offset={-80}
              smooth={true}
              className="cursor-pointer"
            >
              contact
            </Link>
          </li>
        </ul>
        <div className="icons">
          <FontAwesomeIcon
            className="icon menu"
            icon={faBars}
            onClick={toggleMenu}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
