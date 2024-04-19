import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
    <footer className=" bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white-900 sm:text-5xl" id="title">
          WE WELCOME YOU TO VISITE OUR RESTAURANT
        </h2>
  
        <p className="mx-auto mt-4 max-w-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores ipsum eos temporibus
          ea nihil.
        </p>
  
        <a
              href="#"
              id='red'
          className="mt-8 inline-block rounded-full bg-white  border border-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red"
        >
          Reserver Un Table
        </a>
      </div>
  
      <div
        className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 "
      >
        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Terms & Conditions
            </a>
          </li>
  
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Privacy Policy
            </a>
          </li>
  
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
              Cookies
            </a>
          </li>
        </ul>
  
        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
              
            </a>
          </li>
  
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
          </li>
  
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
            >
          <FontAwesomeIcon className="icon" icon={faTwitter} />
              
            </a>
          </li>
        </ul>
      </div>
    </div>
      </footer>
    </>
  )
}

export default Footer