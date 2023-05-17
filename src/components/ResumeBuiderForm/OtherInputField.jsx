import React, { useState } from "react";
import * as A from "@mui/material";
import * as B from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { addSkills } from "../../redux/slice/skillSlice";

const OtherInputField = () => {
  const dispatch = useDispatch();
  const sdata = useSelector((state) => {
    return state.skills;
  });
  const [skills, setSkill] = useState("");
  const setSkiilsdata = (e) => {
    setSkill(e.target.value);
    console.log(skills);
  };
  const skiildetails = () => {
    dispatch(addSkills(skills));
    setSkill("");
    console.log(sdata);
  };
  return (
    <A.Grid
      className="otherbox"
      container
      spacing={2}
      sx={{
        padding: "10px",
        marginLeft: "20px",
        height: "150px",
        marginTop: "10px",
      }}
    >
      <A.Grid xs={6}>
        <A.Typography variant="h4" sx={{ fontWeight: 500 }}>
          Skills
        </A.Typography>
        <A.TextField
          id="standard-basic"
          label=" Add Skills"
          variant="standard"
          value={skills}
          onChange={setSkiilsdata}
        />
        <A.Button onClick={skiildetails}>
          <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
        </A.Button>
        <A.Grid xs={6}></A.Grid>
      </A.Grid>
    </A.Grid>
  );
};

export default OtherInputField;
