import logo from "./logo.svg";
import "./App.css";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import GlassesState from "./GlassesState/GlassesState";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(./img/background.jpg)`,
        backgroundSize: `cover`,
        height: `100%`,
        backgroundPosition: `center`,
      }}
      className="App"
    >
      <RenderWithMap />
      <GlassesState />
    </div>
  );
}

export default App;
