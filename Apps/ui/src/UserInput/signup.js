import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography, Button, Paper, Select, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useYupValidationResolver, signUpSchema } from './Schema';
import CustomSnackbar from '../App/components/Snackbar';
import { useState } from 'react';

const useStyles = makeStyles({
    paper: {
        width: '40vw',
        height: 'auto',
        marginTop: '3vh',
        margin: 'auto',
    },
    link: {
        color: 'blue',
        marginLeft: 5,
        marginRight: 5,
    },
    button: {
        marginTop: 10,
        width: 200,
        height: 50,
        color: '#2196f3',
    },
    checkbox: {
        marginLeft: 40,
    },
    textField: {
        marginTop: 20,
        width: '80%',
        marginRight: 40,
        marginLeft: 40,
    },
    textField2: {
        marginTop: 10,
        width: '80%',
        marginRight: 40,
        marginLeft: 40,
    },
});


function SignUp(props) {
    const resolver = useYupValidationResolver(signUpSchema);

    const classes = useStyles();
    const { handleSubmit, formState: { errors }, register, getValues } = useForm({ resolver });
    const dispatch = useDispatch();
    const [showPw, setShowPw] = useState(false);
    return (
        <Box>
            <Paper className={classes.paper} variant='outlined'>
                <Box display="flex" className={classes.textField} justifyContent='space-between'>
                    <TextField
                        id='firstname'
                        label='First Name'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        autoFocus
                        {...register('firstname')}
                        error={errors && errors.firstname}
                        helperText={errors && errors.firstname ? 'Required' : ''}
                    />
                    <TextField
                        id='lastname'
                        label='Last Name'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        autoFocus
                        {...register('lastname')}
                        error={errors && errors.lastname}
                        helperText={errors && errors.lastname ? 'Required' : ''}
                    />
                </Box>
                <TextField
                    id='username'
                    label='Username'
                    variant='outlined'
                    className={errors.username ? classes.textField2 : classes.textField}
                    display='div'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoFocus
                    {...register('username')}
                    error={errors && errors.username}
                    helperText={errors && errors.username ? 'Required' : ''}
                />
                <TextField
                    id='password'
                    label='Password'
                    className={errors.password ? classes.textField2 : classes.textField}
                    variant='outlined'
                    type={showPw ? "text" : "password"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoFocus
                    {...register('password')}
                    error={errors && errors.password}
                    helperText={errors && errors.password ? 'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case character' : ''}
                />
                <Box className={classes.checkbox}>
                    <FormControlLabel
                        control={<Checkbox checked={showPw} onChange={() => setShowPw(!showPw)} />}
                        label={<Typography variant='body2'>Show Password</Typography>}
                    />
                </Box>
                <TextField
                    id='email'
                    label='Email'
                    variant='outlined'
                    className={errors.email ? classes.textField2 : classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoFocus
                    {...register('email')}
                    error={errors && errors.email}
                    helperText={errors && errors.email ? 'Valid Email Required' : ''}
                />
                <Select
                    id='type'
                    label='Type'
                    variant='outlined'
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoFocus
                    {...register('type')}
                    defaultValue={'User'}
                >
                    <MenuItem value={'User'}>User</MenuItem>
                    <MenuItem value={'Company'}>Company</MenuItem>
                </Select>
                <Box mx={5} mb={2}>
                    <Typography variant='body2'>
                        Already have an account? Click
                        <Link to='/SignIn' className={classes.link}>
                            here
                        </Link>
                        to sign in.
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row-reverse" mx={5} mb={4}>
                    <Button variant='outlined' className={classes.button} onClick={handleSubmit(() => dispatch({ type: 'SIGN_UP', body: getValues(), history: props.history }))}>
                        Sign Up
                    </Button>
                </Box>
            </Paper>
            <CustomSnackbar />
        </Box>
    );

}

export default withRouter(SignUp);