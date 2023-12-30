import { Box } from "@mui/material";

export default function SideBar() {
  return (
    <Box
      minHeight={"100vh"}
      boxShadow={"2px 3px 20px #888888"}
      maxWidth={"17rem"}
      position={"sticky"}
      top={"0"}
      minWidth={"20%"}
      left={"0"}
      maxHeight={"100vh"}
      sx={{ overflowY: "scroll" }}
    ></Box>
  );
}
