import React from "react";
import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import Education from "./Education";

const EducationContainer = () => {
  return (
    <A.Box>
      <A.Box sx={{ bgcolor: "white", display: "flex", alignItems: "center" }}>
        <B.SchoolSharp
          sx={{ bgcolor: "blue", color: "white", fontSize: "30px" }}
        />
        <A.Typography
          sx={{
            paddingLeft: "10px",
            textTransform: "uppercase",
            color: "white",
            width: "100%",
            height: "30px",
            bgcolor: "#2C3539",
          }}
        >
          Education Or Certifates
        </A.Typography>
      </A.Box>
      <Education />
      <Education />
      <Education />
      <Education />
    </A.Box>
  );
};

export default EducationContainer;
