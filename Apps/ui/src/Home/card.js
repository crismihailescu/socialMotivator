import { CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Card(props) {
    const classes = useStyles();
    return (<Dialog aria-labelledby={props.name} open={props.open} className={classes.root}>
        <DialogTitle id="card-title">
            {props.name}
        </DialogTitle>
        <DialogContent>
            <CardMedia className={classes.media} image={props.img} title={props.name} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </DialogContent>
    </Dialog>);
}

export default Card;