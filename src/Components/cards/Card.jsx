import './card.css';
import card1 from '/./public/card1.jpg'
import card2 from '/./public/card2.jpg'
import card3 from '/./public/card3.jpg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card() {
  return (
      <>
          <div className='cards'>
              <div className="card">
                  <img src={card1} alt="" />
                  <h3>ROMANTIC RESTAURANT</h3>
                  <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                  <a href="">LEARN MORE  <FontAwesomeIcon className="iconAr" icon={faArrowRight} /></a>
              </div>
              <div className="card">
                  <img src={card2} alt="" />
                  <h3>DELICIOUS FOOD</h3>
                  <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                  <a href="">LEARN MORE  <FontAwesomeIcon className="iconAr" icon={faArrowRight} /></a>
              </div>
              <div className="card">
                  <img src={card3} alt="" />
                  <h3>RED WINES YOU LOVE</h3>
                  <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                  <a href="">LEARN MORE  <FontAwesomeIcon className="iconAr" icon={faArrowRight} /></a>
              </div>
          </div>
      </>
  )
}

export default Card