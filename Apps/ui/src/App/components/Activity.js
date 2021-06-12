import { makeStyles } from '@material-ui/core/styles';
import Enlist from '../components/Enlist'

const activityStyles = makeStyles({
    activity: {
        position: 'relative',
        textAlign: 'auto',
        color: 'white',
    },
    bottomLeft: {
        position: 'absolute',
        bottom: 28,
        left: 16,
        fontWeight: "bold",
    },
    topLeft: {
        position: 'absolute',
        top: 0,
        left: 16,
    },
});

function Activity(props) {
    const classes = activityStyles();
    return <div>
        <div className={classes.activity}>
            <img  alt="Render" style={{width: '300px', height: '300px'}} src={props.activityImg} />
            <div className={classes.bottomLeft}>Activity title: {props.activityTitle}</div>
            <h4 className={classes.topLeft}>Activity type: {props.activityType}</h4>
        </div>
        <Enlist></Enlist>
    </div>
}

export default Activity;
