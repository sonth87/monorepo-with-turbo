import React from "react";
import { Button } from "ui";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-500">
        Admin 2 with red button
      </h1>

      <Button
        label="My Button"
        className="bg-red-300 rounded px-4 py-2 mt-4 text-white"
      />
    </div>
  );
}

export default App;
