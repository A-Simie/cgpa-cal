import "../components/style.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export function Calculate() {
  const handleAddCourse = () => {
    console.log("ijust clicked on the add button");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="form_input">
                  <input
                    type="text"
                    className="form-control custom-text-field"
                    placeholder="Course Title"
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="form_input">
                  <input
                    type="text"
                    className="form-control custom-text-field"
                    placeholder="Grade"
                    required
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="form_input">
                  <input
                    type="text"
                    className="form-control custom-text-field"
                    placeholder="Units"
                    required
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>

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
          onClick={() => {
            handleAddCourse();
          }}
        >
          + Add Course
        </Button>

        <br />
        <span className="bottomText">Produced by A.Simie</span>
      </header>
    </div>
  );
}
