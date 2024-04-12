import "./about.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "/./public/about.jpg";
function About() {
  return (
    <>
      <div className="aboutContent">
          
          <div className="contenu">
          <h3 className="h3">Italian Restaurant</h3>
          <h1>WELCOME</h1>
          <p>
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.Sed <br />
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,ac <br />
            facilisis ligula sem id neque.
          </p>

          <a href="/" className="arrowLink">
            OUR STORY
          
          <FontAwesomeIcon className="iconAr" icon={faArrowRight} />
          </a>
        </div>
            
            <img className="imgAbout" src={about} alt="" />
         
        
      </div>
    </>
  );
}

export default About;
