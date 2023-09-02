import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </div>
    
  )
}

export default App;
