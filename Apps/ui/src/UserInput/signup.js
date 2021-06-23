import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography, Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useYupValidationResolver, signUpSchema } from './Schema';

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
    textField: {
        marginTop: 40,
        width: '80%',
        marginRight: 40,
        marginLeft: 40,
    },
});


function SignUp() {
    const resolver = useYupValidationResolver(signUpSchema);

    const classes = useStyles();
    const { handleSubmit, formState: { errors }, register } = useForm({ resolver });

    const Submit = () => {
        console.log("Submitted");
    }
    const dispatch = useDispatch();
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
                    autoFocus
                    {...register('password')}
                    error={errors && errors.password}
                    helperText={errors && errors.password ? 'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case character' : ''}
                />
                <TextField
                    id='email'
                    label='Email'
                    variant='outlined'
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoFocus
                    {...register('email')}
                    error={errors && errors.email}
                    helperText={errors && errors.email ? 'Valid Email Required' : ''}
                />
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
                    <Button variant='outlined' className={classes.button} onClick={handleSubmit(() => Submit())}>
                        Sign Up
                    </Button>
                </Box>
            </Paper>
        </Box>
    );

}

export default SignUp;