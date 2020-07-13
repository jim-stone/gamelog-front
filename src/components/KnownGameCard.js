import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
// import SubjectIcon from '@material-ui/icons/Subject';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
// import withDataPopup from '../hocs/withDataPopup';


const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        paddingTop: 30
    },
    media: {
        height: 200,
    },
});



export function KnownGameCard(props) {
    const { game } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {/* <CardActionArea> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {game.name}
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.media}
                image={game.thumb_url}
                title={game.name}
            />
            <CardContent>
                <Typography variant="body2" component="div">
                    {game.description.slice(0, 200) + ' ...'}
                    <Popup
                        trigger={
                            <Button size="small" color="inherit">
                                <b>read more</b>
                            </Button>}
                        modal
                        position='top left'
                    >
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {game.name}
                            </Typography>
                            {game.description}
                        </Fragment>
                    </Popup>
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
                <Button size="small" color="inherit" onClick={() => console.log(game)}>
                    <b>Delete game</b>
                </Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return state;
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeFromMyGames: (game) => dispatch(removeFromMyGames(game)),
//     }
// }

export default connect(mapStateToProps, null)(KnownGameCard)