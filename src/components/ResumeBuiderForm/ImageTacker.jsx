import * as A from "@mui/material";

import React, { useState } from "react";

function ImageTacker() {
//   const [profile, setProfile] = useState({});
//   const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const inputData = (e) => {
    // setProfile(...profile,e.target.name:e.target.value);
    console.log(profile);
  };

  return (
    <A.Grid
      className="picbox"
      container
      spacing={2}
      sx={{
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <A.Grid xs={6}>
        <A.TextField
          label="Profile Pic "
          variant="standard"
          type="file"
          id="standard"
          onChange={handleChange}
          sx={{ widows: "100px", color: "black" }}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Contact No"
          variant="standard"
          name="contact"
          value={profile.contact}
          onCanPlay={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Email Id "
          variant="standard"
          name="email"
          value={profile.email}
          onCanPlay={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Current City"
          variant="standard"
          name="city "
          value={profile.city}
          onCanPlay={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Linkdin Id "
          variant="standard"
          name="linkedin"
          value={profile.linkedin}
          onCanPlay={inputData}
        />
      </A.Grid>
    </A.Grid>

    // {

    //     <A.Box sx={{ display: "grid", gridTemplateColumns: "100px" }}>
    //     <A.TextField
    //     label="Profile Pic "
    //     variant="standard"
    //     type="file"
    //     id="standard"
    //     onChange={handleChange}
    //     sx={{ widows: "100px", color: "black" }}
    //     />
    // <A.TextField id="standard-basic" label="Contact No" variant="standard" />
    //     <A.TextField id="standard-basic" label="Email Id " variant="standard" />
    //     <A.TextField
    //     id="standard-basic"
    //     label="Current City"
    //     variant="standard"
    //     />
    //     <A.TextField id="standard-basic" label="Linkdin Id" variant="standard" />
    //     </A.Box>
    // }

    // {<div className="App">
    //   <h2>Add Image:</h2>
    //   <input type="file" onChange={handleChange} />
    // </div>}
  );
}

export default ImageTacker;
