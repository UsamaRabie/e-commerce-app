import { Box, Container, Dialog, IconButton, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import Modal from "./Modal";
import { useGetProductByNameQuery } from "../../redux/Product";

function Main() {


  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyDate(newValue);
    }
  };
  const [open, setOpen] = useState(false);


  const handleClose = (value) => {
    setOpen(false);
  
  };
  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[productCategory][$eq]=Men";
  const womenCategoryAPI = "products?populate=*&filters[productCategory][$eq]=Women";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetProductByNameQuery(myDate);
  console.log(data)
  if(isLoading){
    return(
      <Typography variant="h5">Loading...</Typography>
    )
  }
  if(error){
    return(
      <h5>{error.message}</h5>
      
    )
  }

if(data){
  return (
          <Container sx={{ pt: 5 }}>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
              flexWrap="wrap"
              gap={3}
            >
              <Box>
                <Typography variant="h6">Selected Products</Typography>
                <Typography fontWeight={400} variant="body1">
                  All our new arrivals in an exclusive brand selection
                </Typography>
              </Box>
              <Box>
                <ToggleButtonGroup
                  value={myDate}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  color="error"
                >
                  <ToggleButton
                    className="myButton"
                    value={allProductsAPI}
                    aria-label="left aligned"
                  >
                    All Products
                  </ToggleButton>
                  <ToggleButton
                    className="myButton"
                    value={menCategoryAPI}
                    aria-label="centered"
                  >
                    Men Category
                  </ToggleButton>
                  <ToggleButton
                    className="myButton"
                    value={womenCategoryAPI}
                    aria-label="right aligned"
                  >
                    Women Category
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Stack>

            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"space-around"}
            >
            
                {
                data.data.map((item) => {
                  return (
                    <Card
                      layout
                      initial={{ transform: "scale(0)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                      key={item.id}
                      sx={{
                        maxWidth: 333,
                        mt: 6,
                        ":hover .MuiCardMedia-root ": {
                          rotate: "1deg",
                          scale: "1.1",
                          transition: "0.35s",
                        },
                      }}
                    >
                      <CardMedia
                        sx={{ height: 277 }}
                       image={`${item.attributes.productImg.data[0].attributes.url}`}
                      title="green iguana"
                      />

                      <CardContent>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Typography gutterBottom variant="h6" component="div">
                            {item.attributes.productTitle}
                          </Typography>

                          <Typography variant="subtitle1" component="p">
                          {item.attributes.productPrice}$
                          </Typography>
                        </Stack>

                        <Typography variant="body2" color="text.secondary">
                        {item.attributes.productDescription}
                        </Typography>
                      </CardContent>

                      <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button
                        
                          sx={{ textTransform: "capitalize" }}
                          size="large"
                          onClick={()=>setOpen(true)}
                        >
                          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                          add to cart
                        </Button>
                        <Rating
                          precision={0.1}
                          name="read-only"
                          value={item.attributes.productRating}
                          readOnly
                        />
                      </CardActions>
                    </Card>
                  );
                })}
            </Stack>

            <Dialog 
              sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
                <IconButton
                  sx={{
                    ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                    position: "absolute",
                    top: 0,
                    right: 10,
                  }}
                  onClick={handleClose}
                >
                  <Close />
                </IconButton>
          <Modal/>
            
          </Dialog>
          </Container>
        );
        }
}

export default Main;
