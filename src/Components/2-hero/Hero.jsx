import heroImg2 from '/./public/heroImg2.jpg';

function Hero() {
  
  return (
    <>
      <div className="relative flex  justify-center items-center ">
        <img src={heroImg2} alt="" />
        <div className='absolute text-white uppercase text-center'>
        <h1 className='text-xs sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-light md:mb-5 lg:mb-6 xl:mb-7 font-italian '>Welcome to</h1>
        <p className='text-lg sm:text-base md:text-3xl lg:text-7xl xl:text-8xl mb-2 md:mb-5 lg:mb-6 xl:mb-7 '>pato place</p>
        <a className='text-[12px] sm:text-base  p-1 md:p-3  bg-red-700 hover:bg-red-600 font-light ' href="/" >LOOk MENU</a>
        </div>
      </div>
      
    </>
  )
}

export default Hero