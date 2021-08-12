import { makeStyles } from '@material-ui/core/styles';
import Enlist from '../components/Enlist'

const activityStyles = makeStyles({
    activity: {
        position: 'relative',
        textAlign: 'auto',
        color: 'white',
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
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
    sideBySize: {
        width: '40%',
        margin: 8,
        float: 'left',
    },
    // Move button to align on right side
    sideBySize2: {
        margin: 0,
    },
});

function Activity(props) {
    const classes = activityStyles();

    // let date = props.start
    // let returnedDate = date.substring(0, date.length - 4)
    // let returnedTime = date.substring(date.length - 4, date.length + 1)
    // returnedDate = returnedDate.substring(0,4) + ", " + returnedDate.substring(4,5) + ", " + returnedDate.substring(5,6) + " at " + returnedTime.substring(0,2) + ":" + returnedTime.substring(2,4)

    return (
        <div>
            <div className={classes.activity}>
                <img alt="Render" style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={props.activityImg} />
                <h3 className={classes.topLeft}>{props.activityLocation}</h3>
                <h4 className={classes.bottomLeft}> {props.start} </h4>
            </div>
            <div className={classes.sideWrapper}>
                <h4 className={classes.sideBySize}>{props.activityTitle}</h4>
                <Enlist className={classes.sideBySize2} _id={props._id} picture={[props.activityImg]} name={props.activityTitle} type={props.activityType} location={props.activityLocation} start={props.start} duration={props.duration} description={props.description} code={props.code} submit={props.submit}></Enlist>
            </div>
        </div>
    );
}

export default Activity;
