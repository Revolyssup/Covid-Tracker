import React from 'react'
//importing 4 react components to use from Material-UI framework
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';

//A react component wrapper to see numbers rolling as live count
import CountUp from 'react-countup';

//To apply multiple classes to a react component.
import cx from 'classnames';
const Cards=({data :{confirmed, recovered, deaths, lastUpdate }})=>{
    /*If API didn't return the required 5 objects and empty data object is passed as props in Cards component
    then in order to avoid undefined behavior,"Loading..." is displayed.
    */
    if(!confirmed) return "Loading..."


    /*When the state will be updated with new data object containing all 5 required objects returned by API
    then the Cards component will return this element to App.
    */
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration="0.5"
                                separator=","
                                />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Active Cases</Typography>
                    </CardContent> 
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                        <CountUp 
                                start={0}
                                end={recovered.value}
                                duration="1"
                                separator=","
                                />    
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Recovered Cases</Typography>
                    </CardContent> 
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography varaint="h5">
                        <CountUp 
                                start={0}
                                end={deaths.value}
                                duration="1.5"
                                separator=","
                                />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Death Cases</Typography>
                    </CardContent> 
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards