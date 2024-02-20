import { Route, Routes } from "react-router";
import "./App.css";
import Signup from "./pages/auth/signup/signup";
import Login from "./pages/auth/login/login";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (<div className="App">
     <Routes>
     <Route path="/" element={<Signup/>}/>
     <Route element={<PrivateRoute/>}>
      <Route path="/home" element={<Home/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      </Routes> 
  </div>
)}

export default App;
