import './styles/App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [message, setMessage] = useState([]);
  fetch("http://localhost:5000")
    .then(response => response.json())
    .then(data => {
      setMessage(data)
    })
    .catch(error => console.error(error))
  return (
    <div className="App">
      <h1>{message.message}</h1>
    </div>
  );
}

export default App;
