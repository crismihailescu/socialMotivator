import { Box, Button, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { chooseGroup, getGroup } from '../actions/groups';
import { getUsers } from '../actions/users';
import GroupModal from './GroupModal'

const useStyles = makeStyles({
    gridContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 80
    },
    grid: {
        display: 'flex',
    },
    paper: {
        height: 300,
        width: 350,
    },
    text: {
        marginLeft: 10,
        marginRight: 5,
        fontSize: 25,
        display: "flex",
        flexDirection: "row",
    },
    box: {
        marginLeft: 10,
        marginRight: 5,
        marginTop: 0,
        fontSize: 25,
        display: "flex",
        flexDirection: "row",
        position: 'relative',
    },
    avatarGroup: {
        marginTop: 15,
        position: 'relative',
    },
    avatar: {
        background: 'grey',
        fontSize: 16,
    },
    button: {
        background: 'lightblue',
        '&:hover': {
            backgroundColor: '#4c8bf5',
            color: 'white',
        },
        fontSize: 12,
        height: 38,
        width: 100,
        position: 'absolute',
        marginTop: 18,
        marginLeft: '68%',
        right: '5px',
    },
    createGroup: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
});

function Group(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGroup());
        dispatch(getUsers());
    }, [dispatch]);
    const user = useSelector(state => state.userInfo);
    const allGroups = useSelector(state => state.allGroups);
    let groups = allGroups.filter(group => group.members.find(member => member.username = user.username) !== undefined);
    console.log(groups);
    const classes = useStyles();
    return (<>
        <Box mt={5} mr={5} mb={5} className={classes.createGroup}>
            <GroupModal />
        </Box>
        <Grid container className={classes.gridContainer} spacing={1}>
            {groups.map((value, index) => (
                <Grid key={index} item xs={4} className={classes.grid}>
                    <Paper className={classes.paper} variant='outlined' onClick={() => { dispatch(chooseGroup(value)); props.history.push(`/Groups/${value.name}`); }}>
                        <img alt="Render" style={{ width: '100%', height: '60%', objectFit: 'cover' }} src={value.image} />
                        <Typography gutterBottom variant='h6' className={classes.text}>
                            {value.name}
                        </Typography>
                        <Box className={classes.box} >
                            <AvatarGroup max={4} className={classes.avatarGroup}>
                                {value.members.map((value2) => (
                                    <Avatar alt={value2.lastname} className={classes.avatar}>
                                        {`${value2.firstname.charAt(0)}.${value2.lastname.charAt(0)}.`}
                                    </Avatar>
                                ))}
                            </AvatarGroup>
                            <Button className={classes.button} >
                                View Group
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </>);
}

export default withRouter(Group);
