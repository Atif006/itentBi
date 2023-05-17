import React from "react";
import * as A from "@mui/material";
import ImageTacker from "./ImageTacker";
import OtherInputField from "./OtherInputField";
import AddPersonalData from "./AddPersonalData";
import AddLanguage from "./AddLanguage";
import AddHobbies from "./AddHobbies";
import AddNameAndObjective from "./AddNameAndObjective";
import AddExperience from "./AddExperience";
import AddEducations from "./AddEductions";

const ResumeHome = () => {
  return (
    <A.Container sx={{ padding: "25px" }}>
      <A.Grid xs={12}>
        <A.Typography variant="h4">Resume Builder</A.Typography>
      </A.Grid>

      <A.Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ImageTacker />
        <OtherInputField />
      </A.Box>

      <A.Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AddPersonalData />
        <AddLanguage />
      </A.Box>
      <A.Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AddHobbies />
        <AddNameAndObjective />
      </A.Box>

      <A.Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AddExperience />
        <AddEducations />
      </A.Box>
      <A.Box sx={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
        <A.Button
          sx={{
            bgcolor: "green",
            color: "white",
            width: "60%",
            marginLeft: "20%",
          }}
        >
          {" "}
          preview
        </A.Button>
      </A.Box>
    </A.Container>
  );
};

export default ResumeHome;
