import { useState } from 'react';
import ViewActivityByType from '../App/components/ViewActivityByType';

const initialActivities = [
    {
      title: 'ParkCleanup',
      type: 'Outdoor',
    },
    {
      title: 'BeachCleanup',
      type: 'Outdoor',
    },
    {
      title: 'Fundraising',
      type: 'Indoor',
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