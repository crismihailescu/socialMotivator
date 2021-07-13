import Activity from './Activity';
import '../styles/ActivityByType.css';
import Carousel from '../components/Carousel'

function ViewActivityByType(props) {

    let activityTypeList = createTypeList(props.activities);

    function createTypeList(activities) {
        let typeList = []
        for (let activity of activities) {
            if (!typeList.includes(activity.type)) {
                typeList.push(activity.type)
            }
        }
        return typeList
    }

    return <div className='activityByTypeWrapper'>

        <div>
            {activityTypeList.map((activityType) => (
            <div>
                <h1>{activityType}</h1>
                <Carousel show={3}>
                    {props.activities.filter(d => d.type ===  activityType ).map((item) => (
                            <div style={{padding: 8}}>
                                <Activity activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc}/>
                            </div>
                    ))}
                </Carousel>
            </div>
            ))}
        </div>

    </div>
}

export default ViewActivityByType;
