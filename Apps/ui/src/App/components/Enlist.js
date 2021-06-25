import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



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
        height: 'auto',
        width: 'auto',
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
        top:'0',
        right: '0',
        variant: 'contained',
        fontFamily: 'verdana',
        color: 'white',

    },
    activityImg: {
        maxHeight: 500,
        maxWidth: 375,
        objectFit: 'down-scale',
    }
})


function Enlist(props) {

const dialogStyle = useStyles();

const slides = [props.picture[0], 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Zackenberg.4.jpg']

const [open, setOpen] = React.useState(false);
const [pic, setPic] = React.useState(props.picture[0]);

const Open = () => {
    setOpen(true);
}

const Close = () => {
    setOpen(false);
}


const Join = () => {
        console.log("eventually this will pass the joined activities back up");
    }

const Choose = () => {
        // if (props.picture.length > 1) {
        //     setPic(props.picture[1]);
        // }
        // console.log('eneter');
        setPic(slides[1]);
}

const Reset = () => {
    setPic(slides[0]);
}

    return (
        <div className = {dialogStyle.main}>
            <Button className = {dialogStyle.openBtn} onClick = {Open}>
                Join
            </Button>
            <Dialog open = {open} onClose = {Close} className ={dialogStyle.dialog}>
                <Button className = {dialogStyle.closeBtn} onClick = {Close}>X</Button>
                <DialogContent className = {dialogStyle.dialogContent}>
                    <Typography className = {dialogStyle.title}>{props.name}</Typography>
                   <img className = {dialogStyle.activityImg} src = {pic} onMouseEnter = {Choose} onMouseLeave = {Reset}></img>
                    <br/>
                    <br/>
                    <Typography className = {dialogStyle.description}>This is where the description would go</Typography>
                    <br/>
                    <Button onClick = {Join} className = {dialogStyle.joinBtn}>Join</Button>
                </DialogContent>
            </Dialog>
        </div> 
    )

}

export default Enlist;