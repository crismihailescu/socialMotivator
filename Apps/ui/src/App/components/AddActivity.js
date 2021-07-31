import '../styles/AddActivity.css';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';



function AddActivity(props) {
    const dispatch = useDispatch();
    const acts = useSelector(state => state.activities);
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
                        props.handleAddActivity();
                        dispatch({
                            type: 'ADD_ACTIVITY', body: {
                                title: props.name,
                                type: props.type,
                                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixfeeds.com%2Fimages%2F22%2F529257%2F1200-535200953-retirement-party-in-office.jpg&f=1&nofb=1',
                            }
                        })
                    }}>Enter</button>
                </div>


            </div>
        </div>

    </div>
}

export default AddActivity;
