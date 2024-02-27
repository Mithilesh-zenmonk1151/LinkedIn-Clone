import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Signup from "./pages/auth/signup/signup";
import Login from "./pages/auth/login/login";
import Home from "./pages/Home";
import MyNetwork from "./pages/myNetwork/MyNetwork";
function App() {
  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/login" /> : <>{children}</>;
  };
 
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
         <Route
          path="//my-network"
          element={
            <PrivateRoute>
              <MyNetwork/>
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;