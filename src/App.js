import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Ingrediants } from "./components/Ingrediants";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="/ingrediants" element={<Ingrediants />} /> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
