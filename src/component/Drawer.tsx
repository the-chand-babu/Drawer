import { Box, Drawer } from "@mui/material";
import "./Drawer.css";
import React, { useState } from "react";
import { AiOutlineLike, AiOutlineClose, AiFillLike } from "react-icons/ai";
import { MdOutlineAttachFile } from "react-icons/md";
import { TbSubtask } from "react-icons/tb";
import { BiLink } from "react-icons/bi";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { IoIosArrowDropdown, IoIosMore } from "react-icons/io";
import { MdOutlineOpenInFull } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import EmailInputWithDropdown from "./muiComponent/EmailInput";
import DateRangeCalendar from "./muiComponent/DateRangePicker";
import { CiCalendarDate } from "react-icons/ci";
import MenuFunc from "./muiComponent/menuItem";
import AddMoreMenu from "./muiComponent/AddmoreMenu";
import { GrFormAdd } from "react-icons/gr";
import { BsTag } from "react-icons/bs";
import { RiChatFollowUpFill } from "react-icons/ri";
import { TbArrowMergeLeft } from "react-icons/tb";
import { HiOutlineBookmark } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { SiConvertio } from "react-icons/si";
import { HiMiniCheck } from "react-icons/hi2";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person"; // Import the desired icon
import InputAdornment from "@mui/material/InputAdornment";
import { GrFormClose } from "react-icons/gr";
import { Popover } from "@mui/material";
import { Typography } from "@mui/material";
import { GiSandsOfTime } from "react-icons/gi";
import { MdBlock } from "react-icons/md";

interface inputChange {
  value: string;
}

const AttachMenuData = [
  { id: 1, name: "Attach a File" },
  { id: 2, name: "Your Computer" },
  { id: 3, name: "Dropbox" },
  { id: 4, name: "Google Drive" },
  { id: 5, name: "Box" },
  { id: 6, name: "OneDrive/SharePoint" },
];

const AddmoreMenuData = [
  {
    name: "Add to another Project",
    icons: GrFormAdd,
    command: {
      a: "Tab",
      b: "P",
    },
    id: 1,
  },

  {
    name: "Add Tags",
    icons: BsTag,
    command: {
      a: "Tab",
      b: "T",
    },
    id: 2,
  },

  {
    name: "Create follow-up task",
    icons: "RiChatFollowUpFill",
    command: {
      a: "shift",
      b: "tab",
      c: "F",
    },
    id: 3,
  },

  {
    name: "Merge Duplicate task",
    icons: TbArrowMergeLeft,
    command: {
      a: "shift",
      b: "tab",
      c: "D",
    },
    id: 4,
  },

  {
    name: "Mark as Milestone",
    icons: HiOutlineBookmark,
    command: {
      a: "",
      b: "",
      c: "",
    },
    id: 5,
  },

  {
    name: "mark as Approval",
    command: {
      a: "",
      b: "",
      c: "",
    },
    icons: FcApproval,
    id: 6,
  },

  {
    name: "Convert to",
    command: {
      a: "",
      b: "",
      c: "",
    },
    icons: SiConvertio,
    id: 7,
  },

  {
    name: "Convert task to template",
    command: {
      a: "",
      b: "",
      c: "",
    },
    if: 8,
  },

  {
    name: "Duplicate Task",
    command: {
      a: "",
      b: "",
      c: "",
    },
    if: 9,
  },

  {
    name: "Print",
    command: {
      a: "",
      b: "",
      c: "",
    },
    id: 10,
  },

  {
    name: "Delete",
    command: {
      a: "",
      b: "",
      c: "",
    },
    id: 11,
  },
];

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

const priorityArr = [
  {
    id: 1,
    color: "#e2a039",
    priority: "Medium",
  },
  {
    id: 2,
    color: "#36b8b1",
    priority: "Low",
  },

  {
    id: 3,
    color: "#ad7cc4",
    priority: "High",
  },
];


const statusArr = [
  {
    id: 1,
    color: "#36b8b1",
    content: " On Track",
  },
  {
    id: 2,
    color: "#d84f67",
    content: "Off Track",
  },

  {
    id: 3,
    color: "#f1bd6c",
    content: "At Risk",
  },
];




let commentId = 1;

