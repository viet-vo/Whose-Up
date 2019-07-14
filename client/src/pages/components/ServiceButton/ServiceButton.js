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
                position={service.position}
                value={15 * 60 * 1000} 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
                onClick={function() {console.log(15 + " minutes")}}>
                    Manicure
                </Button >
            );
        case "pedi":
            return (
                <Button 
                id={service.id} 
                position={service.position}
                value={service.props} 
                variant="contained" 
                color="secondary" 
                className={classes.button} 
                onClick={function() {console.log(15 + " minutes")}}>
                    Pedicure
                </Button >
            );
        case "wax":
            return (
                <Button 
                id={service.id} 
                position={service.position}
                value={service.props} 
                variant="contained" 
                className={classes.wax} 
                onClick={function() {console.log(5 + " minutes")}}
                >
                    Wax
                </Button >
            );
        case "fill":
            return (
                <Button 
                id={service.id} 
                position={service.position}
                value={service.props} 
                variant="contained" 
                className={classes.fillin} 
                onClick={function() {console.log(20 + " minutes")}}>
                    FillIn
                </Button >
            );
        case "pw":
            return (
                <Button 
                id={service.id} 
                position={service.position}
                value={service.props} 
                variant="contained" 
                className={classes.pw} 
                onClick={function() {console.log(20 + " minutes")}}>
                    Pink&White
                </Button >
            );
        default:
            return (
                <Button 
                id={service.id} 
                position={service.position}
                value={service.props} 
                variant="contained" 
                className={classes.button} >
                    Unknown
                </Button>
            );
    };
};
