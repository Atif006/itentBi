import * as A from "@mui/material";

import React  from "react";

function ImageTacker() {

  function handleChange(e) {
    
  }
  const inputData = (e) => {
    
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
       
          onCanPlay={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Email Id "
          variant="standard"
          name="email"
       
          onCanPlay={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Current City"
          variant="standard"
          name="city "
   
          onCanPlay={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Linkdin Id "
          variant="standard"
          name="linkedin"
       
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
