import React from 'react';

const PlanetsDisplay = ({data}) => {
    
    console.log(data);
    return(
        <div>
            {
                data && 
                <div>
                    <h1>Planet</h1>
                    <h2>Name:{data.name}</h2>
                    <h2>Population:{data.population}</h2>
                    <h2>Diameter:{data.diameter}</h2>
                    <h2>Climate:{data.climate}</h2>
                </div>
            }
        </div>
    );

}

export default PlanetsDisplay;