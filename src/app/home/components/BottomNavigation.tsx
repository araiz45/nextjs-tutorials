"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Home, Pages, Person, PostAdd } from "@mui/icons-material";
import { useRouter } from "next/navigation";
const BottomNavigationComponent = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          boxShadow: "-1px -.5px 3px #464545",
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          onClick={() => router.push("/home")}
        />
        <BottomNavigationAction
          label="Create Post"
          icon={<PostAdd />}
          onClick={() => router.push("/home/create-post")}
        />
        <BottomNavigationAction
          label="Posts"
          icon={<Pages />}
          onClick={() => router.push("/home/posts")}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<Person />}
          onClick={() => router.push("/home/profile")}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationComponent;
