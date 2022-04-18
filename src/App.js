import './App.css';
import axios from "axios"
import { Landing, Homepage } from "./pages"
import { useEffect, useState } from "react"

function App() {
  const userName = localStorage.getItem("name")
  const [backgroundPhoto, setBackgroundImage] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&orientation=landscape&topics=6sMVjTLSkeQ`)
      setBackgroundImage(data.urls.regular)
    })()
  }, [])
  return (
    <div className="App h-full" >
      <img src={backgroundPhoto} alt="background" className='background' />
      {userName ? <Homepage /> : <Landing />}
    </div>
  );
}

export default App;
