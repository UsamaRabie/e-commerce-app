import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
function Modal({ clickedProduct }) {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "left" },
      }}
    >
      <Stack sx={{ marginTop: { xs: "50px", md: "0px" } }}>
        <img
          width={300}
          src={
            clickedProduct.attributes.productImg.data[selectedImg].attributes
              .url
          }
          alt="product"
        />
      </Stack>
      <Stack sx={{ alignItems: { xs: "center", md: "start" } }}>
      <Typography variant="h5">
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>
      <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.attributes.productImg.data.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setSelectedImg(index);
                    }}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
      
        
        <Box>
          <Button variant="contained" sx={{ marginTop: 3, marginBottom: 1 }}>
            <AddShoppingCartOutlinedIcon />
            Buy Now
          </Button>
        </Box>
        </Stack>
    </Box>
  );
}

export default Modal;
