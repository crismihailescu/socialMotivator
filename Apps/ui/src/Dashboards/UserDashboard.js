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
import Leaderboard from '../App/components/Leaderboard';

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

function bubbleSort(arr) {
    console.log(arr);
    let len = arr.length;
    for (let i = len-1; i>=0; i--) {
        for (let j = 1; j<=i; j++) {
            if((arr[j-1]).points > (arr[j]).points) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr;
} 

function UserDashboard() {
    const user = useSelector(state => state.userInfo);
    const users = useSelector(state => state.users)

    function makeArray() {
        let rows = [];
        users.forEach(u => {
            if (u.type !== "Company") {
                rows.push({username: u.username, points: u.complete.length});
            }
        });
        console.log(bubbleSort(rows));
        return (bubbleSort(rows)).reverse();
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
                        {(user.current).map((item) => {
                            return (<div style={{ padding: 8 }}>
                                <Activity _id={item._id} activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start={item.start} duration={item.duration} description={item.desc} />
                            </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>


            <div >
                <p>Your past events: </p>
                <div>
                    <Carousel show={3}>
                        {user.history.map((item) => {
                            return (<div style={{ padding: 8 }}>
                                {console.log(`item code is ${item.code}`)}
                                <Activity _id={item._id} activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start={item.start} duration={item.duration} description={item.desc} code={item.code} submit={true} />
                            </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>

            <Leaderboard rows = {makeArray()}></Leaderboard>
        </div>
    </div>
}

export default UserDashboard;