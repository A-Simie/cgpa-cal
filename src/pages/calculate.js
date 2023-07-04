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
      <>
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
              type="text"
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
              type="text"
              className="form-control custom-text-field"
              placeholder="Units"
              onChange={(event) => handleInputChange(field.id, event)}
              required
            />
          </div>
        </Grid>
      </>
    ));

  const handleAddField = () => {
    const lastId = fields[fields.length - 1].id;
    setFields([...fields, { id: lastId + 1 }]);
  };

  const handleDeleteField = (idToDelete) => {
    const updatedFields = fields.filter((field) => field.id !== idToDelete);
    setFields(updatedFields);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
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
          onClick={handleDeleteField}
        >
          - Delete Course
        </Button>

        <br />
        <span className="bottomText">Produced by A.Simie</span>
      </header>
    </div>
  );
}
