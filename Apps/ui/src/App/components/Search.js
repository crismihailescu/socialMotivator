import * as JsSearch from 'js-search';
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Activity from './Activity'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    search: {
      '& > *': {
        margin: theme.spacing(1),
        width: '85%',
      },
      display: 'flex',
      marginRight: '5px',
      flex: '4 0 0',
    },
    button: {
        '& > *': {
          margin: theme.spacing(1),
        },
        height: '35px',
        width: '70px',
        position: 'relative',
        right: 40,
        top: 20,
      },
    root: {
        display: 'flex',
      },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '80%',
        height: '80%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityGridContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 5
    },
    activityGrid: {
        display: 'flex',
    }
  }));

function Search( {activities} ) {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([]);

    let searchResults;
    let body;

    var search = new JsSearch.Search('title');
    search.addIndex('title');
    search.addIndex('location');
    search.addIndex('type')
    search.addIndex('desc')

    search.addDocuments(activities);

    async function runSearch() {
        searchResults = search.search(input)
        body = (
            searchResults.map((value, index) => (
                <div >
                    {console.log("Current search: " + JSON.stringify(value), index)}
                    <p>
                        Correct text showing!
                    </p>
                        {setResults(searchResults)}
                </div>
                
            ))
        )

        handleOpen()
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    function format(intake) {
        let resultsList = JSON.parse(intake);
        let returnList = [];
        for (let item of resultsList) {
            returnList.push(<Activity activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start = {item.start} duration = {item.duration}></Activity>);
            returnList.push(<br></br>)
            returnList.push(<br></br>)
        }
        return returnList;
    }

    return (
        <div className={classes.root}>
            <div >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2>Search results for {input}</h2> 
                            <Grid className={classes.activityGridContainer}>
                                <>
                                {format(JSON.stringify(results))}
                                </>
                                { body }
                            </Grid>
                        </div>
                    </Fade>
                </Modal>
            </div>
            <form action="/" method="get" className={classes.search} noValidate autoComplete="on">
                <TextField 
                    label="Search Events" 
                    type="text"
                    id="searchBar"
                    placeholder="e.g. Beach Cleanup"
                    name="s" 
                    onInput={e => setInput(e.target.value)}
                />
            </form>
            <Button className={classes.button} variant="contained" onClick={runSearch}>Search</Button>
        </div>
    )
}

export default Search;