import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ClickAwayListener from '@mui/material/ClickAwayListener';

const drawerWidth = 240;

// function to define the opened state styles of the drawer
const openedMixin = (theme) => ({
    width: drawerWidth, // set width when drawer is open
    transition: theme.transitions.create('width', { // add transition for opening
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: '#03fcbe',
    color: 'black',
});

// function to define the closed state styles of the drawer
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', { // add transition for closing
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`, // set width when drawer is closed
    [theme.breakpoints.up('sm')]: { // adjust width on larger screens
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    backgroundColor: '#03fcbe',
    color: 'black',
});

// styled component for drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // align content to the right
    border: 0,
    padding: theme.spacing(0, 1), // add padding to the header
    ...theme.mixins.toolbar, // necessary for content to be below app bar
}));

// custom styled Drawer component with conditional styling based on the drawer's open state
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0, // prevent the drawer from shrinking
        whiteSpace: 'nowrap', // prevent text from wrapping
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open, // when drawer is open
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open, // when drawer is closed
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

// main MiniDrawer component
export default function MiniDrawer({ setAdminPage, items }) {
    // state to track if drawer is open or closed
    const [open, setOpen] = React.useState(false);

    // function to open the drawer
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // function to close the drawer
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box className="verticalNav" sx={{ display: 'flex' }}>
            <CssBaseline sx={{ backgroundColor: '#03fcbe', color: 'black' }} />
            <ClickAwayListener onClickAway={() => open && handleDrawerClose()}>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader sx={{ height: 68 }}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon sx={{ color: 'black' }} />
                        </IconButton>
                        <IconButton onClick={handleDrawerOpen} sx={[{}, open && { display: 'none' }]}>
                            <ChevronRightIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {items.map(({ text, file, icon: Icon }) => (
                            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    onClick={() => {
                                        setAdminPage(file);
                                        handleDrawerClose(); // zavře menu po kliknutí
                                    }}
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 2.5,
                                            color: 'black',
                                        },
                                        open
                                            ? { justifyContent: 'initial' }
                                            : { justifyContent: 'center' },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                                color: 'black',
                                            },
                                            open ? { mr: 3 } : { mr: 'auto' },
                                        ]}
                                    >
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        sx={[
                                            { color: 'black' },
                                            open ? { opacity: 1 } : { opacity: 0 },
                                        ]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </ClickAwayListener>
        </Box>
    );
}