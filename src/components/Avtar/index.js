import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

export default function ImageAvatars({ image, small = false, medium = false, large = true, className }) {
    const classes = useStyles();
    console.log('image==', image)
    return (
        <div className={classes.root}>
            {small && <Avatar src={image} className={[classes.small, className]} />}
            {medium && <Avatar src={image} />}
            {large && <Avatar src={image} className={`${classes.large}  ${className}`} />}
        </div>
    );
}