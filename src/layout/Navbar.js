import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import AddBox from '@material-ui/icons/AddBox';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    button: {
        display: 'flex',
    },
    link: {
        display: 'flex',
        textDecoration: 'none',

    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 25,
        height: 25,
    },

    centeredBox: {
        margin: 'auto'
    }

}));


export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <Breadcrumbs aria-label="breadcrumb" separator="&nbsp;&nbsp;" className={classes.centeredBox}>
                        <span>
                            <RouterLink to="/" color="inherit" className={classes.link}>
                                <HomeIcon className={classes.icon} />
                            Home
                            </RouterLink>
                        </span>
                        <span>
                            <RouterLink to="/add_game" color="inherit" className={classes.link}>
                                <AddBox className={classes.icon} />
                            Add game
                            </RouterLink>
                        </span>
                        <span color="inherit" href="/" className={classes.link}>
                            <PlayCircleFilled className={classes.icon} />
                            Register Score
                        </span>
                        <span color="inherit" href="/" className={classes.link}>
                            <PollIcon className={classes.icon} />
                            View Scores
                        </span>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
        </div>
    );
}


