import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import NavBar from '../components/NavBar';
import TechCard from '../components/TechCard';

export class Home extends Component {
    state = {
        techs: [
            {
                name: "Allen",
                isWorking: false,
                keyCode: "alv",
                services: [],
            },
            {
                name: "Aden",
                isWorking: false,
                keyCode: "adv",
                services: [],
            },
            {
                name: "Ashley",
                isWorking: false,
                keyCode: "asv",
                services: [],
            },
            {
                name: "Tim",
                isWorking: true,
                keyCode: "tiv",
                services: [],
            },
            {
                name: "Mike",
                isWorking: true,
                keyCode: "miv",
                services: [],
            },
        ],
        // availableQueue: this.techs.filter(tech => tech.isWorking),
    };
    render() {
        const availableTech = this.state.techs.filter(tech => !tech.isWorking);
        const workingTech = this.state.techs.filter(tech => tech.isWorking);
        return (
            <div>
                <Grid container spacing={3}>
                    <NavBar />
                    <Grid item xs={12}>
                        <Paper >xs=12</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={3}>
                            {availableTech.map(tech => {
                                return (
                                    <Grid item key={tech.keyCode} xs={11}>
                                        <TechCard props={tech} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={3}>
                            {workingTech.map(tech => {
                                return (
                                    <Grid item key={tech.keyCode} xs={6}>
                                        <TechCard props={tech} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        )
    };
};

export default Home
