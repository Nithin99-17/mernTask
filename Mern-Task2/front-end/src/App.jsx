import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signin";
import Login from "./login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Login Page (Default Route) */}
          <Route path="/" element={<Login />} />

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* Protected Home Page */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
