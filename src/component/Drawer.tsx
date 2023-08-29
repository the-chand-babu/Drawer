import { Box, ClickAwayListener, Drawer } from "@mui/material";
import "./Drawer.scss";
import React, { useState } from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import {
  Avatar,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import EmailInputWithDropdown from "./muiComponent/EmailInput";
import DateRangeCalendar from "./muiComponent/DateRangePicker";
import { CiCalendarDate } from "react-icons/ci";
import { FcApproval } from "react-icons/fc";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { GrFormClose } from "react-icons/gr";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import Topbox from "./topBox/Topbox";
import ComboBox from "./muiComponent/ParentTaskAutofill";
import DependenciesAuto from "./muiComponent/DependenciesAutofill";
import AddTagsAuto from "./muiComponent/AddTagsAutoComplete";
import { AiOutlineClose } from "react-icons/ai";
import { PiFlagLight } from "react-icons/pi";
import { HiFlag } from "react-icons/hi2";

interface inputChange {
  value: string;
}

const emailOptions = [
  "john@example.com",
  "jane@example.com",
  "user123@gmail.com",
  "testuser@yahoo.com",
  "other@example.com", // Add more email options here
];

const Blockingdata = [
  { id: 1, name: "Blocked by", color: "yellow", icons: <FcApproval /> },
  { id: 2, name: "Blocked", color: "red", icons: <FcApproval /> },
];

const checkDependenciesAutoComplete = [
  { id: 1, content: "fff" },
  { id: 2, content: "ffdsf" },
  { id: 3, content: "feff" },
  { id: 4, content: "ffvvf" },
];

interface depenAutoCompeleted {
  id: number;
  content: string;
}

interface CommentInterface {
  id: number;
  comment: string;
  email: string;
}

const pritySelectArr = [
  {
    id: 1,
    color: "#e2a039",
    priority: "P3",
  },
  {
    id: 2,
    color: "#36b8b1",
    priority: "P1",
  },

  {
    id: 3,
    color: "#ad7cc4",
    priority: "P2",
  },
];

// const statusArr = [
//   {
//     id: 1,
//     color: "#36b8b1",
//     content: " On Track",
//   },
//   {
//     id: 2,
//     color: "#d84f67",
//     content: "Off Track",
//   },

//   {
//     id: 3,
//     color: "#f1bd6c",
//     content: "At Risk",
//   },
// ];

let commentId = 1;

const DrawerComponent = () => {
  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState("Schedule kickoff meeting");
  const [inputOver, setinputOver] = useState(false);
  const [showMoreBtn, setShowmoreBtn] = useState(false);

  const [openAssignee, setOpenAssignee] = useState(false);
  const [email, setEmail] = useState("");
  const [DatePopOver, setDatePopOver] = useState(false);
  const [projectOpen, setprojectOpen] = useState(false);
  const [addProject, setAddproject] = useState("");
  const [openDepedencies, setOpenDepedencies] = useState(false);
  const [dependenciesInputValue, setDependenciesInputValue] = useState("");
  const [dependenciesArr, setDependenciesArr] = useState<depenAutoCompeleted[]>(
    []
  );
  const [commentValue, setCommentValue] = useState("");
  const [commentData, setCommentData] = useState<CommentInterface[]>([]);
  const [discriptionValue, setDiscriptionValue] = useState("");
  const [openDiscription, setOpenDiscription] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [openAddTags, setOpenAddTags] = useState(false);
  const [selectedOption, setSelection] = useState("Untitled");
  const [projecrSelectOpen, setProjecrSelectOpen] = useState(false);
  const [priorityInputOpen, setPriorityInputOpen] = useState(false);
  const [prioritySelectOption, setPrioritySelectOption] = useState("");

  const handleClick = (toggel: boolean) => {
    if (toggel == false) {
      setOpen(false);
      return;
    }
    setOpen(true);
  };

  const hanleInputOver = (value: boolean) => {
    setinputOver(value);
  };

  const handleChange = ({ value }: inputChange) => {
    setInputValue(value);
  };

  const handleShowMoreButton = () => {
    setShowmoreBtn(!showMoreBtn);
  };

  const handleDatepopover = () => {
    setDatePopOver(!DatePopOver);
  };

  const handleProjectOpen = () => {
    setprojectOpen(true);
  };

  const handleAddProject = (e: any) => {
    setAddproject(e.target.value);
  };

  const handleAddDependencies = () => {
    setOpenDepedencies(true);
  };

  const handleDepencies = (e: any) => {
    setDependenciesInputValue(e.target.value);

    const newData = checkDependenciesAutoComplete.filter((item) =>
      item.content.includes(e.target.value)
    );

    setDependenciesArr(newData);
  };

  const handleComment = (e: any) => {
    setCommentValue(e.target.value);
  };

  const handleSelectChange = (e: any) => {
    setSelection(e.target.value);
  };

  const handleAddComment = () => {
    setCommentData([
      ...commentData,
      {
        id: commentId++,
        email: "chandbabu@gmail.com",
        comment: commentValue,
      },
    ]);

    setCommentValue("");
  };

  const handleDiscription = (e: any) => {
    setDiscriptionValue(e.target.value);
  };

  const handleOpneDiscription = () => {
    setOpenDiscription(!openDiscription);
  };

  // const handlePriorityChange = (e: any) => {};

  const prioritySelectHandleChange = (e: any) => {
    setPrioritySelectOption(e.target.value);
  };

  const handleDiscriptionOpen = () => {};

  const splitFullName = email.split("@")[0];
  const names = splitFullName.split(".");
  const firstName = names[0] || ""; // Use an empty string as default if undefined
  const lastName = names[1] || ""; // Use an empty string as default if undefined

  const initialLetter =
    firstName.charAt(0) + (lastName ? lastName.charAt(0) : firstName.charAt(1));

  const upperCaseInitial = initialLetter.toUpperCase();

  const isEmailInOptions = emailOptions.includes(email);

  const handleProjectDropOPen = () => {
    setProjecrSelectOpen(!projecrSelectOpen);
  };

  return (
    <Box className="Box">
      <button className="openDrawer" onClick={() => handleClick(true)}>
        open Drawer
      </button>

      <Drawer
        onClose={() => handleClick(false)}
        anchor="right"
        open={open}
        className="CustomDrawer"
        classes={{
          paper: fullScreen ? "fullScreenPaper" : "CustomDrawerPaper",
        }}
      >
        <Topbox
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
          handleClick={handleClick}
        />
        <input
          type="text"
          value={inputValue}
          className="input"
          onMouseOver={() => hanleInputOver(true)}
          onMouseLeave={() => hanleInputOver(false)}
          onChange={(e) => handleChange({ value: e.target.value })}
          style={{ border: inputOver ? "1px solid grey" : "" }}
        />

        <div className="mainContainer">
          <div className="Assignee">
            <p> Assignee</p>
            {openAssignee ? (
              <EmailInputWithDropdown
                email={email}
                setEmail={setEmail}
                emailOptions={emailOptions}
                setOpenAssignee={setOpenAssignee}
              />
            ) : email.length > 0 ? (
              <div className="emailoption">
                <TextField
                  className="inputEmail"
                  sx={{ border: "none", outline: "none" }}
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Avatar
                          sx={{
                            width: "40px",
                            hieght: "10px",
                            borderRadius: "50%",
                            background: "red",
                            fontSize: "15px",
                          }}
                        >
                          {" "}
                          {upperCaseInitial}
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                  defaultValue={email}
                />
                <span onClick={() => setEmail("")}>
                  <GrFormClose />
                </span>
              </div>
            ) : (
              <span
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onClick={() => setOpenAssignee(true)}
                className="NoAssigneeSpan"
              >
                <Avatar className="NoAssigneeAvatar"></Avatar>
                No Assignee
              </span>
            )}
          </div>
          <div
            style={{ marginLeft: "135px", width: "100%", padding: "0" }}
          ></div>

          <div className="maindateContainer">
            <p>Due date</p>

            <div className="boxdateContainer" onClick={handleDatepopover}>
              <Avatar className="DateAvatar">
                <CiCalendarDate />
              </Avatar>

              <p className="boxparagraph">
                {DatePopOver ? "Select Date" : "No due date"}
              </p>
            </div>

            <Popover
              open={DatePopOver}
              onClose={() => setDatePopOver(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              className="datePopover"
            >
              <Typography>
                <DateRangeCalendar />
              </Typography>
            </Popover>
          </div>

          <div className="projectContainer" onClick={handleProjectOpen}>
            <p>Projects</p>

            <div className="projectBox">
              <div className="projectBoxContainer">
                <div></div>
                <p onClick={handleProjectDropOPen}>Workforce</p>
              </div>
              <div className="SelectTagBox">
                <FormControl>
                  <Select
                    open={projecrSelectOpen}
                    onClose={handleProjectDropOPen}
                    onOpen={() => setProjecrSelectOpen(true)}
                    MenuProps={{ classes: { paper: "select-paper-class" } }}
                    sx={{
                      height: "28px",
                      fontSize: "14px",
                      paddingLeft: "0",
                      border: "none",
                      outline: "none",
                      width: "111px",
                      borderColor: "none",
                    }}
                    className="person-name-select"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    input={<OutlinedInput />}
                  >
                    <MenuItem value="Untitled">
                      <em>Untitled</em>
                    </MenuItem>
                    <MenuItem value="Section 1">Section 1</MenuItem>
                    <MenuItem value="Section 2">Section 2</MenuItem>
                  </Select>
                </FormControl>
                <AiOutlineClose
                  className="closeIcon"
                  onClick={() => {
                    setProjecrSelectOpen(false);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="parentTask">
            <p>Parent task</p>
            <div className="AutofillAddPriority">
              {priorityInputOpen ? (
                <ComboBox />
              ) : (
                <p onClick={() => setPriorityInputOpen(true)}>Add Priority</p>
              )}
            </div>
          </div>

          <div className="PriorityContainer">
            <p>Priority</p>

            <div className="prioritySelectDiv">
              <FormControl>
                <Select
                  sx={{
                    height: "28px",
                    fontSize: "12px",
                    width: "101px",
                  }}
                  className="selectPriority"
                  displayEmpty
                  value={prioritySelectOption}
                  onChange={prioritySelectHandleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (!selected) {
                      return <em>Select Priority</em>;
                    }
                    return selected;
                  }}
                  // inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value="">
                    <em>Select Priority</em>
                  </MenuItem>
                  {pritySelectArr.map(({ id, priority, color }) => (
                    <MenuItem key={id} value={priority}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          height: "25px",
                        }}
                      >
                        <HiFlag style={{ color: color }} />
                        <p style={{ color: color }}>{priority}</p>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="dependenciesContainer">
            <p>Dependencies</p>

            {openDepedencies ? (
              <>
                <div className="inputdependenciesBox">
                  <DependenciesAuto />
                </div>
              </>
            ) : (
              <span
                className="dependenciesSpan"
                onClick={handleAddDependencies}
              >
                Add Dependencies task
              </span>
            )}
          </div>

          <div className="TagsContainer">
            <p>Tags</p>

            {openAddTags ? (
              <div>
                <AddTagsAuto />
              </div>
            ) : (
              <span
                onClick={() => {
                  setOpenAddTags(true);
                }}
                className="AddtagsPara"
              >
                Add tags
              </span>
            )}
          </div>
        </div>

        {/* /// disCriptionBox content....... */}

        <div className="discriptionBox">
          <p>Description</p>

          {openDiscription ? (
            "the component"
          ) : (
            <div
              onChange={handleDiscription}
              placeholder="What about this"
              onClick={handleOpneDiscription}
              onBlur={handleOpneDiscription}
              onAuxClick={handleDiscriptionOpen}
            >
              Add Dicription
            </div>
          )}
        </div>

        <div className="subtaskDiv">
          <p>Subtasks</p>
          <button> + Add Sub Task</button>
        </div>

        <div className="commentBox">
          <div className="comment">
            {commentData.map((item) => (
              <div className="comment_outer">
                <div className="comment_inner">
                  <Avatar
                    sx={{ width: "28px", height: "28px" }}
                    className="commentAvatar"
                  >
                    CB
                  </Avatar>
                  <span>{item.email}</span>
                  <span>time</span>
                </div>
                <p>{item.comment}</p>
              </div>
            ))}
          </div>

          <div className="inputComment">
            <div className="textAreaBox">
              <Avatar className="commentAvatar">CB</Avatar>
              <textarea
                value={commentValue}
                onChange={handleComment}
              ></textarea>
            </div>
            <button className="AddCommentButton" onClick={handleAddComment}>
              Add Comment
            </button>
          </div>
        </div>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
