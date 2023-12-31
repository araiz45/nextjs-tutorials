"use client";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import React from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState<File | null>();
  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword, pic);
    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("password", password);

    fd.append("img", pic);
    try {
      const response = await fetch("/api/user/", {
        method: "POST",
        body: fd,
      });
      console.log(response);
    } catch (error) {}
  };
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
        component={"form"}
        boxShadow={"5px 5px 10px #888888"}
        onSubmit={sendData}
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
          onChange={(ev) => setName(ev.target.value)}
        />
        <TextField
          variant="standard"
          label="Email"
          type="email"
          sx={{
            width: "20rem",
          }}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <TextField
          type="password"
          variant="standard"
          label="Password"
          sx={{
            width: "20rem",
          }}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <TextField
          type="password"
          variant="standard"
          label="Confirm Password"
          sx={{
            width: "20rem",
          }}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
        />

        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ marginTop: ".7rem" }}
        >
          Upload Profile Photo
          <VisuallyHiddenInput
            type="file"
            onChange={(ev) => {
              if (ev.target.files) {
                setPic(ev.target.files[0]);
              }
            }}
          />
        </Button>
        <Button variant="contained" sx={{ marginTop: "1rem" }} type="submit">
          Register
        </Button>
        <Box component={"p"} fontSize={"small"}>
          Have an account? <Link href={"/login"}>Login</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
