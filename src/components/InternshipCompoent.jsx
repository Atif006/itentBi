import * as A from "@mui/material";
import React from "react";

const InternshipCompoent = () => {
  return (
    <A.Container>
      <A.Typography
        variant="h5"
        sx={{ fontWeight: 500, marginTop: "10px", marginBottom: "10px" }}
      >
        Job Role | Company name
      </A.Typography>
      <A.Typography sx={{ fontWeight: 500, marginBottom: "10px" }}>
        jan 2020 - dec 2022
      </A.Typography>
      <A.Typography sx={{ marginBottom: "10px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </A.Typography>
    </A.Container>
  );
};

export default InternshipCompoent;
