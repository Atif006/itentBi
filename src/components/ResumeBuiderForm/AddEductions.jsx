import * as A from "@mui/material";
import * as B from "@mui/icons-material";

function AddEducations() {
  return (
    <A.Grid
      className="addeducation"
      container
      spacing={2}
      sx={{ marginTop: "20px", padding: "10px", marginLeft: "20px" }}
    >
      <A.Grid xs={12}>
        <A.Typography variant="h4"> Education </A.Typography>
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField id="standard-basic" label="Course" variant="standard" />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Passing year  "
          variant="standard"
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Board And University  "
          variant="standard"
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.Button>
          <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
        </A.Button>
      </A.Grid>
    </A.Grid>
  );
}

export default AddEducations;
