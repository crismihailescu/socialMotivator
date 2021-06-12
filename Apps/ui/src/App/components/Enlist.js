import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';



function Enlist() {

    const [open, setOpen] = React.useState(false);

const Open = () => {
    setOpen(true);
}

const Close = () => {
    setOpen(false);
}

const Join = () => {
    console.log("You tried to join");
}

    return (
        <div>
            <Button varient = "contained" onClick = {Open}>
                Join
            </Button>
            <Dialog onClose = {Close} open = {open}>
                <DialogContent>
                    <Button varient = "contained" onClick = {Join}>Join</Button>
                </DialogContent>
            </Dialog>
        </div> 
    )

}

export default Enlist;