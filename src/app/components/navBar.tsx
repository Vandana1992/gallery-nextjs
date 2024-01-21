import React from 'react'
import { AppBar, Button, Typography, Toolbar, Box } from '@mui/material';

const NavBar = () => {
    const navItems = ['Home', 'Users', 'Albums'];

    return (
        <div>
            <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Photo Gallery App
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                        {item}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;
