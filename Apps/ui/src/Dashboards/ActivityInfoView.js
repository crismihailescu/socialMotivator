import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import MapBox from '../App/components/MapBox'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        size: 'auto',
        textAlign: 'center',
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
    },
    dialogContent: {
        //background: 'linear-gradient(#228b22, #70483c)',
        display: 'inline-block',
        height: 500,
        width: 500,
        textAlign: 'center',
        objectFit: 'contain'
    },
    openBtn: {
        variant: 'contained',
        background: ' #4CAF50',
        fontFamily: 'verdana',
        color: 'white',

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
}));

const mapStyles = makeStyles({
    sizing: {
        width: '100px',
        height: '100px',
    }
});


function ActivityInfoView(props) {
    const ics = require('ics');
    const event = {
        start: props.start,
        duration: props.duration,
        location: props.location,
        title: props.name,
        description: props.description,
    }
    const dispatch = useDispatch();
    const user = useSelector(state => state.userInfo);
    const [pic, setPic] = useState(props.picture[0]);
    const [calEvent, setCalEvent] = useState('');
    const dialogStyle = useStyles();
    const mapStyling = mapStyles();

    const [modalOpen, setModalOpen] = useState(false);

    function handleModalOpen() {
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    const Remove = () => {
        dispatch({
            type: 'DELETE_ACTIVITY',
            user_id: `${user._id}`,
            activity_title: `${props.title}`,
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

    return <div>
        <GridListTileBar
            title={props.title}
            subtitle={<span>Type: {props.type}</span>}
            actionIcon={
                <IconButton onClick={() => { handleModalOpen(); createCalEvent(); }} aria-label={`info about ${props.title}`} className={dialogStyle.icon}>
                    <InfoIcon />
                </IconButton>
            }
        />

        <Dialog open={modalOpen} onBackdropClick={handleModalClose} className={dialogStyle.root}>
            <DialogTitle>{props.title}</DialogTitle>

            <Button className={dialogStyle.closeBtn} onClick={handleModalClose}>X</Button>
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
                <Button onClick={Remove} className={dialogStyle.joinBtn}>Delete</Button>
                <br />
                <br />
                <a className={dialogStyle.link} href={calEvent} download={`${props.name}.ics`}>
                    <Button className={dialogStyle.calendarBtn}>Add to calendar</Button>
                </a>
            </DialogContent>
        </Dialog>


    </div>
}

export default ActivityInfoView;
