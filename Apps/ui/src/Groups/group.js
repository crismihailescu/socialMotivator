import { Box, Button, Grid, Paper, Typography, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chooseGroup } from '../actions/groups';
import GroupModal from './GroupModal'
import { useSelector } from 'react-redux';

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
        display:'flex',
        flexDirection: 'row-reverse'
    },
});

const groups = [{
    name: 'School Field Trip',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FbSOP0Qa0thIfp6L4RbQoBU8Nc3U%3D%2F2122x1415%2Ffilters%3Afill(auto%2C1)%2F77742436-56b74a515f9b5829f83813c7.jpg&f=1&nofb=1',
    members: [{ firstname: 'Chris', lastname: 'Chelios' }, { firstname: 'Mikhael', lastname: 'Backlund' }, { firstname: 'Neil', lastname: 'Yakupov' }],
    events: [{
        title: 'Sundin Park Cleanup',
        type: 'Outdoor',
        image: 'http://i.huffpost.com/gen/1449440/images/o-PUBLIC-PARKS-facebook.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'East Vancouver',
      }, {
        title: 'Waikiki Beach Cleanup',
        type: 'Outdoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gotahoenorth.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fchambers_1.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Anmore',
      }, {
        title: 'Fundraising',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbartowhistorymuseum.org%2Fwp-content%2Fuploads%2F2014%2F07%2Fbake-sale.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Port Moody',
      }, {
        title: 'Volunteer Driver',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.driving.co.uk%2Fs3%2Fst-driving-prod%2Fuploads%2F2015%2F02%2FVans.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Port Coquitlam',
      }, {
        title: 'School Dance',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia3.s-nbcnews.com%2Fi%2Fstreams%2F2014%2FMarch%2F140313%2F2D274905359410-today-school-dance-140312.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'North Vancouver',
      }, {
        title: 'Miller Park Cleanup',
        type: 'Outdoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspokesman-recorder.com%2Fwp-content%2Fuploads%2F2019%2F05%2FAGA5310.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Coquitlam',
      }]
},
{
    name: 'Tri-Cities Friends',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstandrewlu.org%2Fwp-content%2Fuploads%2F2018%2F08%2FYouth-Campers.jpg&f=1&nofb=1',
    members: [{ firstname: 'Connor', lastname: 'McDavid' }, { firstname: 'Kevin', lastname: 'Bieksa' }, { firstname: 'Roberto', lastname: 'Luongo' }, { firstname: 'Kyle', lastname: 'Connor' },{ firstname: 'Jack', lastname: 'Hughes' }],
    events: [{
        title: 'Soup Kitchen',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fberksfoodbank.org%2Fwp-content%2Fuploads%2F2014%2F01%2FIn-line-at-soup-kitchen.jpeg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Kelowna',
      }, 
      {
        title: 'Childcare',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F06%2F12205709_web1_171212-CMA-M-daycare-1050x700.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Lake Cowichan'}]
},
{
    name: 'Coquitlam Rotary Club',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnewenglandrestrooms.com%2Fwp-content%2Fuploads%2F2014%2F07%2FFotolia_66660956_Subscription_Monthly_M.jpg&f=1&nofb=1',
    members: [{ firstname: 'Sebastian', lastname: 'Vettel' }, { firstname: 'Sebastian', lastname: 'Aho' }],
    events: [{
        title: 'Retirement Party',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixfeeds.com%2Fimages%2F22%2F529257%2F1200-535200953-retirement-party-in-office.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Hope',
      }, {
        title: 'Childcare',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F06%2F12205709_web1_171212-CMA-M-daycare-1050x700.jpg&f=1&nofb=1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
        location: 'Lake Cowichan',
      }]
}]

function Group(props) {

    const dispatch = useDispatch();
    const groupers = useSelector(state => state.group);
    const user = useSelector(state => state.userInfo);

    useEffect(() => {
        dispatch({
            type: 'GET_GROUPS',
            username: user.username,
        })
        console.log(groupers);

    })

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
                                {value.members.map((value2, index2) => (
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
