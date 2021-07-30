import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Box, MenuItem, Grid, TextField } from '@material-ui/core';
import { openSnackbar } from '../actions/snackbar';
import CustomSnackbar from '../App/components/Snackbar';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    addGroupForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        backgroundColor: '#F6F7F8',
        padding: '13px',
    },
    addActivityRow: {
        display: 'flex',
        marginBottom: '10px',
    },
    formBtns: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
    },
    addGroupHeading: {
        fontFamily: 'verdana',
        margin: '10px',
        marginTop: '0px',
        fontSize: '1.4em',
        marginBottom: '30px',
    },
    addGroupHeadingContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    groupNameInput: {
        marginLeft: '5px',
        width: '68%',
        height: 15,
    },
    activityNameLabel: {
        width: '32%',
    },
    submitBtn: {
        fontSize: 16,
        height: 38,
        width: 100,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#4c8bf5',
        '&:hover': {
            backgroundColor: 'white',
            color: '#4c8bf5',
        },
        borderRadius: '4px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }));


function AddActivityForm() {
    const classes = useStyles();
    //const currentUser = useSelector(state => state.userInfo);
    const acts = useSelector(state => state.activities)
    
    //const [selectedUsers, setSelectedUsers] = useState([currentUser.username]);
    //const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [activities, setList] = useState([]);
    const [other, setOther] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [url, setURL] = useState('');
    const [type, setType] = useState('outdoors');
    const default_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/330px-Larix_decidua_Aletschwald.jpg';

    const handleChange = (event) => {
        //setSelectedUsers(event.target.value);
    };


    return (
        <div>
            <div className='form-container'>
                <div className='add-activity-form'>
                    <div className='add-activity-heading-container'>
                        <h3 className='add-activity-heading'>Create New Activity</h3>
                    </div>
                    <div className='add-activity-row'>
                        <label htmlFor='name'>Activity name:</label>
                        <input value={name} id='name' type='text' />
                    </div>
                    <div className='add-activity-row'>
                        <label htmlFor='type'>Activity type:</label>
                        <select value={type} >
                            <option value='Outdoor'>Outdoor</option>
                            <option value='Indoor'>Indoor</option>
                            <option value='Group'>Group</option>
                            <option value='Solo'>Solo</option>
                        </select>
                    </div>
                    <div className='add-activity-row'>
                        <label htmlFor='url'>Image URL:</label>
                        <input value={url} id='url' type='text' />
                    </div>
                    <div className='add-activity-row'>
                        <label htmlFor='date'>Activity date:</label>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="2021-07-31"
                                value={date}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className='add-activity-row'>
                        <label htmlFor='location'>Activity location:</label>
                        <input value={location} id='location' type='text' />
                    </div>

                    <div className={classes.formBtns}>
                        <button className={classes.submitBtn} id='addButton' onClick={() => {
                            // if (name === '' || url === '' || selectedUsers.length < 3) {
                            //     dispatch(openSnackbar('All fields must be filled and there must be minimum 3 users in a group', 'error'));
                            // } else {
                            //     const getMembers = () => {
                            //         const members = [];
                            //         const filtered = users.filter(value => selectedUsers.includes(value.username));
                            //         for (let key of filtered) {
                            //             members.push({ firstname: key.firstname, lastname: key.lastname, username: key.username, _id: key._id })
                            //         }
                            //         return members;
                            //     }
                            //     dispatch(addGroup({ name, url, members: getMembers() }));
                            // }
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddActivityForm;
