import { makeStyles } from '@material-ui/core/styles';
import '../App/styles/UserDashboard.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useYupValidationResolver } from '../UserInput/Schema';
import { Schema } from './Schema';
import CustomSnackbar from '../App/components/Snackbar';
import AccountSettings from './AccountSettings.js';
import { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import ViewActivityByType from '../App/components/ViewActivityByType';
import Carousel from '../App/components/Carousel';
import Activity from '../App/components/Activity';

//Source: gridList modelled from example @ https://material-ui.com/components/grid-list/

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        size: 'auto',
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        width: 250,
        marginBottom: '10px',
    },
    rootGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    button: {
        background: '#ADD8E6',
        height: 50,
    }
}));

const userUpcomingActivities = [
    {
        title: 'Sundin Park Cleanup',
        type: 'Outdoor',
        image: 'http://i.huffpost.com/gen/1449440/images/o-PUBLIC-PARKS-facebook.jpg',
    },
    {
        title: 'Waikiki Beach Cleanup',
        type: 'Outdoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gotahoenorth.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fchambers_1.jpg&f=1&nofb=1',
    },
    {
        title: 'Fundraising',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbartowhistorymuseum.org%2Fwp-content%2Fuploads%2F2014%2F07%2Fbake-sale.jpg&f=1&nofb=1',
    },
];

const userPastActivities = [
    {
        title: 'Soup Kitchen',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fberksfoodbank.org%2Fwp-content%2Fuploads%2F2014%2F01%2FIn-line-at-soup-kitchen.jpeg&f=1&nofb=1',
    },
    {
        title: 'Volunteer Driver',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.driving.co.uk%2Fs3%2Fst-driving-prod%2Fuploads%2F2015%2F02%2FVans.jpg&f=1&nofb=1',
    },
    {
        title: 'School Dance',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia3.s-nbcnews.com%2Fi%2Fstreams%2F2014%2FMarch%2F140313%2F2D274905359410-today-school-dance-140312.jpg&f=1&nofb=1',
    },
    {
        title: 'Retirement Party',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixfeeds.com%2Fimages%2F22%2F529257%2F1200-535200953-retirement-party-in-office.jpg&f=1&nofb=1',
    },
    {
        title: 'Childcare',
        type: 'Indoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F06%2F12205709_web1_171212-CMA-M-daycare-1050x700.jpg&f=1&nofb=1',
    },
    {
        title: 'Miller Park Cleanup',
        type: 'Outdoor',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspokesman-recorder.com%2Fwp-content%2Fuploads%2F2019%2F05%2FAGA5310.jpg&f=1&nofb=1',
    },
];

function UserDashboard() {
    const user = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const classes = useStyles();
    const resolver = useYupValidationResolver(Schema);
    const { handleSubmit, formState: { errors }, register, getValues, setValue } = useForm({ resolver, defaultValues: { email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname, username: user.username } });

    //TODO: these values will be retrieved, not set here
    const [showPw, setShowPw] = useState(false);
    

    const [settingsOpen, setSettingsOpen] = useState(false);

    // useEffect(() => {
    //     async function getPassedActs() {
    //         dispatch({
    //             type: 'GET_PASSED',
    //             _id: `${user._id}`
    //           });
    //     }
    //     getPassedActs()
    // }, []);


    function handleSettingsOpen() {
        setSettingsOpen(true);
    }

    function handleSettingsClose() {
        setSettingsOpen(false);
    }

    return <div className='dashboard-container'>
        <div className='dashboard'>
            <div className='user-settings'>
                <AccountSettings />
            </div>
            <h1>Hello, {user.firstname}.</h1>

            <div >
                <p>Your upcoming events: </p>
                <div>
                    <Carousel show={3}>
                        {(user.current).map((item) => (
                            <div style= {{padding: 8}}>
                                <Activity _id = {item._id} activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start = {item.start} duration = {item.duration} description = {item.desc}/> 
                            </div>
                        ))}
                    </Carousel>
                </div>
                {/* <div className={classes.rootGrid}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div"></ListSubheader>
                        </GridListTile>
                        {userUpcomingActivities.map((tile) => (
                            <GridListTile key={tile.title}>
                                <img src={tile.image} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>Type: {tile.type}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div> */}
            </div>
            
            
            <div >
                <p>Your past events: </p>
                <div>
                    <Carousel show={3}>
                        {(user.history).map((item) => (
                            <div style= {{padding: 8}}>
                                <Activity _id = {item._id} activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start = {item.start} duration = {item.duration} description = {item.desc}/> 
                            </div>
                        ))}
                    </Carousel>
                </div>
                </div>


            {/* <div className='past-events'>
                <p>Your past events: </p>
                <div className={classes.rootGrid}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div"></ListSubheader>
                        </GridListTile>
                        {userPastActivities.map((tile) => (
                            <GridListTile key={tile.title}>
                                <img src={tile.image} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>Type: {tile.type}</span>}
                                    actionIcon={
                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div> */}
        </div>

        <Dialog open={settingsOpen} onBackdropClick={handleSettingsClose} className={classes.root}>
            <DialogTitle>Settings</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <TextField
                    id="firstname"
                    label="First Name"
                    type="firstname"
                    variant="outlined"
                    defaultValue={user.firstname}
                    className={classes.textField}
                    {...register('firstname')}
                    onChange={(event) => { setValue('firstname', event.target.value); user.firstname = event.target.value }}
                    error={errors && errors.firstname}
                    helperText={errors && errors.firstname ? 'Firstname cannot be empty' : ''}
                />
                <TextField
                    id="lastname"
                    label="Last Name"
                    type="lastname"
                    variant="outlined"
                    defaultValue={user.lastname}
                    className={classes.textField}
                    {...register('lastname')}
                    onChange={(event) => { setValue('lastname', event.target.value); user.lastname = event.target.value }}
                    error={errors && errors.lastname}
                    helperText={errors && errors.lastname ? 'Lastname cannot be empty' : ''}
                />
                <TextField
                    id="username"
                    label="Username"
                    type="username"
                    variant="outlined"
                    defaultValue={user.username}
                    className={classes.textField}
                    {...register('username')}
                    onChange={(event) => { setValue('username', event.target.value); user.username = event.target.value }}
                    error={errors && errors.username}
                    helperText={errors && errors.username ? 'Username cannot be empty' : ''}
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    defaultValue={user.email}
                    variant="outlined"
                    className={classes.textField}
                    {...register('email')}
                    onChange={(event) => { setValue('email', event.target.value); user.email = event.target.value }}
                    error={errors && errors.email}
                    helperText={errors && errors.email ? 'Valid Email Required' : ''}
                />
                <TextField
                    id="password"
                    label="Password"
                    type={showPw ? "text" : "password"}
                    variant="outlined"
                    className={classes.textField}
                    defaultValue={user.password}
                    {...register('password')}
                    onChange={(event) => { setValue('password', event.target.value); user.password = event.target.value }}
                    error={errors && errors.password}
                    helperText={errors && errors.password ? 'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case character' : ''}
                />
                <FormControlLabel
                    control={<Checkbox checked={showPw} onChange={() => setShowPw(!showPw)} />}
                    label="Show Password"
                />
            </DialogContent>
            <Button className={classes.button} onClick={handleSubmit(() => {
                dispatch({
                    type: 'UPDATE_USER', body: {
                        ...user,
                        password: getValues('password'),
                        firstname: getValues('firstname'), lastname: getValues('lastname'), username: getValues('username'), email: getValues('email')
                    }
                })
            })}>Update</Button>
        </Dialog>
        <CustomSnackbar />
    </div>
}

export default UserDashboard;