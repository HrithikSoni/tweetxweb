import { Container, Typography, Button, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import "./Signup.css";

function Signup() {
  const signupData = useRef({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const naviagte = useNavigate();
  const [message, setMesaage] = useState({ err: false, msg: "" });

  function handleLoginClick() {
    naviagte("/");
  }

  function handleSinupClick() {
    if (signupData.current.password !== confirmPassword) {
      alert("Your passwords are not same!");
    } else {
      setMesaage({ err: false, msg: "User Registered Succesfuly!" });
      naviagte("/");
    }
  }

  return (
    <div className="container">
      <Container className="form-container">
        {message?.msg && (
          <Alert
            severity={message?.err ? "error" : "success"}
            onClose={() => setMesaage("")}
          >
            {message.msg}
          </Alert>
        )}
        <form className="login-form">
          <div className="headerBox">
            <Typography variant="h4" sx={{ color: "#f0890c" }}>
              TweetX
            </Typography>
            <Button
              variant="contained"
              className="loginButton"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </div>
          <div className="loginBox">
            <Typography variant="h4">Create Account</Typography>
            <TextField
              type="text"
              id="username"
              name="username"
              label="Name"
              sx={{ marginTop: 3 }}
              fullWidth
              onChange={(e) => (signupData.current.name = e.target.value)}
            />
            <br />
            <TextField
              type="text"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              sx={{ marginTop: 3 }}
              fullWidth
              onChange={(e) => (signupData.current.email = e.target.value)}
            />
            <br />
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              sx={{ marginTop: 3 }}
              fullWidth
              onChange={(e) => (signupData.current.password = e.target.value)}
            />
            <br />
            <TextField
              type="text"
              id="username"
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              sx={{ marginTop: 3 }}
              fullWidth
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Typography color="primary">Forgot Password?</Typography>
              <Button
                type="submit"
                variant="contained"
                className="signupButton"
                onClick={handleSinupClick}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </Container>

      <Container className="image-container">
        <img
          src="https://cdn.pixabay.com/photo/2022/03/24/16/30/gardener-7089417_1280.png"
          alt="SideImage"
          className="image"
        />
      </Container>
    </div>
  );
}

export default Signup;
