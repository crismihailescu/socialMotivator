import React, { useState } from 'react';
import { Button, Dialog, Box } from '@material-ui/core';
import Submit from './Submit'
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MapBox from './MapBox'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Enlist(props) {
    const ics = require('ics');
    const event = {
        start: props.start,
        duration: props.duration,
        location: props.location,
        title: props.name,
        description: props.description,
    }
    const useStyles = makeStyles({
        main: {
            textAlign: 'center',
            margin: 'auto',
            position: 'relative',
        },
        dialog: {
            background: 'linear-gradient(#228b22, #70483c)',
            height: 'auto',
            maxHeight: 1050,
            maxwidth: 900,
            width: 'auto',
            margin: 'auto',
            position: 'relative',
        },
        dialogContent: {
            background: 'linear-gradient(#228b22, #70483c)',
            display: 'inline-block',
            height: 500,
            width: 500,
            textAlign: 'center',
            objectFit: 'contain',
            padding: 8,
        },
        openBtn: {
            variant: 'contained',
            background: ' #4CAF50',
            fontFamily: 'verdana',
            color: 'white',
            width: 70,
            fontSize: 10,
            height: 30,
        },
        joinBtn: {
            margin: 'auto',
            variant: 'outlined',
            background: '#4CAF50',
            fontFamily: 'verdana',
            color: 'white',
        },
        title: {
            fontFamily: 'verdana',
            color: 'white',
            fontSize: '2rem',
        },
        description: {
            fontFamily: 'verdana',
            color: 'white',
            fontSize: '1rem',
        },
        closeBtn: {
            position: 'absolute',
            top: '0',
            right: '0',
            variant: 'contained',
            fontFamily: 'verdana',
            color: 'white',

        },
        activityImg: {
            maxHeight: 450,
            maxWidth: 375,
            objectFit: 'contain',
        },
        calendarBtn: {
            margin: 'auto',
            variant: 'outlined',
            background: '#4CAF50',
            fontFamily: 'verdana',
            color: 'white',
            textAlign: 'right',
        },
        link: {
            textDecoration: 'none'
        }
    })

    const mapStyles = makeStyles({
        sizing: {
            width: '100px',
            height: '100px',
        }
    })

    const dialogStyle = useStyles();
    const mapStyling = mapStyles();

    // const slides = [props.picture[0], 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Zackenberg.4.jpg']

    const [open, setOpen] = useState(false);
    const [pic, setPic] = useState(props.picture[0]);
    const [calEvent, setCalEvent] = useState('');
    const user = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const Open = () => {
        setOpen(true);
        console.log(props.description);
    }

    const Close = () => {
        setOpen(false);
    }


    const Join = () => {
        dispatch({
            type: 'ENLIST_ACTIVITY',
            activity_id: `${props._id}`,
            title: `${props.name}`,
            activityType: `${props.type}`,
            image: `${pic}`,
            description: `${props.description}`,
            location: `${props.location}`,
            start: `${props.start}`,
            duration: `${props.duration}`,
            user_id: `${user._id}`,
        });
        console.log('clicked join')
    }

    const Remove = () => {
        dispatch({
            type: 'REMOVE_ACTIVITY',
            user_id: `${user._id}`,
            activity_id: `${props._id}`,
        });
        console.log('clicked join')
    }


    const createCalEvent = () => {
        ics.createEvent(event, (err, value) => {
            if (err) {
                console.log(err)
            }
            let file = new Blob([value]);
            let newUrl = URL.createObjectURL(file);
            setCalEvent(newUrl);
        })
    }

    function alreadyJoined(given_id) {
        if (user._id !== undefined && user.type !== "Company" ) {
            for (let element of user.current) {
                if (element._id === given_id) {
                    return false
                }
            }
        }
        return true;
    }

    return (
        <div className={dialogStyle.main}>
            <Box> <Button className={dialogStyle.openBtn} onClick={() => { Open(); createCalEvent(); }}>
                More Info
            </Button>
                {props.submit && <Submit code={props.code} _id={props._id} />}
            </Box>
            <Dialog open={open} onClose={Close} className={dialogStyle.dialog}>
                <Button className={dialogStyle.closeBtn} onClick={Close}>X</Button>
                <DialogContent className={dialogStyle.dialogContent}>
                    <Typography className={dialogStyle.title}>{props.name}</Typography>
                    <>
                        <img className={dialogStyle.activityImg} src={pic}></img>
                        <br />
                        <br />
                    </>
                    <Typography className={dialogStyle.description}>{props.description}</Typography>
                    <br />
                    <MapBox className={mapStyling.sizing} location={props.location} />
                    <br />
                    { alreadyJoined(props._id) && (user.type !== "Company") &&
                        <Button onClick={Join} className={dialogStyle.joinBtn}>Join</Button>
                    }

                    {alreadyJoined(props._id) && (user.type !== "Company") && <br></br>}
                    {(!alreadyJoined(props._id)) && (user._id !== undefined) && (user.type !== "Company") &&
                        <Button onClick={Remove} className={dialogStyle.joinBtn}>Remove</Button>
                    }
                    <br />
                    <br />
                    {(!alreadyJoined(props._id)) && (user._id !== undefined) && (user.type !== "Company") && <br></br> && <br></br>}
                    <a className={dialogStyle.link} href={calEvent} download={`${props.name}.ics`}>
                        <Button className={dialogStyle.calendarBtn}>Add to calendar</Button>
                    </a>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Enlist;