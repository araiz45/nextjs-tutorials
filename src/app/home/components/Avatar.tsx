"use client";
import useTheme from "@/app/context/useTheme";
import { Avatar, Box } from "@mui/material";
import Link from "next/link";

const AvatarComp = () => {
  const { data, setData } = useTheme();
  return (
    <Link href="/home/profile">
      <Box position={"fixed"} right={15} top={15}>
        <Avatar
          alt="Travis Howard"
          src={`http://localhost:3000/uploads/${data?.pic}`}
        />
      </Box>
    </Link>
  );
};

export default AvatarComp;
