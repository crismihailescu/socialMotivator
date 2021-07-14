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