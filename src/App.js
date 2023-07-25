import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Main-Text">React Weather App</h1>
        <br />
        <Weather defaultCity="Pretoria" />
      </header>
    </div>
  );
}

export default App;
