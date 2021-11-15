import logo from './logo.svg';
import './App.css';
import image from './images/img1.jpeg'

import './style.css'
function App() {
  return (
    <div className="App">

<div style={{ border: "solid 1px black", maxWidth: "100vw" }}>

    <h1 className="title red">Yassine</h1>

    <img src="/images/img2.jpeg" />
    <br />

    <img src={image} />
  </div>
  <br />
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
    </div>
    
  );
}

export default App;
