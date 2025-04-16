import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import LeftNavBar from "./LeftNavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle between light and dark
  };
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
    
  };
  const drawerWidthOpen =240;
  const drawerWidthClosed = 60;
  const drawerWidth = open ? drawerWidthOpen : drawerWidthClosed;
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : "#121212"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleThemeToggle={handleThemeToggle} handleDrawerToggle={handleDrawerToggle} drawerWidth= {drawerWidth}/>
      <Box sx={{ display: 'flex'}}>
        <LeftNavBar open={open} />
        <Box
          component = "main"
          sx={{
            flexGrow: 1,
            minHeight: '100vh',
            background: darkMode
              ? 'radial-gradient(circle, #1e3aba, #111b27)'
              : 'radial-gradient(circle,rgb(149, 151, 151), #f0f9ff)',
            py: 6,
          }}
        >
          <Container maxWidth='xl' sx={{ mt: 8 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
