import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import React from "react";

const AddNameAndObjective = () => {
  return (
    <A.Grid
      className="addnamebox"
      container
      spacing={2}
      sx={{ marginTop: "20px", padding: "10px", marginLeft: "20px" }}
    >
      <A.Grid xs={12}>
        <A.Typography variant="h4" sx={{ fontWeight: 500 }}>
          Profile Details
        </A.Typography>
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField id="standard-basic" label=" Name : " variant="standard" />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label=" objective "
          variant="standard"
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField id="standard-basic" label=" Profile " variant="standard" />
      </A.Grid>
      <A.Grid xs={6}>
        <A.Button>
          <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
        </A.Button>
      </A.Grid>
    </A.Grid>
  );
};

export default AddNameAndObjective;
