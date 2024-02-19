import { Route, Routes } from "react-router";
import "./App.css";
import Signup from "./pages/auth/signup/signup";
import Login from "./pages/auth/login/login";
import Home from "./pages/Home";
function App() {
  return (<div className="App">

     <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      </Routes>  
       
        
        
  </div>
)}

export default App;
