import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const navStyle = {
    color: "white",
    textDecoration: 'none'
}

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                {/*<IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>*/}

                <Link style={navStyle} to='/'>
                    Accueil
                </Link>
                <Typography variant="h6" className={classes.title}>

                </Typography>
                <Link style={navStyle} to='/join_room'>
                    <Button color="inherit">
                        Rejoindre une partie
                    </Button>
                </Link>
                <Link style={navStyle} to='/browse_game'>
                    <Button color="inherit">
                       Voir les jeux
                    </Button>
                </Link>
            </Toolbar>

        </AppBar>
    );
};

export default Navbar;
