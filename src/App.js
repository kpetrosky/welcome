import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/pages/About";
import GetToKnow from "./components/pages/GetToKnow";

import Expectations from "./components/pages/Expectations";



// import ClassroomEvents from "./components/pages/ClassroomEvents";

// Define your classroomEvents data here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
     
          <Route path="/About" element={<About />} />
          <Route path="/Expectations" element={<Expectations />} />
          <Route path="/GetToKnow" element={<GetToKnow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
