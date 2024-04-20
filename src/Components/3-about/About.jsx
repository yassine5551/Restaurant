import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "/./public/about.webp";
import about2 from "/./public/about2.webp";
import { Element, Link } from "react-scroll";
function About() {
  return (
    <>
      <Element
        name="about"
        className="flex flex-col-reverse lg:flex-row mt-[75px] xl:justify-evenly gap-6
      "
      >
        <div className="flex justify-center items-center flex-col gap-3">
          <h3
            className=" font-bold uppercase tracking-wide 
             font-italian text-3xl leading-tight
             
             text-red-700 "
          >
            Italian Restaurant
          </h3>
          <h1 className="text-bold text-3xl uppercase font-medium">About us</h1>
          <p className="text-center font-extralight mb-[20px]">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.Sed{" "}
            <br />
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,ac{" "}
            <br />
            facilisis ligula sem neque.
          </p>

          <a href="/" className="font-medium text-red-900 hover:text-red-600">
            OUR STORY
            <FontAwesomeIcon className="ml-[5px]" icon={faArrowRight} />
          </a>
        </div>
        <a className=" cursor-pointer group relative block">
        <div className="relative overflow-hidden w-full lg:w-[400px] h-[400px] rounded-3xl mt-6 lg:mt-0">
          {/* <img
            className="w-full h-[400px] object-fill rounded-3xl lg:w-[400px] lg:mt-0 object-cover opacity-100 group-hover:opacity-0 "
            src={about}
            alt=""
          /> */}
          <img
              src={about}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={about2}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />

          
          </div>
          </a>
        
      </Element>
    </>
  );
}

export default About;
