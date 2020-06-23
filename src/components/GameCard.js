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

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        paddingTop: 30
    },
    media: {
        height: 200,
    },
});

export default function GameCard(props) {
    const { game } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
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
                    <Typography variant="body2" color="textSecondary" component="p">
                        {game.description.slice(0, 200)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="inherit">
                    <SubjectIcon />View Details
                </Button>
                <Button size="small" color="inherit">
                    <CheckCircle /> Add to Owned Games
                </Button>
            </CardActions>
        </Card>
    );
}