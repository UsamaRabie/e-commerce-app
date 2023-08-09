import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        display:"flex"
      
      }}
      justifyContent={"space-around"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        variant="h6"
        sx={{ fontSize: 18 }}
        color="white"
      >
        
        Designed and developed by
        </Typography>
        <BrowserRouter>
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
          component={Link} to="https://usamarabie.github.io/Portfolio/"
          target="_blank"
        >
          Usama Rabie
        </Button>
        </BrowserRouter>
        <Typography color="white">  ©2023 </Typography>
    
    
    </Box>
  );
};

export default Footer;