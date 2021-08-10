import * as JsSearch from 'js-search';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Carousel from './Carousel';
import Activity from './Activity';

function Recommendation({activities, userData, pastEvents}) {

    console.log("Userlist: " + JSON.stringify(userData))
    console.log("Past events: " + JSON.stringify(pastEvents))
    console.log("Current Activities: " + JSON.stringify(activities))

    // FIX: Change once user data is being received from state
    let typeList = ['Outdoor ', 'Indoor ', 'Indoor ', 'Indoor ', 'Delivery ', 'Delivery ', 'School ', 'Indoor ', 'School ', 'School ', 'Indoor '];
    let locationList = ['Vancouver ', 'Vancouver ', 'Kelowna ', 'Vancouver ', 'East Vancouver ', 'Surrey ', 'Surrey ', 'Vancouver ', 'Kelowna ', 'Coquitlam '];
    let keywords = ['Park ', 'Cleanup ', 'Beach ', 'Cleanup ', 'Fundraising ', 'Soup ', 'Kitchen ', 'Volunteer ', 'Driver ', 'Miller ', 'Park ', 'Cleanup ', 'School ', 'Driver '];
    let groupLists = [typeList, locationList, keywords]
    let reccoList = [];
    let searchResults;
    
    // https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
    function mode(array) {
        if (array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }
    
    var search = new JsSearch.Search('title');
    search.addIndex('title');
    search.addIndex('location');
    search.addIndex('type')
    search.addIndex('desc')

    search.addDocuments(activities);

    let topKeywords = [];

    // Get top three keywords
    for (let list of groupLists) {
        for (let i = 0; i<3; i++) {
            let tempMode = mode(list)
            topKeywords.push(tempMode)
            list = list.filter(v => v !== tempMode);
        }
    }

    // Search and return reccos
    for (let item of topKeywords) {
        let tempList2 = [];
        searchResults = search.search(item)
        tempList2.push(searchResults)
        if (mode(tempList2)) {
            reccoList.push(mode(tempList2)[0])
        } else {
            reccoList.push(tempList2[0])
        }
    }

    reccoList = reccoList.filter(function (el) {
        return el != null;
      });

    return (
        <div>
            <h1>Recommended Activities:</h1>
            <Carousel show={3}>
                    {reccoList.map(item => 
                    <div style={{padding: 8}}>
                        <Activity _id={item._id} activityTitle={item.title} activityType={item.type} activityImg={item.image} activityLocation={item.location} activityDesc={item.desc} location={item.location} start = {item.start} duration = {item.duration} description = {item.desc}/>
                        </div>
                    )}
            </Carousel>
        </div>
    )
}

export default Recommendation;
