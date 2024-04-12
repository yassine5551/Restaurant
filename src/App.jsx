import Bar from './Components/0-bar_top/Bar';
import Header from "./Components/1-header/Header"
import Hero from "./Components/2-hero/Hero"
import About from "./Components/3-about/About"
import Menu from "./Components/4-menu/Menu"
import Reservation from "./Components/5-reservation/Reservation"
import Review  from "./Components/6-rev_view/Review"
import Blog from "./Components/7-blog/Blog"
import Footer from "./Components/8-footer/Footer"
import Discorver from './Components/discorver/Discorver';



function App() {

  return (
    <>
      <Bar/>
      <Header />
      <Hero />
      <About />
      <Discorver/>
      <Menu />
      <Reservation />
      <Review />
      <Blog />
      <Footer />
      
    </>
  )
}

export default App
