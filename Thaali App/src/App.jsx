import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Thali from "./Thali";
import Checkout from "./Checkout";
import BGImage from "../public/p1.jpg";

function App() {


  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 style={{ color: "White" }}>Thaali App</h1>
      <Thali />
      <Checkout />
    </div>
  );
}

export default App;
