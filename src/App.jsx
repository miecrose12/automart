import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CarLists from "./pages/CarLists";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarPost from "./pages/CarPost";
import ProtectedRoute from "./components/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmPassword from "./pages/ConfirmPassword";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<UnProtectedRoute element={<Login />} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/carlists"
        element= {<CarLists /> }
        />
        <Route
          path="/carpost"
          element={<ProtectedRoute element={<CarPost />} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/confirmpassword" element={<ConfirmPassword/>}/>
        <Route path="/profile" element={<Profile/>}/>               
      </Routes>
    </BrowserRouter>
  );
};

export default App;
