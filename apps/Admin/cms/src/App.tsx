import React from "react";
import { Button } from "ui";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Admin 1 with blue button
      </h1>

      <Button
        label="My Button"
        className="bg-blue-300 rounded px-4 py-2 mt-4 text-white w-[490px]"
      />
      <Router basename='/app'>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
