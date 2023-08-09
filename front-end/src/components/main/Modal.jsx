import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import final from "../../images/t-shirts-products/1/final.png";
import img1 from "../../images/t-shirts-products/more/1 (1).jpg"
import img2 from "../../images/t-shirts-products/more/1 (10).jpg";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
function Modal() {
  return (
    <Box sx={{display:"flex" , gap:"20px" , flexDirection:{xs:"column" , md:"row"} , alignItems:{xs:"center" , md:"left"}}}>
      <Stack sx={{marginTop:{xs:"50px" , md:"0px"}}}>
        <img width={300} src={final} alt="product"  />
      </Stack>
      <Stack sx={{alignItems:{xs:"center" ,  md:"start"}}}>
        <Typography variant="h4">MEN'S FASHION </Typography>
        <Typography variant="h6" color="error">12 $ </Typography>
        <Typography variant="h6" sx={{textAlign:{xs:"center" }}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          minus.
        </Typography>
        <Stack direction="row" gap={4} >
        <img width={100} src={img1} alt="product" />
        <img width={100} src={img2} alt="product" />
        </Stack>
      <Box>
          <Button  variant="contained" sx={{marginTop:3 , marginBottom:1}}>
            <AddShoppingCartOutlinedIcon/>
              Buy Now
          </Button>
      </Box>
      </Stack>
    </Box>
  );
}

export default Modal;
