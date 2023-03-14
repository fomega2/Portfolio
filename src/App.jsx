import Presentation from "./components/Presentation"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SideBars from "./components/SideBars"

function App() {
  return (
      <>
        <Header></Header>
        <SideBars></SideBars>
        <Presentation></Presentation>
        <About></About>
        <Experience></Experience>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </>
  )
}

export default App
