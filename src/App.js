import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <h1>this is a media player</h1>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
    </div>
  );
}

export default App;
