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
                id: "alv",
                services: ["mani", "pedi", "wax", "fill", "pw"],
                timer: 0,
                position: 0,
                methods: []
            },
            // {
            //     name: "Aden",
            //     isWorking: false,
            //     id: "adv",
            //     services: ["mani", "pedi", "wax", "fill", "pw"],
            //     timer: 0,
            //     position: 1,
            //     methods: []
            // },
            // {
            //     name: "Ashley",
            //     isWorking: false,
            //     id: "asv",
            //     services: ["mani", "pedi", "wax", "fill", "pw"],
            //     timer: 0,
            //     position: 2,
            //     methods: []
            // },
            {
                name: "Tim",
                isWorking: true,
                id: "tiv",
                services: ["mani", "pedi", "wax", "fill", "pw"],
                timer: 1000 * 60 * 59,
                position: null,
                methods: []
            },
            {
                name: "Mike",
                isWorking: true,
                id: "miv",
                services: ["mani", "pedi", "wax", "fill", "pw"],
                timer: 1000 * 60 * 30,
                position: null,
                methods: []
            },
        ],
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
                    <Grid item xs={4}>
                        <Grid container spacing={3}>
                            {availableTech.map(tech => {
                                return (
                                    <Grid item key={tech.id} xs={11}>
                                        <TechCard props={tech} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={3}>
                            {workingTech.map(tech => {
                                return (
                                    <Grid item key={tech.id} xs={6}>
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
