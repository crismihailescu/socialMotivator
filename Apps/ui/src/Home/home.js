import { useState } from 'react';
import ViewActivityByType from '../App/components/ViewActivityByType';
import AddActivity from '../App/components/AddActivity';
import '../App/styles/Home.css';

const initialActivities = [
  {
    title: 'Sundin Park Cleanup',
    type: 'Outdoor',
    image: 'http://i.huffpost.com/gen/1449440/images/o-PUBLIC-PARKS-facebook.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'East Vancouver',
  },
  {
    title: 'Waikiki Beach Cleanup',
    type: 'Outdoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gotahoenorth.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fchambers_1.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Anmore, BC, Canada',
  },
  {
    title: 'Fundraising',
    type: 'Indoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbartowhistorymuseum.org%2Fwp-content%2Fuploads%2F2014%2F07%2Fbake-sale.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Port Moody',
  },
  {
    title: 'Soup Kitchen',
    type: 'Indoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fberksfoodbank.org%2Fwp-content%2Fuploads%2F2014%2F01%2FIn-line-at-soup-kitchen.jpeg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Kelowna',
  },
  {
    title: 'Volunteer Driver',
    type: 'Indoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.driving.co.uk%2Fs3%2Fst-driving-prod%2Fuploads%2F2015%2F02%2FVans.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Port Coquitlam',
  },
  {
    title: 'School Dance',
    type: 'Indoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia3.s-nbcnews.com%2Fi%2Fstreams%2F2014%2FMarch%2F140313%2F2D274905359410-today-school-dance-140312.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'North Vancouver',
  },
  {
    title: 'Retirement Party',
    type: 'Indoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixfeeds.com%2Fimages%2F22%2F529257%2F1200-535200953-retirement-party-in-office.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Hope',
  },
  {
    title: 'Childcare',
    type: 'Indoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4rfnv3jdfte8qj2229aqgj4h-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F06%2F12205709_web1_171212-CMA-M-daycare-1050x700.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Lake Cowichan',
  },
  {
    title: 'Miller Park Cleanup',
    type: 'Outdoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspokesman-recorder.com%2Fwp-content%2Fuploads%2F2019%2F05%2FAGA5310.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Coquitlam',
  },
  {
    title: 'Queens Beach Cleanup',
    type: 'Outdoor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seattle.gov%2Fimages%2FDepartments%2FParksAndRecreation%2FParks%2FABC%2FAlkiBeachPark2.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Burnaby',
  },
  {
    title: 'Paladin Beach Cleanup',
    type: 'Vancouver',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F190000%2Fvelka%2Fwhite-pine-beach.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Vancouver',
  },
  {
    title: 'Blue Mountain Park Cleanup',
    type: 'Vancouver',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.alux.com%2Fwp-content%2Fuploads%2F2014%2F09%2FBeach-Park-Fortaleza-Brasil.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Vancouver',
  },
  {
    title: 'White Pine Beach Cleanup',
    type: 'Vancouver',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJtHC-vELkUg%2Fmaxresdefault.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Vancouver',
  },
  {
    title: 'School Field Trip',
    type: 'Vancouver',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FbSOP0Qa0thIfp6L4RbQoBU8Nc3U%3D%2F2122x1415%2Ffilters%3Afill(auto%2C1)%2F77742436-56b74a515f9b5829f83813c7.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Annmore',
  },
  {
    title: 'Youth Education',
    type: 'Vancouver',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstandrewlu.org%2Fwp-content%2Fuploads%2F2018%2F08%2FYouth-Campers.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Vancouver',
  },
  {
    title: 'Event Photographer',
    type: 'Vancouver',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnewenglandrestrooms.com%2Fwp-content%2Fuploads%2F2014%2F07%2FFotolia_66660956_Subscription_Monthly_M.jpg&f=1&nofb=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum fermentum ex eget fringilla. Etiam elementum nisl vel interdum condimentum. In fringilla posuere consequat. Praesent vitae lectus lorem. Ut ullamcorper, urna sit amet vehicula dignissim, lectus nisi euismod diam, sed consectetur lacus odio ut purus.',
    location: 'Vancouver',
  },
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

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

  return (
    <div className='home-container' >
      <div className='home-body'>
        <AddActivity name={name} type={type} handleAddActivity={addActivity} onNameChange={handleNameChange} onTypeChange={handleTypeChange} />
        <ViewActivityByType activities={activities} />
        <div className='whitespace'/>
      </div>
    </div>
  );
}

export default Home;
