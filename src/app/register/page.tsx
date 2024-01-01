"use client";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useCookies } from "next-client-cookies";
import { redirect } from "next/navigation";

const Register = () => {
  const cookies = useCookies();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [pic, setPic] = useState<File | null>();
  const [redirectUrl, setRedirectUrl] = useState<boolean>(false);

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword, pic);
    if (password === confirmPassword) {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("password", password);
      fd.append("img", pic);
      try {
        fetch("/api/user/", {
          method: "POST",
          body: fd,
        })
          .then((res) => {
            res.json();
            if (res.status === 400) toast.error("User already created");
            if (res.status === 201)
              toast.success("Your account has been created");
          })
          .then((data) => {
            data;
            setRedirectUrl(true);
          });
        // Q. How can i get the response from the server and decode it?
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Password is mismatch ");
    }
  };

  if (cookies.get("HumanCivilzation") || redirectUrl) {
    return redirect("/home");
  }

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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
