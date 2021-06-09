import { useState } from 'react';
import ViewActivityByType from '../App/components/ViewActivityByType';

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
  ];

function Home() {
    return (
        <div>
            home

            <ViewActivityByType activities={initialActivities}/>
        </div>
    );
}

export default Home;