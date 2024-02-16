import { useState } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import "./App.css";
import "./index.css";

const App= ()=> {
  return (
    <>
      <div className="w-full h-screen bg-slate-800 relative">
        <Background/>
        <Foreground/>
      </div>
    </>
  );
}

export default App;
