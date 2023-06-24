import { Link } from "react-router-dom";
import "../components/style.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export function Calculate() {
  // const handleCLick = () => {
  //   console.log("ijust clicked on the button");

  // };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="form_input">
              <input
                type="text"
                className="form-control custom-text-field"
                placeholder="Course Title"
              />
            </div>
            <div className="form_input">
              <input
                type="text"
                className="form-control custom-text-field"
                placeholder="Grade"
                required
              />
            </div>
            <div className="form_input">
              <input
                type="text"
                className="form-control custom-text-field"
                placeholder="Units"
                required
              />
            </div>
          </div>
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
            + Add Course
          </Button>
        </Link>
        <br />
        <span className="bottomText">Produced by A.Simie</span>
      </header>
    </div>
  );
}
