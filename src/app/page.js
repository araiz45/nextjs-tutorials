"use client";
import { Box } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  async function fetchTry() {
    const { data } = await axios.get("/api/");
    console.log(data);
  }
  useEffect(() => {
    fetchTry();
  }, []);
  return <Box></Box>;
}
