import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ServiceButton from '../ServiceButton';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function TechCard(tech) {
    console.log(tech);
    const classes = useStyles();
    if(!tech.props.isWorking) {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {tech.props.name}
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    {tech.props.services.map(service => {
                        return(
                            <ServiceButton value={tech.props.id} key={service} props={service} />
                        )
                    })}
                </CardActions>
            </Card>
        );
    } else {
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {tech.props.name}
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    <Button size="small">Working</Button>
                </CardActions>
            </Card>
        )
    };
};
