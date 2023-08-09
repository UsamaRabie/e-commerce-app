import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import {
  BikeScooter,
  Computer,
  MenuBook,
  SportsEsports,
  Widgets,
} from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Links from "./Links"
export default function Header3() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Widgets />
          <Typography sx={{ marginLeft: "10px", marginRight: "10px" }}>
            Categories
          </Typography>
          <ArrowForwardIosIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <BikeScooter fontSize="small" />
            </ListItemIcon>
            <ListItemText>Pikes</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <Computer fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <MenuBook fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <SportsEsports fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </div>
        {useMediaQuery("(max-width:821px)")&&(
              <IconButton onClick={toggleDrawer("top", true)}>
              <MenuIcon color="primary" />
              </IconButton>
              ) }

      {  useMediaQuery("(min-width:821px)")&&( 
              <Stack direction={"row"} gap={2} >
                <Links title={"Home"} />
                <Links title={"Mega Menu"} />
                <Links title={"Full Screen Menu"} />
                <Links title={"Pages"} />
                <Links title={"User Account"} />
                <Links title={"Vendor Account"} />
              </Stack>
              )}
        
    
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >
        <Box sx={{ textAlign: "center", marginTop: 5 , mx:"auto"  , minWidth:"60%"}}>
          <IconButton sx={{"&:hover":{color:"red" , transform: "rotate(30deg)" , transition:"0.5s"}}} onClick={toggleDrawer("top", false)}>
            <Typography variant="primary" >Close </Typography>
            <CloseIcon sx={{ "&:hover": { transform: "rotate(180deg)" , transition:"0.5s" } }} />          
            </IconButton>
        {
          [
            {mainLink: "Home" , subLink:["link1" ,"link2" , "link3"]} , 
            {mainLink: "Menu Page" , subLink:["link1" ,"link2" ]} , 
            {mainLink: "Full Screen Menu" , subLink:["link1" ,"link2" , "link3" , "link4"]} , 
            {mainLink: "Pages" , subLink:["link1" ,"link2" , "link3"]} , 
            {mainLink: "User Account" , subLink:["link1" ,"link2" ]} , 
            {mainLink: "Vendor Account" , subLink:["link1"]} , 
        
        ].map((item)=>{
          return(
            <Accordion elevation={0} sx={{ bgcolor: "initial" }} key={item}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.mainLink}</Typography>
            </AccordionSummary>
            
              <List sx={{py:0 , my:0}}>
                

                {item.subLink.map((item2)=>{
                  return(
                    <ListItem sx={{py:0 , my:0}}  key={item2}>
                  <ListItemButton>
                    <ListItemText primary= {item2} />
                  </ListItemButton>
                </ListItem>
                  )
                })}
              
              </List>
          
          </Accordion>
          )
        })
        }
        </Box>
      </Drawer>
    </Container>
  );
}
