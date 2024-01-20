import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./AppScreens/Home";
import Users from "./AppScreens/Users";
import Profile from "./AppScreens/Profile";
import "./App.css";
import Write from "./AppScreens/Write";
import Login from "./AuthScreens/login/Login";
import Signup from "./AuthScreens/signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
