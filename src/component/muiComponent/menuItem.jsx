import { MenuItem, Menu } from "@mui/material";



const MenuFunc = ({ menuOpen, setMenuOpen , data, id}) => {
  return (
    <Menu
    sx={{top:'37px', left:'-20px' } }
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    // anchorEl={anchorEl}
    open={menuOpen}

    
    // onClose={() => setMenuOpen(false)}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    >



      {data.map((item)=>(
        <MenuItem key ={item.id}>{item.name}</MenuItem>
      ))}
    </Menu>
  );
};

export default MenuFunc;
