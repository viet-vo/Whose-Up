import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Countdown from 'react-countdown-now';

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
    let time = tech.props.timer;
    console.log(tech)
    const classes = useStyles();
    if(!tech.props.isWorking) {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h3" color="textPrimary" gutterBottom>
                        {tech.props.name}
                    </Typography>
                   
                </CardContent>
                <CardActions>
                    {tech.props.services.map(service => {
                        return(
                            <ServiceButton id={tech.props.id} position={tech.props.position} key={service} props={service} method={tech.method}/>
                        )
                    })}
                </CardActions>
            </Card>
        );
    } else {
        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h3"  color="textPrimary" gutterBottom>
                        {tech.props.name}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <Countdown
                        // https://www.npmjs.com/package/react-countdown-now#api-reference
                            date={Date.now() + time}
                            intervalDelay={1000}
                            precision={3}
                            renderer={props => <span>{props.minutes}:{props.seconds}</span>}
                            onComplete={function() {console.log("onComplete called")}}
                        />
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Working</Button>
                </CardActions>
            </Card>
        )
    };
};
