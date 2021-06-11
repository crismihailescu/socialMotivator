function Activity(props) {
    return <div>
        <div className='activity'>
            <h4>Activity title: {props.activityTitle}</h4>
            <h4>Activity type: {props.activityType}</h4>
            <img src={props.activityImg} />
        </div>
    </div>
}

export default Activity;