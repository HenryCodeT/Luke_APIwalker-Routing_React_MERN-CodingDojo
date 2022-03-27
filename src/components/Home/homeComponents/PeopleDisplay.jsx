import axios from 'axios';
import React,{ useState, useEffect } from 'react';

const PeopleDisplay = ({data}) => {
    // //// PROPS ///////////////////////////////////////////////////

    // //// FIELDS ///////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////
    const [homeWorldName, sethomeWorldName] = useState(null);
    // //// API GET /////////////////////////////////////////////////
    const getHomeWorld = async (url) => {
        try {
            const response = await axios.get(url);
            console.log("Get Home World: ",response);
            sethomeWorldName(response.data.name);
            // sethomeWorldName();

        } catch (err) {
            // Handle Error Here
            console.error("error",err);
        }
    }
    // //// USE EFFECTS ////////////////////////////////////////////////
    useEffect(() => {
        if (data) {
            getHomeWorld(data?.homeworld) 
        }
    }, [data])
    
    return(
        <div>
            <div className=''>
            <div>
                <h1>{data?.name}</h1>
                <h4>Height: {data?.height}</h4>
                <h4>Hair Color: {data?.hair_color}</h4>
                <h4>Birth Year: {data?.birth_year}</h4>
                <h4>Home World Year: {homeWorldName}</h4></div>
            </div>
        </div>
    );
}
export default PeopleDisplay;