
import FullScreen from "./components/FullScreen"
import Header from "./components/Header"
import Showcase from "./components/Showcase";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <FullScreen>
        <Header/>
        <Showcase/>
      </FullScreen>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
