import { Box, Fab } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";
import Home from "../homee/Home";
import Navbar from "../navbar/Navbar";


import whatsappicon from "../../assets/img/whatsappicon.png";
     
function UserMain() {


  return (
    <>
      <Navbar />
       <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          top: "75vh",
          right: "2rem",
          zIndex: "1000",
        }}
      >
        <Fab aria-label="add">
          <a href="https://api.whatsapp.com/send?phone=541160313122">
            <img class className="icon-wsp" src={whatsappicon} alt="" />
          </a>
        </Fab>
      </Box> 
      <Home />
      <Footer />
    </>
  );
}

export default UserMain;
