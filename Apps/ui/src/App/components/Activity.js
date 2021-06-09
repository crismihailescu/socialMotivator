function Activity(props) {
    return <div>
        {/* <h2>This is an activity!</h2> */}
        <h4>Activity title: {props.activityTitle}</h4>
        <h4>Activity type: {props.activityType}</h4>
        <img src={props.activityImg} />
    </div>
}

export default Activity;