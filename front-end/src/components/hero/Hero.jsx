import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import React  from 'react'
import img1 from "../../images/Banner-15.jpg"
import img2 from "../../images/Banner-16.jpg"
import img3 from "../../images/Banner-17.jpg"
import img4 from "../../images/Banner-25.jpg"
import { ArrowForward } from '@mui/icons-material'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { useTheme } from '@emotion/react'
import Icon from './Icon'


const mySlider = [
  { text: "MEN", link: img1 },
  { text: "WOMEN", link: img4 },
];

function Hero() {
  const theme = useTheme()
  return (
    <Container >
    <Box sx={{ mt: 5, display: "flex", alignItems: "center", justifyContent: "space-between", gap:"10px" , height:"400px" }}>
    <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h5"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
      
      <Box sx={{ display:{ xs:"none" , md:"block" } }}>
        <Box sx={{position:"relative"}}>
        <img width="100%" src={img3} alt="banner1" />
          <Stack sx={{position:"absolute" , top:"50%" , transform:"translateY(-50%)" , left:"10%"}}>
            <Typography variant='h6' sx={{color:"gray"}}>NEW ARRIVALS</Typography>
            <Typography variant='h6' sx={{color:"gray"}}>SUMMER</Typography>
            <Typography variant='h6' sx={{color:"gray"}}>SALE 20% OFF</Typography>
            <Link href="#" underline="none" sx={{
              color:"#2B3445",
              display:"flex" ,
               alignItems:"center" ,
                gap:"8px" ,
                 transition:"0.5s",
                 "&:hover":{
                  color:"#D23F57"
                 }
                 }}>Shop Now 
            
            <ArrowForward/>
            </Link>
          </Stack>
        </Box>
          
        <Box  sx={{position:"relative"}}>
          <img width="100%" src={img2} alt="banner2" />
          <Stack sx={{position:"absolute" , top:"50%" , transform:"translateY(-50%)" , left:"10%"}}>
            <Typography variant='h6' sx={{color:"gray"}}>GAMING 4K</Typography>
            <Typography variant='h6' sx={{color:"gray"}}>DESKTOP &</Typography>
            <Typography variant='h6' sx={{color:"gray"}}>LAPTOPS</Typography>
            <Link href="#" underline="none" sx={{
              color:"#2B3445",
              display:"flex" ,
               alignItems:"center" ,
                gap:"8px" ,
                 transition:"0.5s",
                 "&:hover":{
                  color:"#D23F57"
                 }
                 }}>Shop Now 
            
            <ArrowForward/>
            </Link>
          </Stack>
        </Box>
    
      </Box>
    </Box>
    
        <Icon/>
    </Container>
  )
}

export default Hero