import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMyGames } from '../actions/playergames';
import { logout } from '../actions/auth';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import AddBox from '@material-ui/icons/AddBox';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';




const useStyles = (theme) => {
    return {
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
            cursor: 'pointer'

        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 25,
            height: 25,
        },

        centeredBox: {
            margin: 'auto'
        }

    }
};


class Navbar extends Component {



    render() {
        // const classes = useStyles();
        const { classes } = this.props;
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
                                    <AddBox className={classes.icon} /> Add game
                                </RouterLink>
                            </span>
                            <span color="inherit" href="/" className={classes.link}>
                                <RouterLink to="/my_games" color="inherit" className={classes.link}>
                                    <PlayCircleFilled className={classes.icon} /> My Games
                                </RouterLink>
                            </span>
                            <span color="inherit" href="/" className={classes.link}>
                                <PollIcon className={classes.icon} />
                            View Scores
                        </span>
                        </Breadcrumbs>

                        {this.props.auth.isAuthenticated ?
                            <Link className={classes.link}>
                                <ExitToApp className={classes.icon} onClick={this.props.handlelogout} />
                            </Link>

                            :
                            <RouterLink to="/login/" color="inherit" className={classes.link}>
                                <Person className={classes.icon} />
                            </RouterLink>
                        }

                    </Toolbar>
                </AppBar>
            </div>
        );
    };
};


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlelogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Navbar))