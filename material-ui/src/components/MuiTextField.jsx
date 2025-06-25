import { InputAdornment, Stack, TextField } from "@mui/material";
function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label ="Input Field" required/>
        <TextField label ="Field" helperText="do not share your password" /> 
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField label="Amount" InputProps={{
            startAdornment: <InputAdornment position="start"> $ </InputAdornment>
        }}/>
         <TextField label="Weight" InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>
        }}/>
      </Stack> 
    </Stack>
  );
}

export default MuiTextField;
