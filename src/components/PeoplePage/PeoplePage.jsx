import React,{ useState, useEffect } from 'react';
import axios from "axios";
import ErrorPage from '../ErrorPages/ErrorPage';


const PeoplePage = (props) => {
    console.log("person id: ",typeof(props.match.params.personId),props.match.params.personId);
    // //// FIELDS ///////////////////////////////////////////////////
    let initialPeopleInfo = {
        personName:'',
        height:'',
        hairColor:'',
        birthYear:'',
        homeWorld:''
    }    

    const [peopleInfo, setPeopleInfo] = useState(initialPeopleInfo)
    const [error, setError] = useState(false);

    const getHomeWorld = async (url) => {
        try {
            const response = await axios.get(url);
            console.log("Get Home World: ",response.data);
            
            setPeopleInfo(prevPeopleInfo => ({
                ...prevPeopleInfo,
                homeWorld:response.data.name
            }));

        } catch (err) {
            // Handle Error Here
            console.error("error",err);
        }
    }

    const getPeopleById = async (personId) => {
        try {

            const response = await axios.get("https://swapi.dev/api/people/" + personId);
            console.log("Response: ",response);
            console.log("Get people by id: ",response.data);
            console.log("URL Homeworld: ",response.data.homeworld);
            console.log("Data: ",response.data.height);
            
            getHomeWorld(response.data.homeworld);
            
            setPeopleInfo(prevPeopleInfo => ({
                ...prevPeopleInfo,
                personName:response.data.name,
                height:response.data.height,
                hairColor:response.data.hair_color,
                birthYear:response.data.birth_year
            }));   

        } catch (err) {
            //Handle Error Here
            setError(true)
            console.error("error",err);
        }
    }
    useEffect(() => getPeopleById(props.match.params.personId),[]);
    

    return(
        <div className='text-center'>
            {
                error ? 
                <ErrorPage/>
                : <div><h1>{peopleInfo.personName}</h1>
                <h4>Height: {peopleInfo.height}</h4>
                <h4>Hair Color: {peopleInfo.hairColor}</h4>
                <h4>Birth Year: {peopleInfo.birthYear}</h4>
                <h4>Home World Year: {peopleInfo.homeWorld}</h4></div>
            }
        </div>
    );
}
export default PeoplePage