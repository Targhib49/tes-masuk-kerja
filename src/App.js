import './App.css';

// Libraries
// import { BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      {/* <Splash/> */}
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
