import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/src/functions/hello.js")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend React</h1>
      <p>{data ? data.message : "Cargando backend..."}</p>
      <p>{data && data.time}</p>
    </div>
  );
}

export default App;