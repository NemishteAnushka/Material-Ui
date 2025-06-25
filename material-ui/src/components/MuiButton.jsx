import { Button, ButtonGroup, IconButton, Stack, ToggleButtonGroup,ToggleButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";
function MuiButton() {
    //state for ToggleButtonGroup
    const [format,setFormat]=useState(["bold"])
    console.log(format)
    const handleFormatChange = (event,newFormate)=>{
        setFormat(newFormate)
    }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.google.com/">
          Text
        </Button>
        <Button variant="contained">Containe</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>

        <Button variant="contained" color="secondary">
          Secondary
        </Button>

        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="Send">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup value={format} onChange={handleFormatChange} >
            <ToggleButton value="bold">
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
                <FormatItalicIcon/>
            </ToggleButton>
            <ToggleButton value="underline">
                <FormatUnderlinedIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
