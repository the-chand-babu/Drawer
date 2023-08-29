import { MenuItem, Menu } from "@mui/material";
import "./AddmoreMenu.css";

const AddMoreMenu = ({ open, setOpen, data }) => {

  return (
    <Menu
      sx={{ top: "37px", left: "0px" }}
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      open={open}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {data.map((item) => (
        <MenuItem key={item.id} className="menuItem">
          <span className="icons" > {item.icons && <item.icons />}</span>

          <span className="itemName">{item?.name}</span>

          {item.command.a && (
            <span
            //   style={{ border: "1px solid black" }}
              className="itemCommandA"
            >
              {item?.command?.a}
            </span>
          )}

          {item.command.b && (
            <span className="itemCommandB">{item?.command?.b}</span>
          )}

          {item.command.c && (
            <span className="itemCommandC">{item?.command?.c}</span>
          )}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default AddMoreMenu;
