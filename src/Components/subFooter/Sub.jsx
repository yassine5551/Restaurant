import { Link } from "react-scroll"
function Sub() {
    return (
      <>
    <div className="fixed inset-x-0 bottom-0 ">
  <div className=" bg-indigo-800 px-3 py-1 text-white shadow-lg">
    <p className="text-center text-sm font-medium">
    +212 5242-98888 | | Horaires d'ouverture 11h30 - 23h00
      <Link to="reservation" spy={true} smooth={true} offset={-100}  className="cursor-pointer pl-3 inline-block underline"> Reserve un table </Link>
    </p>
  </div>
            </div>
        </>
  )
}

export default Sub