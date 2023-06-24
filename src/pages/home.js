import { Link } from "react-router-dom";
import logo from "../components/complex_logo.png";
import CgpaCal from "../components/CGPA_CALC.png";
import "../components/style.css";
import Button from "@mui/material/Button";

export function Home() {
  // const handleCLick = () => {
  //   console.log("ijust clicked on the button");

  // };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>{" "}
        <div className="CGPACAL">
          <img src={CgpaCal} alt="CGPACAL" />
        </div>
        <Link to="/pages/CGPA_NOTE">
          <Button
            className="button-app"
            variant="contained"
            style={{
              backgroundColor: "#DDB76F",
              fontWeight: "bolder",
              fontSize: "17px",
              borderRadius: "14%",
              marginTop: "15%",
            }}
          >
            NEXT
          </Button>
        </Link>
        <br />
        <span className="bottomText">Produced by A.Simie</span>
      </header>
    </div>
  );
}
