import React from 'react';

const StarshipsDisplay = ({ data }) => {
    // //// FIELDS //////////////////////////
    console.log(data);
    return (
        <div>
            {
                data &&
                <div>
                    <h1>Starship</h1>
                    <h4>Name: {data.name}</h4>
                    <h4>Length: {data.length}</h4>
                    <h4>Manufacturer: {data.manufacturer}</h4>
                    <h4>Passengers: {data.passengers}</h4>
                </div>
            }
        </div>
    );
}
export default StarshipsDisplay;