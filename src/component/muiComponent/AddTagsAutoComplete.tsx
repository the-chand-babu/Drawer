import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";
import "./AddtagsAutoComplete.scss";

const tagsData = ["IT Admin", "Java", "JavaScript", "Python"];

const AddTagsAuto = () => {
  const [tags, settags] = useState([]);

  const handleChange = (_: any, value: any) => {

    
    settags(value);
  };

  

  const handleRenderOption = (props: any, option: any) => {

    return (
      <div>
        <p
          style={{
            borderRadius: "20px",
            width: "fit-content",
            fontSize: "12px",
            // background: "grey",
            border: "1px solid grey",
            marginLeft: "30px",
          }}
          key={option}
          {...props}
        >
          {option}
        </p>
      </div>
    );
  };

  return (
    <div id="addtagsAuto">
      <Autocomplete
        filterSelectedOptions
        fullWidth
        multiple
        className="AddTagsAutoComplete"
        id="tags-filled"
        options={tagsData}
        value={tags || []}
        freeSolo={true}
        renderInput={(params) => <TextField {...params} />}
        onChange={handleChange}
        renderOption={handleRenderOption}
      />
    </div>
  );
};

export default AddTagsAuto;
