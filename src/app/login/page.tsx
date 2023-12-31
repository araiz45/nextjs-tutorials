import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";

const Login: React.FC = () => {
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
          Login
        </Box>
        <TextField
          variant="standard"
          label="Email"
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
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Login
        </Button>
        <Box component={"p"} fontSize={"small"}>
          Have'nt an account yet? <Link href={"/register"}>Register</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
