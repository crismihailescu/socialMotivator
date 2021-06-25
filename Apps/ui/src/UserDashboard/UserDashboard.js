import { useEffect, useState } from 'react';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../App/styles/UserDashboard.css';
import SettingsIcon from '@material-ui/icons/Settings';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Carousel from '../App/components/Carousel'
import Activity from '../App/components/Activity';

//Source: gridList modelled from example @ https://material-ui.com/components/grid-list/

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
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
}));

const userUpcomingActivities = [
    {
        title: 'ActivityA',
        type: 'Outdoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Veale_Gardens.JPG/330px-Veale_Gardens.JPG',
    },
    {
        title: 'ActivityB',
        type: 'Outdoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/YBF_2010_-_Bikini_Bar_perjantaina.jpg/330px-YBF_2010_-_Bikini_Bar_perjantaina.jpg',
    },
    {
        title: 'ActivityC',
        type: 'Indoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hand_holding_a_red_fundraising_box.jpg/330px-Hand_holding_a_red_fundraising_box.jpg',
    },
];

const userPastActivities = [
    {
        title: 'ActivityD',
        type: 'Outdoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Veale_Gardens.JPG/330px-Veale_Gardens.JPG',
    },
    {
        title: 'ActivityE',
        type: 'Outdoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/YBF_2010_-_Bikini_Bar_perjantaina.jpg/330px-YBF_2010_-_Bikini_Bar_perjantaina.jpg',
    },
    {
        title: 'ActivityF',
        type: 'Indoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hand_holding_a_red_fundraising_box.jpg/330px-Hand_holding_a_red_fundraising_box.jpg',
    },
    {
        title: 'ActivityD',
        type: 'Outdoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Veale_Gardens.JPG/330px-Veale_Gardens.JPG',
    },
    {
        title: 'ActivityE',
        type: 'Outdoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/YBF_2010_-_Bikini_Bar_perjantaina.jpg/330px-YBF_2010_-_Bikini_Bar_perjantaina.jpg',
    },
    {
        title: 'ActivityF',
        type: 'Indoor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hand_holding_a_red_fundraising_box.jpg/330px-Hand_holding_a_red_fundraising_box.jpg',
    },
];

function UserDashboard(props) {

    const classes = useStyles();

    //TODO: these values will be retrieved, not set here
    const [values, setValues] = useState({
        username: 'usernameA',
        email: 'usernameA@gmail.com',
        password: 'password',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [settingsOpen, setSettingsOpen] = useState(false);

    function handleSettingsOpen() {
        setSettingsOpen(true);
    }

    function handleSettingsClose() {
        setSettingsOpen(false);
    }

    function handleSaveSettings() {
        //TOOD: save settings
        console.log("User settings saved");
        setSettingsOpen(false);
    }


    return <div className='dashboard-container'>
        <div className='dashboard'>
            <div className='user-settings'>
                <Button onClick={handleSettingsOpen}>
                    < SettingsIcon />
                </Button>

            </div>
            <h1>Hello, {values.username}.</h1>
            
            <div >
                <p>Your upcoming events: </p>
                <div className={classes.rootGrid}>
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
                </div>

            </div>


            <div className='past-events'>
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

            </div>

        </div>

        <Dialog open={settingsOpen} onBackdropClick={handleSettingsClose} className={classes.root}>
            <DialogTitle>Settings</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <TextField
                    id="username"
                    label="Username"
                    type="username"
                    value={values.username}
                    variant="outlined"
                    className={classes.textField}
                    onChange={handleChange('username')}
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    variant="outlined"
                    className={classes.textField}
                    onChange={handleChange('email')}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    variant="outlined"
                    className={classes.textField}
                    onChange={handleChange('password')}
                />
            </DialogContent>
            <Button onClick={handleSaveSettings}>Update</Button>
        </Dialog>

    </div>
}

export default UserDashboard;