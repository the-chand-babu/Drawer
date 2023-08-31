import React, { useState } from "react";
import "./Topbox.scss";
import { HiMiniCheck } from "react-icons/hi2";
import { AiOutlineLike, AiOutlineClose, AiFillLike } from "react-icons/ai";
import { MdOutlineAttachFile } from "react-icons/md";
import { TbSubtask } from "react-icons/tb";
import { BiLink } from "react-icons/bi";
import { MdOutlineOpenInFull } from "react-icons/md";
import MenuFunc from "../muiComponent/menuItem";
import AddMoreMenu from "../muiComponent/AddmoreMenu";
import { IoIosMore } from "react-icons/io";
import { SiConvertio } from "react-icons/si";
import { GrFormAdd } from "react-icons/gr";
import { BsTag } from "react-icons/bs";
import { TbArrowMergeLeft } from "react-icons/tb";
import { HiOutlineBookmark } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Menu, Paper, popoverClasses } from "@mui/material";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { FiMoreVertical } from "react-icons/fi";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface topBoxProps {
  fullScreen: boolean;
  setFullScreen: (value: boolean) => void;
  handleClick: (value: boolean) => void;
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

interface TaskStatusProps {
  name: string;
  id: string;
  bgColor: string;
  color: string;
}

function Topbox({ fullScreen, setFullScreen, handleClick }: topBoxProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [openAddmore, setOpenAddmore] = useState<boolean>(false);
  const [markComplete, setMarkComplete] = useState<boolean>(false);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>("");
  const [taskStatus, setTaskStatus] = useState<TaskStatusProps[]>([
    {
      name: "Not Started",
      id: "1",
      bgColor: "rgba(84, 104, 154, 0.15)",
      color: "rgba(84, 104, 156, 1)",
    },
    {
      name: "IN PROGRESS",
      id: "2",
      bgColor: "rgba(58, 162, 160, 0.15)",
      color: "#3AA2A0",
    },
    {
      name: "WAITING",
      id: "3",
      bgColor: "rgba(229, 138, 31, 0.15)",
      color: "#E58A1F",
    },
    {
      name: "DEFERRED",
      id: "4",
      bgColor: "rgba(226, 64, 77, 0.15)",
      color: "#E2404D",
    },
    {
      name: "DONE",
      id: "5",
      bgColor: "rgba(106, 153, 78, 0.15)",
      color: "#6A994E",
    },
  ]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  const handleLike = () => {
    setLike(!like);
  };

  const handleAddmore = () => {
    setOpenAddmore(!openAddmore);
  };

  const handleCompleted = () => {
    setMarkComplete(!markComplete);
  };

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div
      className="topbox"
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      <div className="leftContainer">
        <FormControl>
          <Select
            displayEmpty
            className="person-name-select"
            value={personName ? personName : "Not Started"}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={{ classes: { paper: "select-paper-class" } }}
          >
            {taskStatus.map(({ name, id, bgColor, color }: TaskStatusProps) => (
              <MenuItem key={id} value={name}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      background: color,
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>{" "}
                  <div
                    style={{
                      padding: "5px 13px",
                      background: bgColor,
                      borderRadius: "17px",
                      color: color,
                      fontSize: "20px",
                    }}
                  >
                    {name}
                  </div>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="rightContainer">
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
          <BiLink style={{ cursor: "pointer" }} />
        </span>
        <span onClick={handleFullScreen}>
          <CgArrowsExpandLeft />
        </span>
        <span onClick={handleAddmore}>
          <FiMoreVertical />
          <AddMoreMenu
            open={openAddmore}
            setOpen={setOpenAddmore}
            data={AddmoreMenuData}
          />
        </span>
      </div>
    </div>
  );
}

export default Topbox;
