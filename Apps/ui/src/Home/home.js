import { useState } from 'react';
import ViewActivityByType from '../App/components/ViewActivityByType';
import Activity from '../App/components/Activity';
import Carousel from '../App/components/Carousel';

const initialActivities = [
  {
    title: 'Park Cleanup',
    type: 'Outdoor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Veale_Gardens.JPG/330px-Veale_Gardens.JPG',
  },
  {
    title: 'Beach Cleanup',
    type: 'Outdoor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/YBF_2010_-_Bikini_Bar_perjantaina.jpg/330px-YBF_2010_-_Bikini_Bar_perjantaina.jpg',
  },
  {
    title: 'Fundraising',
    type: 'Indoor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hand_holding_a_red_fundraising_box.jpg/330px-Hand_holding_a_red_fundraising_box.jpg',
  },
  // {
  //   title: 'Park Cleanup2',
  //   type: 'Outdoor',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Veale_Gardens.JPG/330px-Veale_Gardens.JPG', 
  // },
  // {
  //   title: 'Beach Cleanup2',
  //   type: 'Outdoor',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/YBF_2010_-_Bikini_Bar_perjantaina.jpg/330px-YBF_2010_-_Bikini_Bar_perjantaina.jpg', 
  // },
];


function Home() {
  const [activities, setList] = useState(initialActivities);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const default_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/330px-Larix_decidua_Aletschwald.jpg';

  function addActivity() {
    const newList = activities.concat({ name, type, default_img });
    setList(newList);
    console.log(newList);
  }

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleTypeChange(event){
    setType(event.target.value);
  }

  return (
    <div>
      home
      <Activity name={name} type={type} handleAddActivity={addActivity} onNameChange={handleNameChange} onTypeChange={handleTypeChange}/>
      <ViewActivityByType activities={initialActivities} />
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64}}>
            <Carousel show={3}>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            <div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                </div>
            </div>
            </Carousel>
        </div>
    </div>
  );
}

export default Home;
