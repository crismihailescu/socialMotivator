import { makeStyles } from '@material-ui/core/styles';

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

function GroupForm(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.formContainer}>
                <div className={classes.addGroupForm}>
                    <div className={classes.addGroupHeadingContainer}>
                        <h3 className={classes.addGroupHeading}>Create New Group</h3>
                    </div>
                    <div className={classes.addGroupRow}>
                        <label className={classes.groupNameLabel} htmlFor='name'>Group Name:</label>
                        <input className={classes.groupNameInput} value={props.name} id='name' type='text' onChange={props.onNameChange}/>
                    </div>
                    <div className={classes.addGroupRow}>
                        <label className={classes.groupNameLabel} htmlFor='name'>Group Image URL:</label>
                        <input className={classes.groupNameInput} value={props.name} id='name' type='text' onChange={props.onNameChange}/>
                    </div>
                    <div className={classes.addGroupRow}>
                        <label className={classes.groupNameLabel} htmlFor='name'>Add Group Members by Username:</label>
                        <input className={classes.groupNameInput} value={props.name} id='name' type='text' onChange={props.onNameChange}/>
                    </div>
                    <div className={classes.formBtns}>
                        <button className={classes.submitBtn} id='addButton' onClick={props.handleAddGroup}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )}

export default GroupForm;
