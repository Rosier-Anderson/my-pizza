import React from "react";
import Home from "./pages/Home";
import "./styles/App.scss";
import Header from "./component/Header";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="_main">
        <Contact/>
      </main>
    </div>
  );
}

export default App;
