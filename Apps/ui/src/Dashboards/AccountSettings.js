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
    const { handleSubmit, formState: { errors }, register, getValues } = useForm({ resolver, defaultValues: { email: user.email, password: user.password }, });

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
                    value={values.firstname}
                    variant="outlined"
                    className={classes.textField}
                    onChange={handleChange('firstname')}
                />
                <TextField
                    id="lastname"
                    label="Last Name"
                    type="lastname"
                    value={values.lastname}
                    variant="outlined"
                    className={classes.textField}
                    onChange={handleChange('lastname')}
                />
                <TextField
                    id="username"
                    label="Username"
                    type="username"
                    value={values.username}
                    variant="outlined"
                    className={classes.textField}
                    onChange={handleChange('username')}
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    defaultValue={user.email}
                    variant="outlined"
                    className={classes.textField}
                    {...register('email')}
                    error={errors && errors.password}
                    helperText={errors && errors.password ? 'Valid Email Required' : ''}
                />
                <TextField
                    id="password"
                    label="Password"
                    type={showPw ? "text" : "password"}
                    variant="outlined"
                    className={classes.textField}
                    defaultValue={user.password}
                    {...register('password')}
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
                        ...user, password: getValues('password'),
                        firstname: values.firstname, lastname: values.lastname, username: values.username, email: getValues('email')
                    }
                })
                setSettingsOpen(false);
            })}>Update</Button>
        </Dialog>

    </div>
}

export default AccountSettings;
