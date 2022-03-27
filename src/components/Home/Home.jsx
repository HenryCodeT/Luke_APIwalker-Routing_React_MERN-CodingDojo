import axios from 'axios';
import React, { useState } from 'react';
import ErrorPage from '../ErrorPages/ErrorPage';
import FilmsDisplay from './homeComponents/FIlmsDisplay';
import PeopleDisplay from './homeComponents/PeopleDisplay';
import PlanetsDisplay from './homeComponents/PlanetsDisplay';
import SpeciesDisplay from './homeComponents/SpeciesDisplay';
import StarshipsDisplay from './homeComponents/StarshipsDisplay';
import VehiclesDisplay from './homeComponents/VehiclesDisplay';

const Home = (props) => {

    // //// FIELDS ////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    const [category, setCategory] = useState("people");
    const [category1, setCategory1] = useState(null);
    const [id, setId] = useState(0);
    const [resultResponse, setResultResponse] = useState(null);
    // //// 0 = No Query | 1 = Success Query | 2 = Error 
    const [statusResponse, setStatusResponse] = useState(0);

    // //// HANDLES AND SETTERS //////////////////////////////////////////////////////////
    const handleOnChange = (e) => {
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }
        if (e.target.name === "id") {
            setId(e.target.value);
        }
    }
    const handleOnClick = async (e) => {
        e.preventDefault();
        
        const result = await getResponseFromAPI(category,id);
        
        console.log(result.data);
        setResultResponse(result.data);
    }
    
    // //// API AXIOS GET //////////////////////////////////////////////////////////////////////
    const getResponseFromAPI = async (category,id) =>{
        try {
            const response = await axios.get(`https://swapi.dev/api/${category}/${id}`)
            console.log(response);
            setCategory1(category);
            setStatusResponse(1);
            return response;
        } catch (error) {
            setStatusResponse(2);
            console.error("error :",error);
        }
    }

    // //// Display SWitch //////////////////////////////////////////////////////////////////////
    const display = () => {
        switch(category1) {
          case 'people':
            return <PeopleDisplay data = {resultResponse}/>
          case 'films':
            return <FilmsDisplay data={resultResponse}/>
          case 'starships':
            return <StarshipsDisplay data={resultResponse}/>
          case 'vehicles':
            return <VehiclesDisplay data={resultResponse}/>
          case 'planets':
            return <PlanetsDisplay data = {resultResponse}/>
          case 'species':
            return <SpeciesDisplay data = {resultResponse}/>
          default:
            return <div className="pt-3 container"><h3>We cannot display {category} </h3></div>
        }
      }

    return (
        <div className='col-8 mx-auto'>
            <h1>Home</h1>
            <form className='row' onSubmit={handleOnClick}>
                <div className='col mx-2'>
                    <div className='row align-items-center'>
                        <label className='col'>Search For:</label>
                        <select className='col form-select border border-dark' value={category} onChange={handleOnChange} name="category">
                            <option value="people">🧑 People</option>
                            <option value="films">📽 Films</option>
                            <option value="starships">✈ Starships</option>
                            <option value="vehicles">🛸 Vehicles</option>
                            <option value="planets">🌎 Planets</option>
                            <option value="species">🐉 Species</option>
                        </select>
                    </div>
                </div>
                <div className='col mx-2'>
                    <div className="row form-group align-items-center">
                        <label className="col" htmlFor="id">ID:</label>
                        <input className="col form-control border border-dark" onChange={handleOnChange} type="number" name="id" value={id} />
                    </div>
                </div>
                <button className='col-2 btn btn-success mx-3' type='submit' value='Submit'>Search:</button>
            </form>
            <hr />
            {
                (statusResponse === 1) ? display() : (statusResponse === 2) ? < ErrorPage /> : <h3>Search to display</h3>
            }
        </div>
    );
}
export default Home;