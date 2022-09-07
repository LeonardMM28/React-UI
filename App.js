import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ButtonGroup from "@mui/material/ButtonGroup";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/system/Container";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import SignUp from "./SignUp";
import Dash from "./Dash";

function App() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
      backgroundColor="lightgray"
      paddingBottom={3}
      paddingTop={1}
      marginTop={1}
    >
      <Router>
        <Routes>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Dash" element={<Dash />}></Route>
        </Routes>
      </Router>
      <Container>
        <div className="App">
          <header>
            <h2
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Quicksand",
                lineHeight: 1,
              }}
            >
              Welcome to Leonard's React-Based UI
            </h2>
          </header>

          <div>
            <p
              style={{
                margin: 0,
                color: "black",
                fontSize: 30,
                fontFamily: "Quicksand",
              }}
            >
              Please enter your credentials to Log In:
            </p>
          </div>

          <div>
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>

          <div>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            ></TextField>
          </div>
          <div>
            <Button
              onClick={() => {
                alert("ACTION UNAVAILABLE!");
              }}
              size="small"
            >
              I forgot my password.
            </Button>
          </div>
          <div>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "http://localhost:3000/Dash";
                }}
              >
                Login
              </Button>

              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "http://localhost:3000/SignUp";
                }}
              >
                SignUp
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default App;
