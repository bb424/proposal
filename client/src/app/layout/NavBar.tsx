import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean;
    handleThemeToggle: () => void;
}
export default function NavBar({ darkMode, handleThemeToggle }: Props) {


    return (
        <AppBar position='fixed' >
            <Toolbar>
                <Typography variant="h6">PROPOSAL TOOL</Typography>
                <IconButton onClick={handleThemeToggle} aria-label="toggle theme">
                    {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}