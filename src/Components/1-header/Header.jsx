import { useState, useEffect,useRef } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "/./public/logoNobg.png";

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

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);
  
  const toggleMenu = () => {
        
        setIsMenuOpen(!isMenuOpen);
        
  };
  


  return (
    <>
      <header className={`header  ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul ref={menuRef} className={`links ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}><FontAwesomeIcon icon={faTimes} className="close-box" /></button>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">menu</a>
          </li>
          <li>
            <a href="">reservation</a>
          </li>
          <li>
            <a href="">gallery</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">blog</a>
          </li>
          <li>
            <a href="">contact</a>
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
