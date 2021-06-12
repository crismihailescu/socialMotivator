import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';


function SignUp() {


   const Submit = () => {
        console.log("Submitted");
    }


    return (
        <div id = "SignUp">
            <Dialog open = {true}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <TextField
                    fullwidth
                    id = "email" 
                    label = "Email"
                    type = "email"
                    >
                    </TextField>
                    <br/>
                    <TextField 
                    fullwidth
                    id = "username"
                    label = "Username"
                    type = "text"
                    >
                    </TextField>
                    <br/>
                    <TextField 
                    fullwidth
                    id = "username"
                    label = "Password"
                    type = "text"
                    >
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button type = "submit" onClick = {Submit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
    
}

export default SignUp;