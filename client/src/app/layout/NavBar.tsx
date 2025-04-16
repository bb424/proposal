import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#e2ed11'
    }
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

type Props = {
    darkMode: boolean;
    handleThemeToggle: () => void;
    handleDrawerToggle: () => void;
    drawerWidth: number;
}
export default function NavBar({ darkMode, handleThemeToggle, handleDrawerToggle, drawerWidth }: Props) {


    return (
        <AppBar position='sticky' sx={{ ml: { drawerWidth }, transition: 'width 0.3s' }} >
            <Toolbar sx={{ ml: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: `calc(100% - ${drawerWidth}px)` }}>
                <Box display='flex' alignItems='center'>
                    <IconButton onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component={NavLink} sx={navStyles} to='/' variant="h6">ES ONE STOP SHOP</Typography>
                    <IconButton onClick={handleThemeToggle} aria-label="toggle theme">
                        {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
                    </IconButton>
                </Box>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent='4' color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}