const DrawerComponent = () => {
  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState("Schedule kickoff meeting");
  const [inputOver, setinputOver] = useState(false);
  const [showMoreBtn, setShowmoreBtn] = useState(false);
  const [like, setLike] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAddmore, setOpenAddmore] = useState(false);
  const [markComplete, setmarkComplete] = useState(false);
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

  const handleClick = (toggel: boolean) => {
    console.log(toggel);
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

  const handleLike = () => {
    setLike(!like);
  };

  const handleAddmore = () => {
    setOpenAddmore(!openAddmore);
  };

  const handleCompleted = () => {
    setmarkComplete(!markComplete);
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

  console.log("this is new anchor", commentData);

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

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };



  const handlePriorityChange=(e:any)=>{
      console.log("this is " , e.target.value)
  }

  const splitFullName = email.split("@")[0];
  const names = splitFullName.split(".");
  const firstName = names[0] || ""; // Use an empty string as default if undefined
  const lastName = names[1] || ""; // Use an empty string as default if undefined

  const initialLetter =
    firstName.charAt(0) + (lastName ? lastName.charAt(0) : firstName.charAt(1));

  const upperCaseInitial = initialLetter.toUpperCase();

  const isEmailInOptions = emailOptions.includes(email);

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
        <div
          className="topbox"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <div className="leftContainer">
            {markComplete ? (
              <button
                style={{ cursor: "pointer" }}
                className="mark-Container"
                onClick={handleCompleted}
              >
                {<HiMiniCheck />}
                completed
              </button>
            ) : (
              <button
                style={{ cursor: "pointer" }}
                className="mark-Container"
                onClick={handleCompleted}
              >
                {<HiMiniCheck />}
                Mark complete
              </button>
            )}
          </div>
          <div className="rightContainer">
            <span onClick={handleLike} className="likeSpan">
              {like ? (
                <>
                  <span style={{ fontSize: "10px", fontWeight: "400" }}>1</span>
                  <AiFillLike style={{ color: "#3f6ac4" }} />
                </>
              ) : (
                <AiOutlineLike />
              )}
            </span>
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              id="demo-positioned-button"
              aria-controls={menuOpen ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
            >
              <>
                <MdOutlineAttachFile style={{ cursor: "pointer" }} />
                <MenuFunc
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  data={AttachMenuData}
                  id="attachMeu"
                />
              </>
            </span>
            <span>
              <TbSubtask style={{ cursor: "pointer" }} />
            </span>
            <span>
              <BiLink style={{ cursor: "pointer" }} />
            </span>
            <span onClick={handleFullScreen}>
              <MdOutlineOpenInFull style={{ cursor: "pointer" }} />
            </span>
            <span onClick={handleAddmore}>
              <IoIosMore style={{ cursor: "pointer" }} />
              <AddMoreMenu
                open={openAddmore}
                setOpen={setOpenAddmore}
                data={AddmoreMenuData}
              />
            </span>
            <span>
              <AiOutlineClose
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(false)}
              />
            </span>
          </div>
        </div>
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
                  // other TextField props...

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
                <Avatar
                  sx={{
                    background: "white",
                    color: "grey",
                    border: "1px dashed grey",
                    height: "28px",
                    width: "28px",
                  }}
                ></Avatar>
                No Assignee
              </span>
            )}
          </div>
          <div style={{ marginLeft: "135px", width: "100%", padding: "0" }}>
            {!isEmailInOptions && openAssignee && email.length > 0 && (
              <span className="inviteLink">
                + invite this '{email}' via a email
              </span>
            )}
          </div>

          <div className="maindateContainer">
            <p>Due date</p>
            {/*  */}

            <div className="boxdateContainer" onClick={handleDatepopover}>
              <Avatar
                sx={{
                  border: "1px dashed grey",
                  background: "white",
                  color: "grey",
                  width: "28px",
                  height: "28px",
                }}
              >
                <CiCalendarDate />
              </Avatar>

              <p className="boxparagraph">No due date</p>
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
          {/* project container */}
          <div className="projectContainer" onClick={handleProjectOpen}>
            <p>Projects</p>

            {projectOpen ? (
              <input
                type="text"
                placeholder="Add task to a project"
                onChange={handleAddProject}
                value={addProject}
                autoFocus={true}
                onBlur={() => setprojectOpen(false)}
              />
            ) : (
              <span className="projectSpan">Add Project</span>
            )}
          </div>
          {addProject.length > 0 && projectOpen && (
            <span className="AddprojectButton">
              {" "}
              + create Project for '{addProject}'{" "}
            </span>
          )}

          <div className="dependenciesContainer">
            <p>Dependencies</p>

            {openDepedencies ? (
              <>
                <div className="inputdependenciesBox">
                  <select style={{ background: "#247, 246, 246" }}>
                    {Blockingdata.map((item) => (
                      <option value="" style={{ color: item.color }}>
                        {item.icons}
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Find a task"
                    autoFocus={true}
                    value={dependenciesInputValue}
                    onChange={handleDepencies}
                  />
                </div>
              </>
            ) : (
              <span
                className="dependenciesSpan"
                onClick={handleAddDependencies}
              >
                Add Dependencies
              </span>
            )}
          </div>

          {showMoreBtn && (
            <>
              <div className="priorityContainer">
                <span className="priortyBox">
                  <IoIosArrowDropdown />
                  <p>Priority</p>
                </span>
                <select className="DropDown" name="" id=""
                  onChange={handlePriorityChange}
                >
                  {priorityArr.map((item) => (
                    <option
                      style={{ background: item.color , color:'white'}}
                      key={item.id}
                      value={item.priority}
                    >
                      {item.priority}
                    </option>
                  ))}
                </select>
              </div>

              <div className="priorityContainer">
                <span className="priortyBox">
                  <IoIosArrowDropdown />
                  <p>status</p>
                </span>
                <select className="DropDown" name="" id=""
                  onChange={handlePriorityChange}
                >
                  {statusArr.map((item) => (
                    <option
                      style={{ background: item.color , color:'white'}}
                      key={item.id}
                      value={item.content}
                    >
                      {item.content}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button
            style={{ cursor: "pointer" }}
            onClick={handleShowMoreButton}
            className="showmoreBtn"
          >
            {showMoreBtn ? "hide content" : "   show 2 more fields"}
          </button>
        </div>

        {/* /// disCriptionBox content....... */}

        <div className="discriptionBox">
          <p>Description</p>

          <textarea
            style={{ border: openDiscription ? "1px solid grey" : "none" }}
            onChange={handleDiscription}
            placeholder="What about this"
            value={discriptionValue}
            onClick={handleOpneDiscription}
            onBlur={handleOpneDiscription}
          ></textarea>
        </div>

        <div className="commentBox">
          <div className="comment">
            {commentData.map((item) => (
              <div className="comment_outer">
                <div className="comment_inner">
                  <Avatar sx={{ background: "green" }}>CB</Avatar>
                  <span>{item.email}</span>
                  <span>time</span>
                </div>
                <p>{item.comment}</p>
              </div>
            ))}
          </div>

          <div className="inputComment">
            <div className="textAreaBox">
              <Avatar sx={{ background: "green" }}>CB</Avatar>
              <textarea
                value={commentValue}
                onChange={handleComment}
              ></textarea>
            </div>
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
