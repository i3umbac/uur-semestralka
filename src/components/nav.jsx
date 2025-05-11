import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import person from "../assets/person.svg";

// main responsive app bar component
export default function ResponsiveAppBar({ pages, settings }) {
    // state to track mobile nav menu anchor
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // state to track user settings menu anchor
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // opens the mobile navigation menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // opens the user settings menu
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // closes the mobile navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // closes the user settings menu
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        // main app bar container with custom styling
        <AppBar className="horizontalNav" position="static"
                sx={{
                    backgroundColor: '#03fcbe',
                    color: 'black',
                }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* logo and title for desktop view */}
                    <Link to="/Home">
                        <img src={logo} alt="Logo" className="logo logoMaxi" />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' }, // hide on small screens
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/Home">SHIPMINT</Link>
                    </Typography>

                    {/* hamburger menu for small screens */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ ml: '100px' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* mobile nav menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {/* map over pages to create nav links */}
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={`/${page.toLowerCase()}`}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* smaller logo for mobile */}
                    <Link to="/Home">
                        <img src={logo} alt="Logo" className="logo logoMini" />
                    </Link>

                    {/* app title for small screens */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/Home">SHIPMINT</Link>
                    </Typography>

                    {/* full nav buttons for desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={page} key={page}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* user avatar and settings menu */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <img src={person} alt="account" className="account" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* map over settings to create menu items */}
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}