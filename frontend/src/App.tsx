import React, { useState, useEffect } from "react";
import Client from "./components/client";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <Client name="Stellarysales"></Client>
    </div>
  );
}

export default App;
