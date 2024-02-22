import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/auth/signup/signup";
import Login from "./pages/auth/login/login";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
function App() {
  const [auth, setAuth] = useState("");
  useEffect(() => {
    const isAuth = localStorage.getItem("token");
    if (isAuth) {
      setAuth(isAuth);
    }
  }, []);
  return (
    <Routes>
      {auth ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
        </>
      )}
    </Routes>
  );
}

export default App;
