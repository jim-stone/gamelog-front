import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle';
import SubjectIcon from '@material-ui/icons/Subject';
import Popup from 'reactjs-popup';

import { connect } from 'react-redux';
import { addToMyGames } from '../actions/playergames'



const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        paddingTop: 30
    },
    media: {
        height: 200,
    },
});


const removeTagsRegex = / *<[^)]*?> */g;

export function GameCard(props) {
    const { game, addToMyGames } = props;
    game.description = game.description.replace(removeTagsRegex, "")
    const classes = useStyles();
    const gameToSave = {
        bga_id: game.id,
        name: game.name,
        description: game.description,
        thumb_url: game.thumb_url
    };


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
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {game.description.replace(removeTagsRegex, "").slice(0, 200) + ' ...'}
                    <Popup
                        trigger={
                            <Button size="small" color="inherit">
                                <b>read more</b>
                            </Button>}
                        modal
                        position='top left'
                    >
                        <Typography gutterBottom variant="h5" component="h2">
                            {game.name}
                        </Typography>
                        <div>{game.description.replace(removeTagsRegex, "")}</div>
                    </Popup>
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
                <Button size="small" color="inherit" onClick={() => addToMyGames(gameToSave)}>
                    <CheckCircle />&nbsp;&nbsp;&nbsp;Add to My Games
                </Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToMyGames: (newGame) => dispatch(addToMyGames(newGame)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)