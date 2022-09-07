import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/system/Container";

class SignUp extends Component {
  render() {
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
        <Container>
          <div className="App">
            <div>
              <p
                style={{
                  margin: 0,
                  color: "black",
                  fontSize: 30,
                  fontFamily: "Quicksand",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                Please fill out your personal information:
              </p>
            </div>
            <div>
              <TextField
                id="filled-basic"
                label="First name"
                variant="filled"
              ></TextField>
              <TextField
                id="filled-basic"
                label="Surname"
                variant="filled"
              ></TextField>
            </div>
            <div>
              <TextField
                id="filled-basic"
                label="Username"
                variant="filled"
              ></TextField>
              <TextField
                id="filled-basic"
                label="e-mail address"
                variant="filled"
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
              <TextField
                id="filled-password-input"
                label="Repeat password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              ></TextField>
            </div>

            <div>
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                size="big"
                onClick={() => {
                  alert("Account created successfully!");
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </Container>
      </Box>
    );
  }
}

export default SignUp;
