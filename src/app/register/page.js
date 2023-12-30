"use client";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

export default function Register() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <Box
      minHeight={"100vh"}
      bgcolor={"#e0dcd1"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        padding={"2rem"}
        alignItems={"center"}
        gap={".8rem"}
        borderRadius={"1rem"}
        boxShadow={"5px 5px 10px #888888"}
      >
        <Box component={"h3"} fontSize={"1.3rem"} color={"#2196f3"}>
          Register
        </Box>
        <TextField
          variant="standard"
          label="Name"
          sx={{
            width: "20rem",
          }}
        />
        <TextField
          variant="standard"
          label="Email"
          type="email"
          sx={{
            width: "20rem",
          }}
        />
        <TextField
          type="password"
          variant="standard"
          label="Password"
          sx={{
            width: "20rem",
          }}
        />
        <TextField
          type="password"
          variant="standard"
          label="Confirm Password"
          sx={{
            width: "20rem",
          }}
        />

        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ marginTop: ".7rem" }}
        >
          Upload Profile Photo
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Register
        </Button>
        <Box component={"p"} fontSize={"small"}>
          Have an account? <Link href={"/login"}>Login</Link>
        </Box>
      </Box>
    </Box>
  );
}
