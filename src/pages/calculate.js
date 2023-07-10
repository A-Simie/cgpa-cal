import React, { useState } from "react";
import "../components/style.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export function Calculate() {
  const [fields, setFields] = useState([{ id: 0 }]);

  const handleInputChange = (id, event) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(updatedFields);
    console.log(updatedFields);
  };

  const renderFields = () =>
    fields.map((field) => (
      <React.Fragment key={field.id}>
        <Grid item xs={4}>
          <div className="form_input">
            <input
              type="text"
              className="form-control custom-text-field"
              placeholder="Course Title"
              onChange={(event) => handleInputChange(field.id, event)}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="form_input">
            <input
              name={`grade${field.id}`}
              type="number"
              className="form-control custom-text-field"
              placeholder="Grade"
              onChange={(event) => handleInputChange(field.id, event)}
              required
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="form_input">
            <input
              name={`unit${field.id}`}
              type="number"
              className="form-control custom-text-field"
              placeholder="Units"
              onChange={(event) => handleInputChange(field.id, event)}
              required
            />
          </div>
        </Grid>
      </React.Fragment>
    ));

  const handleAddField = () => {
    const lastId = fields[fields.length - 1].id;
    setFields([...fields, { id: lastId + 1 }]);
  };

  const handleDeleteField = () => {
    const updatedFields = fields.filter(
      (field) => field.id !== fields.length - 1
    );
    setFields(updatedFields);
  };

  const handleCalculate = () => {
    console.log(fields);

    const GradingSystem = {
      A: { min: 70, max: 100, point: 5 },
      B: { min: 60, max: 69, point: 4 },
      C: { min: 50, max: 59, point: 3 },
      D: { min: 45, max: 49, point: 2 },
      E: { min: 40, max: 44, point: 1 },
      F: { min: 0, max: 39, point: 0 },
    };

    // let totalQualityPoints = 0;
    // let totalUnits = 0;

    // fields.forEach((course, index) => {
    //   const grade = course.grade[index];
    //   const unit = course.unit[index];

    //   console.log(grade);
    //   console.log(unit);

    //   // if (grade in GradingSystem) {
    //   //   const gradePoint = GradingSystem[grade].point;
    //   //   totalQualityPoints += gradePoint * unit;
    //   //   totalUnits += unit;
    //   // }
    // });

    // console.log(totalQualityPoints);
    // console.log(totalUnits);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Box sx={{ flexGrow: 1, marginTop: "10%" }}>
            <Grid container spacing={2}>
              {renderFields()}
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
          onClick={handleAddField}
        >
          + Add Course
        </Button>
        {fields.length > 1 ? (
          <React.Fragment>
            <Button
              className="button-app"
              variant="contained"
              style={{
                backgroundColor: "#CD0404",
                fontWeight: "bolder",
                fontSize: "17px",
                borderRadius: "12%",
                marginTop: "6%",
              }}
              onClick={handleDeleteField}
            >
              Delete Course
            </Button>
            <Button
              className="button-app"
              variant="contained"
              style={{
                backgroundColor: "#04CD18",
                fontWeight: "bolder",
                fontSize: "17px",
                borderRadius: "12%",
                marginTop: "6%",
              }}
              onClick={handleCalculate}
              size="large"
            >
              Calculate CGPA
            </Button>
          </React.Fragment>
        ) : (
          <></>
        )}

        <br />
        <span className="bottomText">Produced by A.Simie</span>
      </header>
    </div>
  );
}
