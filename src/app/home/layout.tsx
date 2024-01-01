import { Box } from "@mui/material";
import BottomNavigationComponent from "./components/BottomNavigation";

const HomeLayout = ({ children }) => {
  return (
    <Box>
      <Box>{children}</Box>
      <BottomNavigationComponent />
    </Box>
  );
};

export default HomeLayout;
