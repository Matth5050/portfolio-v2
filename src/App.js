import Header from "./components/Header";
import Home from "./components/Home";
import Accordian from "./components/Accordian";
import Turnstile from "./components/Turnstile";

function App() {
  return (
    <div className="App mx-5">
      <Header />
      <Home />
      <div className="hidden md:block">
        <Turnstile />
      </div>
      <div className="md:hidden">
        <Accordian />
      </div>
    </div>
  );
}

export default App;
