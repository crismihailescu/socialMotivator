import '../styles/AddActivity.css';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function AddActivity(props) {
    const dispatch = useDispatch();
    return <div>

        <div className='form-container'>
            <div className='add-activity-form'>
                <div className='add-activity-heading-container'>
                    <h3 className='add-activity-heading'>Add Activity</h3>
                </div>
                <div className='add-activity-row'>
                    <label htmlFor='name'>Activity name:</label>
                    <input value={props.name} id='name' type='text' onChange={props.onNameChange}/>
                </div>
                <div className='add-activity-row'>
                    <label htmlFor='type'>Activity type:</label>
                    <select value={props.type} onChange={props.onTypeChange}>
                        <option value='Outdoor'>Outdoor</option>
                        <option value='Indoor'>Indoor</option>
                        <option value='Group'>Group</option>
                        <option value='Solo'>Solo</option>
                    </select>
                </div>
                <div className='form-btns'>
                    <button className='form-btn' id='add-button' onClick={() => {
                        console.log("reached line 31/aa.js");
                        dispatch({
                            type: 'ADD_ACTIVITY', body: {
                                title: "test"
                            }
                        })
                    }}>Enter</button>
                </div>


            </div>
        </div>

    </div>
}

export default AddActivity;
