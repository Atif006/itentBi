import * as A from "@mui/material";

function AddExperience() {
  return (
    <A.Grid
      className="addexperienc"
      container
      spacing={2}
      sx={{ marginTop: "20px", padding: "10px" }}
    >
      <A.Grid xs={12}>
        <A.Typography variant="h4"> Experience Or Certification</A.Typography>
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField id="standard-basic" label="Job Role" variant="standard" />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Company Name "
          variant="standard"
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField id="standard-basic" label="Duration " variant="standard" />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Descriptions "
          variant="standard"
        />
      </A.Grid>
    </A.Grid>
  );
}

export default AddExperience;
