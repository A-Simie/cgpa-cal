import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/complex_logo.png";
import "../components/style.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export function CGPA_NOTE() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="Typography">
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, wordBreak: "break-word" }}
            >
              NOTE!
            </Typography>
            &nbsp; &nbsp;
            <Typography className="variant_p" variant="p">
              You need to know your cgpa scoring system. <br /> The following
              have to apply
              <ul
                style={{ whiteSpace: "pre-line", listStylePosition: "inside" }}
              >
                <li>F (fail) grade must be between 0 and 39</li>
                <li>E grade must be between 40 and 44</li>
                <li>D grade must be between 45 and 49</li>
                <li>C grade must be between 50 and 59</li>
                <li>B grade must be between 60 and 69</li>
                <li>A grade must be between 70 and 100 marks</li>
              </ul>
            </Typography>
          </div>

          <Link to="/pages/calculate">
            <Button
              className="button-app"
              variant="contained"
              style={{
                backgroundColor: "#DDB76F",
                fontWeight: "bolder",
                fontSize: "17px",
                borderRadius: "14%",
                marginTop: "15vh",
              }}
            >
              NEXT
            </Button>
          </Link>
          <br />
          <span className="bottomText">Produced by A.Simie</span>
        </header>
      </div>
      <Link to="/">Go back</Link>
    </div>
  );
}
