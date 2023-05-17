import React from "react";
import * as A from "@mui/material";

import styled from "@emotion/styled";
import Avatars from "./Avatars";
import HeadingComponent from "./HeadingComponent";
const LeftSide = styled(A.Box)`
  flex: 3;
  padding: 15px;
  background: #2c3539;
`;

const LeftContainer = () => {
  return (
    <LeftSide>
      <Avatars />
      <HeadingComponent heading={"Skills"} icon={"SettingsIcon"} />
      <HeadingComponent heading={"Hobbies & Interest"} icon={"SettingsIcon"} />
      <HeadingComponent heading={"personal details"} icon={"SettingsIcon"} />
      <HeadingComponent heading={"language"} icon={"SettingsIcon"} />
    </LeftSide>
  );
};

export default LeftContainer;
