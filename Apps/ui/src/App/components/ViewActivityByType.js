import Activity from './Activity';
import { useState } from 'react';

function ViewActivityByType(props) {

    const [selectedActivity, setSelectedActivity] = useState('Outdoor');

    function handleSelectionChange(event) {
        setSelectedActivity(event.target.value);
    }

    return <div>
        <h2>View activity by type</h2>
        <h2>Select from activity types: </h2>

        <select value={selectedActivity} onChange={handleSelectionChange}>
            <option value='Outdoor'>Outdoor</option>
            <option value='Indoor'>Indoor</option>
            <option value='Group'>Group</option>
            <option value='Solo'>Solo</option>
        </select>

        <h1>{selectedActivity}</h1>

        <ul>
            {/* {props.activities.filter(d => d.type === { selectedActivity }).map((item) => ( */}
            {props.activities.filter(d => d.type === 'Outdoor').map((item) => (
                <li key={item.title}>
                    <Activity activityTitle={item.title} activityType={item.type} activityImg={item.image}/>
                </li>
            ))}
        </ul>


    </div>
}

export default ViewActivityByType;