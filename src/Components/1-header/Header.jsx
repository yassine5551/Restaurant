import  { useState, useEffect } from 'react';
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '/./public/logoNobg.png';



function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header  ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo"><img src={logo} alt="" /></div>

        <ul className="links ">
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
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className='icon menu' icon={faBars} />
          
        </div>
      </header>
    </>
  );
}

export default Header;
