import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useYupValidationResolver } from '../UserInput/Schema';
import { Schema } from './Schema';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import { updateUser } from '../actions/userInfo';
import CustomSnackbar from '../App/components/Snackbar';

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

function AccountSettings() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userInfo);
    const classes = useStyles();
    const resolver = useYupValidationResolver(Schema);
    const { handleSubmit, formState: { errors }, register, getValues, setValue } = useForm({ resolver, defaultValues: { email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname, username: user.username } });

    const [showPw, setShowPw] = useState(false);
    const [values, setValues] = useState({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname
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

    return <div>

        <Button onClick={handleSettingsOpen}>
            < SettingsIcon />
        </Button>

        <Dialog open={settingsOpen} onBackdropClick={handleSettingsClose} className={classes.root}>
            <DialogTitle>Settings</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <TextField
                    id="firstname"
                    label="First Name"
                    type="firstname"
                    variant="outlined"
                    defaultValue={user.firstname}
                    className={classes.textField}
                    {...register('firstname')}
                    onChange={(event) => { setValue('firstname', event.target.value); user.firstname = event.target.value }}
                    error={errors && errors.firstname}
                    helperText={errors && errors.firstname ? 'Firstname cannot be empty' : ''}
                />
                <TextField
                    id="lastname"
                    label="Last Name"
                    type="lastname"
                    variant="outlined"
                    defaultValue={user.lastname}
                    className={classes.textField}
                    {...register('lastname')}
                    onChange={(event) => { setValue('lastname', event.target.value); user.lastname = event.target.value }}
                    error={errors && errors.lastname}
                    helperText={errors && errors.lastname ? 'Lastname cannot be empty' : ''}
                />
                <TextField
                    id="username"
                    label="Username"
                    type="username"
                    variant="outlined"
                    defaultValue={user.username}
                    className={classes.textField}
                    {...register('username')}
                    onChange={(event) => { setValue('username', event.target.value); user.username = event.target.value }}
                    error={errors && errors.username}
                    helperText={errors && errors.username ? 'Username cannot be empty' : ''}
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    defaultValue={user.email}
                    variant="outlined"
                    className={classes.textField}
                    {...register('email')}
                    onChange={(event) => { setValue('email', event.target.value); user.email = event.target.value }}
                    error={errors && errors.email}
                    helperText={errors && errors.email ? 'Valid Email Required' : ''}
                />
                <TextField
                    id="password"
                    label="Password"
                    type={showPw ? "text" : "password"}
                    variant="outlined"
                    className={classes.textField}
                    defaultValue={user.password}
                    {...register('password')}
                    onChange={(event) => { setValue('password', event.target.value); user.password = event.target.value }}
                    error={errors && errors.password}
                    helperText={errors && errors.password ? 'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case character' : ''}
                />
                <FormControlLabel
                    control={<Checkbox checked={showPw} onChange={() => setShowPw(!showPw)} />}
                    label="Show Password"
                />
            </DialogContent>
            <Button className={classes.button} onClick={handleSubmit(() => {
                dispatch({
                    type: 'UPDATE_USER', body: {
                        ...user,
                        password: getValues('password'),
                        firstname: getValues('firstname'), lastname: getValues('lastname'), username: getValues('username'), email: getValues('email')
                    }
                })
            })}>Update</Button>
        </Dialog>
        <CustomSnackbar />
    </div>
}

export default AccountSettings;
