import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const loginData = useRef({});
  const [message, setMesaage] = useState({ err: false, msg: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const user = { email: "test@xyz.com", password: "password" };

  function handleSignupClick() {
    navigate("/signup");
  }

  function handleLoginClick() {
    console.log(loginData);
    if (
      loginData.current.email === user.email &&
      loginData.current.password === user.password
    ) {
      setMesaage({ err: false, msg: "Login Successfuly!" });
      navigate("/home");
    } else {
      setMesaage({ err: true, msg: "Invalid Credentials!" });
    }
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        <Alert severity="info">
          To Login Email is test@xyz.com & password is password
        </Alert>
        <form className="login-form">
          <div className="headerBox">
            <Typography variant="h4" sx={{ color: "#f0890c" }}>
              TweetX
            </Typography>
            <Button
              variant="contained"
              className="loginButton"
              onClick={handleSignupClick}
              sx={{ paddingX: 3 }}
            >
              Create Account
            </Button>
          </div>
          <div className="loginBox">
            <Typography variant="h4">Login</Typography>
            <TextField
              type="text"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              sx={{ marginTop: 5 }}
              fullWidth
              onChange={(e) => (loginData.current.email = e.target.value)}
            />
            <br />
            <TextField
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              sx={{ marginTop: 5 }}
              fullWidth
              onChange={(e) => (loginData.current.password = e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
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
                onClick={handleLoginClick}
              >
                Login
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

export default Login;
