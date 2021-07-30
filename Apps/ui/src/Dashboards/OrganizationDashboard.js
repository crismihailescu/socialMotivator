import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddActivity from '../App/components/AddActivity';
import { makeStyles } from '@material-ui/core/styles';
import '../App/styles/UserDashboard.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AccountSettings from './AccountSettings.js';
import { getActivities } from '../actions/activities';
import { useDispatch } from 'react-redux';

const orgUpcomingActivities = [
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

const orgPastActivities = [
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
];

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

function OrganizationDashboard() {
    const user = useSelector(state => state.userInfo);
    const acts = useSelector(state => state.activities)
    const classes = useStyles();
    const dispatch = useDispatch();

    const [activities, setList] = useState([]);
    const [ready, setReady] = useState(false);
    const [other, setOther] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('outdoors');
    const default_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/330px-Larix_decidua_Aletschwald.jpg';



    useEffect(() => {
        async function setNewList() {
            dispatch({
                type: 'GET_ACTIVITY'
            });
        }
        setNewList().then(setOther(acts)).then(setList(other) && setReady(true) && console.log(ready));      
    }, []);


    function addActivity() {
        const newList = activities.concat({ name, type, default_img });
        setList(newList);
        console.log(newList);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }



    return ready && 
    <div className='dashboard-container'>
        <div className='dashboard'>
            <div className='user-settings'>
                <AccountSettings />
            </div>
            <h1>Hello, {user.firstname}.</h1>

            <AddActivity name={name} type={type} handleAddActivity={addActivity} onNameChange={handleNameChange} onTypeChange={handleTypeChange} />

            <div >
                <p>Your upcoming events: </p>
                <div className={classes.rootGrid}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div"></ListSubheader>
                        </GridListTile>
                        {activities.map((tile) => (
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
                <p>Past events you've organized: </p>
                <div className={classes.rootGrid}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div"></ListSubheader>
                        </GridListTile>
                        {orgPastActivities.map((tile) => (
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

    </div>
}

export default OrganizationDashboard;