import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography, Button, Paper, FormControlLabel, Checkbox } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useYupValidationResolver, signInSchema } from './Schema';
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
        marginTop: 40,
        width: '80%',
        marginRight: 40,
        marginLeft: 40,
    },
});


function SignIn(props) {
    const resolver = useYupValidationResolver(signInSchema);

    const classes = useStyles();
    const { handleSubmit, formState: { errors }, register, getValues } = useForm({ resolver });

    const [showPw, setShowPw] = useState(false);
    const dispatch = useDispatch();
    return (
        <Box>
            <Paper className={classes.paper} variant='outlined'>
                <TextField
                    id='username'
                    label='Username'
                    variant='outlined'
                    className={classes.textField}
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
                    className={classes.textField}
                    variant='outlined'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type={showPw ? "text" : "password"}
                    autoFocus
                    {...register('password')}
                    error={errors && errors.password}
                    helperText={errors && errors.password ? 'Required' : ''}
                />
                <Box className={classes.checkbox}>
                    <FormControlLabel
                        control={<Checkbox checked={showPw} onChange={() => setShowPw(!showPw)} />}
                        label={<Typography variant='body2'>Show Password</Typography>}
                    />
                </Box>
                <Box mx={5} mb={2}>
                    <Typography variant='body2'>
                        Don't have an account? Click
                        <Link to='/SignUp' className={classes.link}>
                            here
                        </Link>
                        to sign up.
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row-reverse" mx={5} mb={4}>
                    <Button variant='outlined' className={classes.button} onClick={handleSubmit(() => dispatch({ type: 'SIGN_IN', username: getValues('username'), password: getValues('password'), history: props.history }))}>
                        Sign In
                    </Button>
                </Box>
            </Paper>
            <CustomSnackbar />
        </Box>
    );

}

export default withRouter(SignIn);