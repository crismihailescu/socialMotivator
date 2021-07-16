import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



function Enlist(props) {
    const ics = require('ics');
    const event = {
        start: props.start,
        duration: props.duration,
        location: props.location,
        title: props.name,
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
            maxHeight: 750,
            maxwidth: 600,
            width: 'auto',
            margin: 'auto',
            position: 'relative',
        },
        dialogContent: {
            background: 'linear-gradient(#228b22, #70483c)',
            display: 'inline-block',
            height: 500,
            width: 400,
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
    })

    const dialogStyle = useStyles();
    const [open, setOpen] = React.useState(false);
    const [pic, setPic] = React.useState(props.picture[0]);
    const [calEvent, setCalEvent] = React.useState('');

    const Open = () => {
        setOpen(true);
    }

    const Close = () => {
        setOpen(false);
    }


    const Join = () => {
        console.log("eventually this will pass the joined activities back up");
    }


    const createCalEvent = () => {
        ics.createEvent(event, (err, value) => {
            if (err) {
                console.log(err)
            }
            let file = new Blob([value]);
            let newUrl = URL.createObjectURL(file);
            setCalEvent(newUrl);
            console.log(props.title);
        })
    }

    return (
        <div className={dialogStyle.main}>
            <Button className={dialogStyle.openBtn} onClick={() => {Open(); createCalEvent(); }}>
                Sign Up
            </Button>
            <Dialog open={open} onClose={Close} className={dialogStyle.dialog}>
                <Button className={dialogStyle.closeBtn} onClick={Close}>X</Button>
                <DialogContent className={dialogStyle.dialogContent}>
                    <Typography className={dialogStyle.title}>{props.name}</Typography>
                    <>
                        <img className={dialogStyle.activityImg} src={pic}></img>
                        <br />
                        <br />
                    </>
                    <Typography className={dialogStyle.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.</Typography>
                    <br />
                    <Button onClick={Join} className={dialogStyle.joinBtn}>Join</Button>
                    <br />
                    <br />
                    <a className = {dialogStyle.link}href = {calEvent} download = {`${props.name}.ics`}>
                    <Button  className = {dialogStyle.calendarBtn}>Add to calendar</Button>
                    </a>
                </DialogContent>
            </Dialog>
        </div>
    )

}

export default Enlist;