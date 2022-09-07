import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/system/Container";

class Dash extends Component {
  state = {};
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
                Welcome to your personal Dashboard.
              </p>
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Quicksand",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                Here would be your personal information.
              </p>
            </div>
            <div>
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                size="big"
                onClick={() => {
                  alert("You logged out successfully!");
                }}
              >
                Log Out
              </Button>
            </div>
          </div>
        </Container>
      </Box>
    );
  }
}

export default Dash;
