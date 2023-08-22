import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person"; // Import the desired icon
import InputAdornment from "@mui/material/InputAdornment";


import "./EmailInput.css";

const EmailInputWithDropdown = ({ email, setEmail, emailOptions , setOpenAssignee}) => {
  const handleEmailChange = (_, newValue) => {
    setEmail(newValue);
  };


  const handleBlur=()=>{
    setOpenAssignee(false)
  }



  const getRandomColor = () => {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FFFF33",
      "#33FFFF"
      // Add more colors as needed
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };






  const renderOption = (option  ) => {
    console.log(option);
    const fullName = option.key.split("@")[0];
    const firstName = fullName.split(".")[0];
    const lastName = fullName?.split(".")[1];

    const initial =
      firstName[0] + (lastName !== undefined ? " " + lastName[0] : "");

    const newUpperCase = initial.toUpperCase();
    console.log("this is new UpperCase", newUpperCase);
    const newFullName =
      firstName + " " + (lastName !== undefined ? lastName : "");

    const backgroundColor = getRandomColor(); // Generate a random color for each option

    const handleSelect=(option)=>{
      setEmail(option.key)
      setOpenAssignee(false)
    }

    

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
          marginLeft:'20px'
        }}
        className="boxes"
        key={option.id}
        onClick={()=>handleSelect(option)}
      >
        <Avatar
          sx={{
            bgcolor: { backgroundColor },
            color: "black",
            fontSize: "14px"
          }}
        >
          {newUpperCase}
        </Avatar>
        <span style={{ fontSize: "14px" }}>{newFullName}</span>
        <span style={{ fontSize: "14px" }}>{option.key}</span>
      </div>
    );
  };

  return (
    <Autocomplete
      className="autocomplete"
      freeSolo
      sx={{ width: "100%", height: "36px", padding: "0px" }}
      options={emailOptions}
      inputValue={email}
      onInputChange={handleEmailChange}
      renderOption={renderOption} // Use the renderOption function
      onBlur={handleBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Assignee"
          variant="outlined"
          className="inputAssignee"
          autoFocus={true}
          InputProps={{
            ...params.InputProps,
            style: {
              height: "100%",
              padding: "0px",
              outline: "none" // Remove the outline
            },
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                  sx={{
                    border: "1px dashed #6d6e6f",
                    borderRadius: "50%",
                    marginLeft: "10px",
                    color: "grey",
                    hight: "28px",
                    width: "28px",
                    fill: "#6d6e6f"
                  }}
                />{" "}
              </InputAdornment>
            )
          }}
          sx={{
            width: "82%",
            height: "100% !important",
            padding: "0px",
            margin: "0px",
            border: "none",
            outline: "none !important" // Additional outline removal
          }}
        />
      )}
    />
  );
};

export default EmailInputWithDropdown;
