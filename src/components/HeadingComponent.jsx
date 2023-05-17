import React from "react";
import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import styled from "@emotion/styled";
import "./compnentcss.css";
const Container = styled(A.Box)``;

const HeadingComponent = (props) => {
  console.log(props.icon);
  return (
    <Container>
      <A.Box
        sx={{
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <B.Settings />
        <A.Typography
          sx={{
            width: "100%",
            bgcolor: "blue",
            paddingLeft: "10px",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          {props.heading}
        </A.Typography>
      </A.Box>
      <ul className="listItem">
        <li>Ms Office</li>
        <li>Ms Office</li>
        <li>Ms Office</li>
        <li>Ms Office</li>
        <li>Ms Office</li>
        <li>Ms Office</li>
      </ul>
    </Container>
  );
};

export default HeadingComponent;
