import React, { useState } from 'react';
import { Button, Dialog, Grid } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import CustomSnackbar from './Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { openSnackbar } from '../../actions/snackbar';
import { addCompletion } from '../../actions/users';


function Submit(props) {
    const Open = () => {
        setOpen(true);
    }

    const Close = () => {
        setOpen(false);
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
            objectFit: 'contain'
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
        closeBtn: {
            position: 'absolute',
            top: '0',
            right: '0',
            variant: 'contained',
            fontFamily: 'verdana',
            color: 'black',
        },
        submitBtn: {
            variant: 'contained',
            background: ' #4CAF50',
            fontFamily: 'verdana',
            color: 'white',
            width: 70,
            fontSize: 10,
            height: 30,
        },
        content: {
            marginTop: 50,
        }
    })

    const dialogStyle = useStyles();
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.userInfo);
    return (
        <div className={dialogStyle.main}>
            <Button className={dialogStyle.openBtn} onClick={Open}>
                Submit
            </Button>
            <Dialog open={open} onClose={Close}>
                <Button className={dialogStyle.closeBtn} onClick={Close}>X</Button>
                <DialogContent className={dialogStyle.content}>
                    <div className='add-activity-row'>
                        <label htmlFor='code'>Code:</label>
                        <input value={code} id='code' type='number' onChange={(event) => setCode(event.target.value)} />
                    </div>
                    <Grid container justify="flex-end">
                        <Button className={dialogStyle.submitBtn} onClick={() => {
                            console.log(props.code);
                            if (code === props.code) {
                                if (user.complete.includes(props._id)) {
                                    dispatch(openSnackbar('Code has already been submitted', 'error'))
                                } else {
                                    user.complete.push(props._id);
                                    dispatch(addCompletion(user))
                                }
                            }
                            else {
                                dispatch(openSnackbar('Error', 'error'))
                            }
                        }}>
                            Submit
                        </Button>
                    </Grid>
                </DialogContent>
                <CustomSnackbar />
            </Dialog>
        </div>
    );
}

export default Submit;