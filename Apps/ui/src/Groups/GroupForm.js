import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Box, MenuItem } from '@material-ui/core';
import { openSnackbar } from '../actions/snackbar';
import CustomSnackbar from '../App/components/Snackbar';
import { addGroup } from '../actions/groups';

const useStyles = makeStyles({
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
    addGroupRow: {
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
    groupNameLabel: {
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
});

function GroupForm() {
    const classes = useStyles();
    const currentUser = useSelector(state => state.userInfo);
    const [name, setName] = useState('');
    const [url, setURL] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([currentUser.username]);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSelectedUsers(event.target.value);
    };

    return (
        <div>
            <div className={classes.formContainer}>
                <div className={classes.addGroupForm}>
                    <div className={classes.addGroupHeadingContainer}>
                        <h3 className={classes.addGroupHeading}>Create New Group</h3>
                    </div>
                    <div className={classes.addGroupRow}>
                        <label className={classes.groupNameLabel} htmlFor='name'>Group Name:</label>
                        <input className={classes.groupNameInput} value={name} id='name' type='text' onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className={classes.addGroupRow}>
                        <label className={classes.groupNameLabel} htmlFor='name'>Group Image URL:</label>
                        <input className={classes.groupNameInput} value={url} id='name' type='text' onChange={(event) => setURL(event.target.value)} />
                    </div>
                    <div className={classes.addGroupRow}>
                        <label className={classes.groupNameLabel} htmlFor='name'>Add Group Members by Username:</label>
                        <Box mt={1} className={classes.groupNameInput}>
                            <Select fullWidth={true} name="users" id="usernames" multiple value={selectedUsers} onChange={handleChange} MenuProps={{
                                getContentAnchorEl: () => null,
                            }}>
                                {users.length && users.filter(value => currentUser.username !== value.username).map((value, index) => <MenuItem key={index} value={value.username}>{value.username}</MenuItem>
                                )}
                            </Select>
                        </Box>
                    </div>
                    <div className={classes.formBtns}>
                        <button className={classes.submitBtn} id='addButton' onClick={() => {
                            if (name === '' || url === '' || selectedUsers.length < 3) {
                                dispatch(openSnackbar('All fields must be filled and there must be minimum 3 users in a group', 'error'));
                            } else {
                                const getMembers = () => {
                                    const members = [];
                                    const filtered = users.filter(value => selectedUsers.includes(value.username));
                                    for (let key of filtered) {
                                        members.push({ firstname: key.firstname, lastname: key.lastname, username: key.username, _id: key._id })
                                    }
                                    return members;
                                }
                                dispatch(addGroup({ name, url, members: getMembers() }));
                            }
                        }}>Submit</button>
                    </div>
                </div>
            </div>
            <CustomSnackbar />
        </div>
    )
}

export default GroupForm;
