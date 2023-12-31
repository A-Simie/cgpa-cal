import React, { useState } from "react";
import "../components/style.css";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";

export function Calculate() {
  // check deployment now

  const [fields, setFields] = useState([{ id: 0 }]);
  const [cgpaScore, setCgpaScore] = useState("");

  const handleInputChange = (id, event) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(updatedFields);
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
              placeholder="Score *"
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
              placeholder="Units *"
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

    const num = 0;
    setCgpaScore(num.toFixed(2));
  };

  const handleDeleteField = () => {
    const updatedFields = fields.filter(
      (field) => field.id !== fields.length - 1
    );
    setFields(updatedFields);

    const num = 0;
    setCgpaScore(num.toFixed(2));
  };

  // Grading system
  const GradingSystem = {
    A: { min: 70, max: 100, point: 5 },
    B: { min: 60, max: 69, point: 4 },
    C: { min: 50, max: 59, point: 3 },
    D: { min: 45, max: 49, point: 2 },
    E: { min: 40, max: 44, point: 1 },
    F: { min: 0, max: 39, point: 0 },
  };

  const Multiply = (points, totalUnit) => {
    const resultArray = fields.map((item, index) => {
      // Extract the unit value from the first array
      const unitKey = `unit${index}`;
      const unitValue = parseInt(item[unitKey], 10);
      // Find the corresponding object in the second array
      const pointArray = points[index];

      // Multiply the unit value with the point from the second array
      const multipliedValue = unitValue * pointArray.point;

      // Create a new object with the multiplied value
      return {
        id: item.id,
        result: multipliedValue,
      };
    });
    const totalResult = resultArray.reduce(
      (accumulator, item) => accumulator + item.result,
      0
    );
    const CGPA = totalResult / totalUnit;
    setCgpaScore(CGPA.toFixed(2));
  };

  const handleCalculate = () => {
    // fields: is the list of score inputed in the text-field

    // Fields validation flag
    let isValid = true;

    const points = [];
    const unitList = [];

    for (const entry of fields) {
      // dynamically constructing the property key
      // so that each grade inserted can be individually parsed
      // into the Grading system deifned
      const gradeKey = `grade${entry.id}`;

      const unitKey = `unit${entry.id}`;

      if (unitKey in entry) {
        const unitEach = parseFloat(entry[unitKey]);
        unitList.push(unitEach);
        if (isNaN(unitEach)) {
          isValid = false;
        }
        if (unitEach < 0) {
          isValid = false;
        }
      }

      if (gradeKey in entry) {
        const score = parseFloat(entry[gradeKey]);
        if (isNaN(score)) {
          isValid = false;
        }
        if (score > 100 || score < 0) {
          // If score is greater than 100, mark it as invalid and set isValid to false
          isValid = false;
          break;
        }
        let gradeFound = false;

        for (const grade in GradingSystem) {
          if (
            score >= GradingSystem[grade].min &&
            score <= GradingSystem[grade].max
          ) {
            // with individual score gotten, i looped through the grading system so
            // as to get the individual grade for the score then i pushed it into a
            // array
            points.push({ score, grade, point: GradingSystem[grade].point });
            gradeFound = true;
            break; // Exit the inner loop when a matching grade is found
          }
        }

        if (!gradeFound) {
          points.push({ score, grade: "Invalid", point: "Invalid" });
        }
      }
    }

    if (isValid) {
      const totalUnit = unitList.reduce((a, b) => {
        return a + b;
      });

      Multiply(points, totalUnit);
    } else {
      const num = 0;
      setCgpaScore(num.toFixed(2));

      Swal.fire({
        title: "Invalid Input",
        icon: "error",
        text: "Please fill in all required fields and ensure the score or Unit is between 0 and 100",
      });
    }
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
        <h1 className="yourCGPA">YOUR CGPA</h1>
        <h1 className="value">{cgpaScore}</h1>
        <br />
        <span className="bottomText">Produced by A.Simie</span>
      </header>
    </div>
  );
}
