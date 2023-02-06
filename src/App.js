
import FullScreen from "./components/FullScreen"
import Header from "./components/Header"
import Showcase from "./components/Showcase";
import Specials from "./components/Specials";
import './App.css';

function App() {
  return (
    <>
      <FullScreen>
        <Header/>
        <Showcase/>
      </FullScreen>

      <Specials/>


    </>
  );
}

export default App;
