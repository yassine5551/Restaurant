
import Header from "./Components/1-header/Header"
import Hero from "./Components/2-hero/Hero"
import About from "./Components/3-about/About"
import Reservation from "./Components/6-reservation/Reservation"
import Footer from "./Components/7-footer/Footer"
import Card from './Components/5-cards/Card';
import Discorver from './Components/4-discorver/Discorver';
import './index.css'
import Sub from "./Components/subFooter/Sub";




function App() {

  return (
    <>
      
      <Header />
      <Hero />
      <About />
      <Discorver /> 
     <Card />
      <Reservation />
      <Footer /> 
      <Sub />
    </>
  )
}

export default App
