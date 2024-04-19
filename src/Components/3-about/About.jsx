
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "/./public/about.webp";
function About() {
  return (
    <>
      <div
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
        <div className="relative overflow-hidden w-full lg:w-[400px] h-[400px] rounded-3xl mt-6 lg:mt-0">
          <img
            className="w-full h-[400px] object-fill rounded-3xl lg:w-[400px] lg:mt-0"
            src={about}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-white hover:opacity-70">
            <span className="text-xl">
              <a
                href=""
                className="text-red-700 text-2xl hover:text-yellow-100 uppercase underline  "
              >
                Reserver
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
