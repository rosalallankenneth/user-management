import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Appbar from "./components/Appbar";

function App() {
  return (
    <div className="bg-theme-primary w-screen h-screen font-themeFont">
      <Appbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
