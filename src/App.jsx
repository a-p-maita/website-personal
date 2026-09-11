// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Namecard from "./exports/Namecard.jsx";
import Contacts from "./exports/Contacts.jsx";

function App() {
  return (
    <div className="App">
      <Namecard />
    </div>
  );
}

export default App;
