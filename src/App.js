import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Pretoria" />
      </div>
      <p>
        This was coded by Kagiso Makgaba, open-sourced on{" "}
        <a href="https://github.com/KagisoMakgaba1/react-weather-app">
          {" "}
          Github{" "}
        </a>
        and hosted on{" "}
        <a href="https://frolicking-mandazi-697d40.netlify.app">Netlify</a>
      </p>
      
    </div>
  );
}

export default App;
