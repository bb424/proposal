import { useEffect, useState } from "react"
import { Service } from "../models/service";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle between light and dark
  };
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : "#121212"
      }
    }
  })
  useEffect(() => {
    fetch('https://localhost:5002/api/services')
      .then(response => response.json())
      .then(data => setServices(data))

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleThemeToggle={handleThemeToggle}/>
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode ? '#121212' : "#eaeaea"
        }}
      >
        <Container maxWidth='xl' sx={{ mt: 8 }}>
          <Catalog services={services} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
