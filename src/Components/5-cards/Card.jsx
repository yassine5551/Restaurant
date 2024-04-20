import card1 from "/./public/card1.webp";
import card2 from "/./public/card2.webp";
import card3 from "/./public/card3.webp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element } from 'react-scroll';
function Card() {
  return (
    <>
      <Element name="cards" className="mt-[100px] flex flex-col lg:flex-row justify-evenly items-center gap-8">
        <div className="flex-col text-center gap-5 ">
          <img
            src={card1}
            alt="img1"
            className="w-[300px] lg:w-[400px] h-[250px] rounded-[15px] cursor-pointer "
          />
          <h3 className="mt-[20px] tracking-[5px] font-medium leading-[10px] my-[5px] text-red-600">
            ROMANTIC RESTAURANT
          </h3>
          <p className="mb-1">
            Phasellus lorem enim, luctus ut velit eget, <br /> con-vallis
            egestas eros.
          </p>
          <a href="" className="text-black w-fit hover:text-red-600">
            LEARN MORE{" "}
            <FontAwesomeIcon className="iconAr" icon={faArrowRight} />
          </a>
        </div>
        <div className="flex-col text-center gap-5">
          <img
            src={card2}
            alt="img2"
            className="w-[300px] lg:w-[400px] h-[250px] rounded-[15px] cursor-pointer "
          />
          <h3 className="mt-[20px] tracking-[5px] font-medium leading-[10px] my-[5px] text-red-600">
            DELICIOUS FOOD
          </h3>
          <p className="mb-1">
            Phasellus lorem enim, luctus ut velit eget, <br /> con-vallis
            egestas eros.
          </p>
          <a href="" className="text-black w-fit hover:text-red-600">
            LEARN MORE{" "}
            <FontAwesomeIcon className="iconAr" icon={faArrowRight} />
          </a>
        </div>
        <div className="flex-col text-center gap-5">
          <img
            src={card3}
            alt="img3"
            className="w-[300px] lg:w-[400px] h-[250px] rounded-[15px] cursor-pointer "
          />
          <h3 className="mt-[20px] tracking-[5px] font-medium leading-[10px] my-[5px] text-red-600">
            RED WINES YOU LOVE
          </h3>
          <p className="mb-1">
            Phasellus lorem enim, luctus ut velit eget, <br /> con-vallis
            egestas eros.
          </p>
          <a href="" className="text-black w-fit hover:text-red-600">
            LEARN MORE
            <FontAwesomeIcon className="iconAr" icon={faArrowRight} />
          </a>
        </div>
      </Element>
    </>
  );
}

export default Card;
