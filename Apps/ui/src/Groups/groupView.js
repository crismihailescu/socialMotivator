import { Box, Card, Typography, CardMedia } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { object } from 'yup/lib/locale';
import Carousel from '../App/components/Carousel'
import Activity from '../App/components/Activity'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    media: {
        paddingTop: '56.25%',
        height: '100%',
        width: '100%'
    },
    card: {
        position: 'relative',
        width: '100%',
        height: '20vh',
        marginBottom: 20,
    },
    overlay: {
        position: 'absolute',
        top: '10vh',
        left: '100px',
        color: 'white',
        fontSize: '40px',
        fontWeight: 'bold',

    },
    members: {
        marginLeft: 170,
        fontSize: '20px',
    },
    event: {
        marginLeft: 170,
        marginTop: 50,
        marginBottom: 20,
    },
    carousel: {
        marginLeft: 163,
        marginRight: 100,
    }
});

function GroupView() {
    const classes = useStyles();
    const group = useSelector(state => state.group);
    const getMembers = () => {
        let groupMembersString = '';
        if (group.members) {
            for (let x = 0; x < group.members.length; x++) {
                if (x + 1 !== group.members.length) {
                    groupMembersString = groupMembersString.concat(`${group.members[x].firstname} ${group.members[x].lastname}, `)
                } else {
                    groupMembersString = groupMembersString.concat(`${group.members[x].firstname} ${group.members[x].lastname}`)
                }
            }
        }
        return groupMembersString;
    }
    return (
        <>
            <Box className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia image={group.image} className={classes.media} />
                    <div className={classes.overlay}>
                        {group.name}
                    </div>
                </Card>
            </Box>
            <Typography variant='h6' className={classes.members}>
                {`Group Members: ${getMembers()}`}
            </Typography>
            <Typography variant='h6' className={classes.event}>
                Signed-Up Events
            </Typography>
            <div className={classes.carousel}>
                <Carousel show={3} >
                    {group.events.map((item) => (
                                    <div style={{padding: 8}}>
                                        <Activity activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc}/>
                                    </div>
                            ))}
                </Carousel>
            </div>
        </>);
}

export default GroupView;