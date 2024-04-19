import "./about.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about2 from "/./public/about2.jpg";
function About() {
  return (
    <>
      <div className="flex relative mt-[150px] xl:justify-evenly">
          
          <div className="flex justify-center items-center flex-col">
          <h3
            className="absolute top-16 font-bold uppercase tracking-wide 
             font-italian text-3xl leading-tight
             text-red-700 ">
            Italian Restaurant
          </h3>
          <h1
            className="text-bold text-3xl uppercase font-medium">
            About us
          </h1>
          <p className="text-center font-extralight mb-[20px]">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.Sed <br />
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,ac <br />
            facilisis ligula sem  neque.
          </p>

          <a href="/" className="font-medium text-red-900 hover:text-red-600">
            OUR STORY
          <FontAwesomeIcon className="ml-[5px]" icon={faArrowRight} />
          </a>
        </div>
            
            <img className="w-[400px] h-[400px] object-fill rounded-3xl" src={about2} alt="" />
         
        
      </div>
    </>
  );
}

export default About;
