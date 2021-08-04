import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import Activity from './Activity';


function ResultsBox(props) {
    const [activities, setActivities] = React.useState([]);

    const useStyles = makeStyles({
        ActivitiesBox: {
            justifyContent: 'space-between',
            padding: '10px'
        },
    })

    function format(item) {
        return(<Activity activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start = {item.start} duration = {item.duration}></Activity>)
    }

    useEffect(() => {
        setActivities(props.activity);
        console.log(activities);
    });

    const boxStyle = useStyles();


    return (
        <div className = {boxStyle}>
        {format(props.activity)}
        </div>

    )



}

export default ResultsBox;