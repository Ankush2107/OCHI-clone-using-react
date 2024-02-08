import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App;