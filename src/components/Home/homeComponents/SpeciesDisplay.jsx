import React from 'react';

const SpeciesDisplay = ({data}) => {
    console.log(data);

    return(
        <div>
            {
                <div>
                    <h1>Species:</h1>
                    <h4>name:{data.name}</h4>
                    <h4>language:{data.language}</h4>
                    <h4>average_height:{data.average_height}</h4>
                    <h4>average_lifespan:{data.average_lifespan}</h4>
                </div>
            }
        </div>
    );

}

export default SpeciesDisplay;