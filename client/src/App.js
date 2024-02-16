import { Route, Routes } from "react-router";
import "./App.css";
import Signup from "./pages/auth/signup/signup";
import Login  from "./pages/auth/login/login"
function App() {
  return (<div className="App">

     <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signup/login" element={<Login/>}/>
      </Routes>  
       
        
        
  </div>
)}

export default App;
