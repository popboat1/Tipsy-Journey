import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Cocktails from "./component/Cocktails";
import About from "./component/About";
import Art from "./component/Art";
import Menu from "./component/Menu";
import Contact from "./component/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (

    <main>
        <Navbar />
        <HeroSection />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact />
    </main>
  )
}

export default App