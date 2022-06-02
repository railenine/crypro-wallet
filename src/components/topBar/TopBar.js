import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    main: {
        background: 'linear-gradient(100deg, #F3E5F5 10%, #D1C4E9 90%)',
    },
    container: {
        margin: '0 auto',
    },
    nav: {
        color: theme.palette.text.secondary,
        padding: '0 30px',
        fontSize: '20px',
        textDecoration: 'none'
    }
  }));

const TopBar = () => {
    
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.main}>
            <Toolbar className={classes.container}>
                <Button color="inherit">
                    <Link to='/' className={classes.nav}>Wallet</Link>
                </Button>
                <Button color="inherit">
                    <Link to='/rates' className={classes.nav}>Rates</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
