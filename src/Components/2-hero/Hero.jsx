import heroImg2 from '/./public/heroImg2.jpg';
import "./hero.css";
function Hero() {
  
  return (
    <>
      <div className="container">
        <img src={heroImg2} alt="" />
        <div className='content'>
        <h1 className='welcome'>Welcome to</h1>
        <p className='para'>pato place</p>
        <a className='btn' href="/" >LOOk MENU</a>
        </div>
      </div>
      
    </>
  )
}

export default Hero