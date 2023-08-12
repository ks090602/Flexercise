import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="800" fontSize="30px">
      Fitness Hub
    </Typography>
    <Typography
      fontWeight={800}
      sx={{ fontSize: { lg: "40px", sm: "35px", xs: "30px" } }} mt = {2}
    >
      Unleash Your <br />
      Potential!
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mt={2} >
    Check out the most effective exercises🏋️
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "280px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{borderRadius:'80px'}}/>
  </Box>
);

export default HeroBanner;
