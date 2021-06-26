import { makeStyles } from '@material-ui/core/styles';
import { getThemeProps } from '@material-ui/styles';
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
    sideBySize: {
        width: '50%',
        margin : 0,
        float : 'left',
    },
    sideBySize2: {
        width: '50%',
        margin : 0,
        float : 'left',
        right: 335,
    },
    sideWrapper: {
        width: '100%',
        margin : 0,
        // display: 'inline-block',
        // verticalAlign: 'middle',
    },
});

function Activity(props) {
    const classes = activityStyles();
    return <div>
        <div className={classes.activity}>
            <img  alt="Render" style={{width: '100%', height: '300px', objectFit: 'cover'}} src={props.activityImg} />
            <div className={classes.bottomLeft}></div>
        </div>
        <div className={classes.sideWrapper}>
            <h4 className={classes.sideBySize}>{props.activityTitle}</h4>
            <Enlist className={classes.sideBySize2} picture= {[props.activityImg]} name = {props.activityTitle} type = {props.activityType}></Enlist>
        </div>
    </div>
}

export default Activity;
