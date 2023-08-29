import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./parentTaskAutofill.scss";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default function ComboBox() {
  return (
    <div>
      <Autocomplete
        className="AutoComplete"
        sx={{ height: "30px !important", width: "235px" }}
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}
