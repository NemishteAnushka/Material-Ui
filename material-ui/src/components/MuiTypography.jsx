import { Typography } from "@mui/material";
function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">H1 HEADING</Typography>
      <Typography variant="h2">H2 HEADING</Typography>
      <Typography variant="h3">H3 HEADING</Typography>
      <Typography variant="h4">H4 HEADING</Typography>
      <Typography variant="h5">H5 HEADING</Typography>
      <Typography variant="h6">H6 HEADING</Typography>

      {/* sub title */}
      {/* subtitle1 It's a slightly smaller text style than h6, typically used for secondary headings or subtext. */}
      <Typography variant="subtitle1"> This is kind of subheading </Typography>
      {/* subtitle2 Secondary subtitles, labels 14px */}
      <Typography variant="subtitle2"> Subtitle 2 </Typography>

      {/* body para */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        eligendi molestias tempore. Expedita ipsa eum exercitationem neque eos
        illo nesciunt hic a earum!
      </Typography>
      {/* body 2 14 px */}
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maiores
        ipsam veniam eaque quasi quas dolores, quia eos debitis doloremque
        cupiditate quo consequuntur.
      </Typography>

      {/*  the component prop allows you to change the underlying HTML element that a component renders.*/}
      <Typography variant="h1" component="p" gutterBottom>This looks like h1 but is p(para)</Typography>
    </div>
  );
}

export default MuiTypography;
