import "./App.css";
import ReactPlayer from "react-player";
import { useState } from "react";

function App() {
  // const [vidUrl, setvidUrl] = useState("");
  const [url, setUrl] = useState("");

  // const handleClick = () => {
  //   setUrl(url);
  // };
  return (
    <div className="App">
      <h1>React Video Player</h1>

      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Link"
            onChange={(e) => setUrl(e.target.value)}
          />
          {/* <button onClick={handleClick}>Play</button> */}
        </div>
      </div>

      <ReactPlayer url={url} playing={false} volume={0.5} />
    </div>
  );
}

export default App;
