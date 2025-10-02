import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Navbar />
      <Home username="Maryam" city="Nairobi" />
      <About />
    </div>
  );
}

export default App;
