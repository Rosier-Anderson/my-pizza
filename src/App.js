import React from "react";
import Home from "./pages/Home";
import "./styles/App.scss";
import Header from "./component/Header";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <main id="_main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>} />
          <Route  path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
