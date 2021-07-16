import { Box, Button, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chooseGroup } from '../actions/groups';

const useStyles = makeStyles({
    create: {
        background: '#4c8bf5',
        width: 200,
        height: 50,
        color: 'white',
    },
    gridContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 80
    },
    grid: {
        display: 'flex',
    },
    paper: {
        height: 200,
        width: 250,
    },
    text: {
        marginLeft: 5,
        marginRight: 5
    },
    avatar1: {
        background: '#4269f5',
        marginLeft: 10,
    },
    avatar2: {
        background: '#cc00ff',
        marginLeft: 30,
    },
    avatar3: {
        background: '#00cc00',
        marginLeft: 30,
    }
});

const groups = [{
    name: 'School Field Trip',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FbSOP0Qa0thIfp6L4RbQoBU8Nc3U%3D%2F2122x1415%2Ffilters%3Afill(auto%2C1)%2F77742436-56b74a515f9b5829f83813c7.jpg&f=1&nofb=1',
    members: [{ firstname: 'Abc', lastname: 'Cde' }, { firstname: 'Tbc', lastname: 'Zde' }, { firstname: 'Cbc', lastname: 'Mde' }],
    events: []
},
{
    name: 'Youth Education',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstandrewlu.org%2Fwp-content%2Fuploads%2F2018%2F08%2FYouth-Campers.jpg&f=1&nofb=1',
    members: [{ firstname: 'Dbc', lastname: 'Fde' }, { firstname: 'Tbc', lastname: 'Zde' }, { firstname: 'Cbc', lastname: 'Mde' }, { firstname: 'Ic', lastname: 'Jde' }],
    events: []
},
{
    name: 'Event Photographer',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnewenglandrestrooms.com%2Fwp-content%2Fuploads%2F2014%2F07%2FFotolia_66660956_Subscription_Monthly_M.jpg&f=1&nofb=1',
    members: [{ firstname: 'Kbc', lastname: 'Cde' }, { firstname: 'Mbc', lastname: 'Yde' }],
    events: []
}]

function Group(props) {

    const dispatch = useDispatch();

    const classes = useStyles();
    return (<>
        <Box mt={5} mr={5} mb={5} display='flex' flexDirection='row-reverse'>
            <Button variant='outlined' className={classes.create}> Create Group</Button>
        </Box>
        <Grid container className={classes.gridContainer} spacing={1}>
            {groups.map((value, index) => (
                <Grid key={index} item xs={4} className={classes.grid}>
                    <Paper className={classes.paper} variant='outlined' onClick={() => { dispatch(chooseGroup(value)); props.history.push(`/Groups/${value.name}`); }}>
                        <img alt="Render" style={{ width: '100%', height: '50%', objectFit: 'cover' }} src={value.image} />
                        <Typography gutterBottom variant='h6' className={classes.text}>
                            {value.name}
                        </Typography>
                        <Box className={classes.text} display="flex" flexDirection="row">
                            <Avatar className={classes.avatar1}>
                                {`${value.members[0].firstname.charAt(0)}.${value.members[0].lastname.charAt(0)}`}
                            </Avatar>
                            <Avatar className={classes.avatar2}>
                                {`${value.members[1].firstname.charAt(0)}.${value.members[1].lastname.charAt(0)}`}
                            </Avatar>
                            {value.members[2] && <Avatar className={classes.avatar3}>
                                {`${value.members[2].firstname.charAt(0)}.${value.members[2].lastname.charAt(0)}`}
                            </Avatar>
                            }
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </>);
}
export default withRouter(Group);