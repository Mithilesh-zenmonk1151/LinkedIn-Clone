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
import Navbar from "./component/common/navbar/Navbar";
import Dashboard from "./component/profile/dashboard/Dashboard";
import Message from "./pages/messages/Message.jsx";
import { Box } from "@mui/material";
import Notification from "./pages/notification/Notification.jsx";
function App() {
  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/login" /> : <>{children}</>;
  };

  return (
    <Router>
      <Box>
        <Navbar />
      </Box>
      <Routes>
        {/* <Route
            path="/"
            element={
            <PrivateRoute>
             
            </PrivateRoute>
            }
            /> */}

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-network"
          element={
            <PrivateRoute>
              <MyNetwork />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/message"
          element={
            <PrivateRoute>
              <Message />
            </PrivateRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <PrivateRoute>
              <Notification />
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
