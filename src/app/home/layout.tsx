import { Box } from "@mui/material";
import BottomNavigationComponent from "./components/BottomNavigation";
import { ThemeProvider } from "../context/useTheme";
import AvatarComp from "./components/Avatar";

const HomeLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <AvatarComp />
      <Box>
        <Box>{children}</Box>
        <BottomNavigationComponent />
      </Box>
    </ThemeProvider>
  );
};

export default HomeLayout;
