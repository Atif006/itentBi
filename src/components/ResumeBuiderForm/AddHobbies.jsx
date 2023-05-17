import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import React from "react";

const AddHobbies = () => {
  return (
    <A.Grid
      className="addhobbies"
      container
      spacing={2}
      sx={{ marginTop: "20px", padding: "10px" }}
    >
      <A.Grid xs={6}>
        <A.Typography variant="h4" sx={{ fontWeight: 500 }}>
          Hobbies & Interest
        </A.Typography>
        <A.TextField
          id="standard-basic"
          label=" Add Hobbies & interest"
          variant="standard"
        />
        <A.Button>
          <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
        </A.Button>
        <A.Grid xs={6}></A.Grid>
      </A.Grid>
    </A.Grid>
  );
};

export default AddHobbies;
