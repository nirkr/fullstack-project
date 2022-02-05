import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withRouter, useHistory } from "react-router-dom";

const Header = (props: any) => {
    const history = useHistory();

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        setIsAuth(!!getTokenFromSession());
        console.log(isAuth);
    }, [])

    const getTokenFromSession = () => {
        return sessionStorage.getItem('token') || '';
    }

    const handleMenuClick = (pageUrl: string) => {
        history.push(pageUrl);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 7, display: { xs: 'none', md: 'flex' } }}
                        onClick={() => handleMenuClick('/')}
                    >
                        Paybox Missions
                    </Typography>
                    {
                        !isAuth ?
                            <>
                                <Button color="inherit" onClick={() => handleMenuClick('./signup')}>SignUp</Button>
                                <Button color="inherit" onClick={() => handleMenuClick('./signin')}>SignIn</Button>
                            </>
                            :
                            <Button color="inherit">LogOut</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default withRouter(Header);