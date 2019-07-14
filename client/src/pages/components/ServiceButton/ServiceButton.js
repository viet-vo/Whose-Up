import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    wax: {
        margin: theme.spacing(1),
        backgroundColor: '#43a047',
        color: 'white',
    },
    fillin: {
        margin: theme.spacing(1),
        backgroundColor: '#ef6c00',
        color: 'white',
    },
    pw: {
        margin: theme.spacing(1),
        backgroundColor: '#f06292',
        color: 'white',
    },
}));

export default function ServiceButton(service) {
    const classes = useStyles();
    console.log(service);
    switch (service.props) {
        case "mani":
            return (
                <Button variant="contained" color="primary" className={classes.button} >
                    Manicure
                </Button >
            );
        case "pedi":
            return (
                <Button variant="contained" color="secondary" className={classes.button} >
                    Pedicure
                </Button >
            );
        case "wax":
            return (
                <Button variant="contained" className={classes.wax} >
                    Wax
                </Button >
            );
        case "fill":
            return (
                <Button variant="contained" className={classes.fillin} >
                    FillIn
                </Button >
            );
        case "pw":
            return (
                <Button variant="contained" className={classes.pw} >
                    Pink&White
                </Button >
            );
        default:
            return (
                <Button variant="contained" className={classes.button} >
                    Unknown
                </Button>
            );
    };
};
