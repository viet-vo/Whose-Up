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
    console.log(service)
    const classes = useStyles();
    switch (service.props) {
        case "mani":
            return (
                <Button 
                id={service.id} 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                onClick={service.method.bind(this)}>
                    Manicure
                </Button >
            );
        case "pedi":
            return (
                <Button 
                id={service.id} 
                variant="contained" 
                color="secondary" 
                className={classes.button} 
                onClick={service.method.bind(this)}>
                    Pedicure
                </Button >
            );
        case "wax":
            return (
                <Button 
                id={service.id} 
                variant="contained" 
                className={classes.wax} 
                onClick={service.method.bind(this)}>
                    Wax
                </Button >
            );
        case "fill":
            return (
                <Button 
                id={service.id} 
                variant="contained" 
                className={classes.fillin} 
                onClick={service.method.bind(this)}>
                    FillIn
                </Button >
            );
        case "pw":
            return (
                <Button 
                id={service.id} 
                variant="contained" 
                className={classes.pw} 
                onClick={service.method.bind(this)}>
                    Pink&White
                </Button >
            );
        default:
            return (
                <Button 
                id={service.id} 
                variant="contained" 
                className={classes.button} >
                    Unknown
                </Button>
            );
    };
};
