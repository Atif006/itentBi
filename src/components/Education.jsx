import * as A from "@mui/material";
import React from "react";

const Education = () => {
  return (
    <A.Container>
      <A.Typography
        variant="h5"
        sx={{ fontWeight: 500, marginTop: "10px", marginBottom: "5px" }}
      >
        Master Of Coputer Application | 2020 - 2022
      </A.Typography>
      <A.Typography sx={{ fontWeight: 500, marginBottom: "10px" }}>
        Maulana Azad National Urdu Universit Hyderabad .
      </A.Typography>
    </A.Container>
  );
};

export default Education;
