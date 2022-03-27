import React from 'react';

const VehiclesDisplay = ({data}) => {

    // //// FIELDS ///////////////////////////////////////
    console.log(data);
    return (
        <div>
            { data && 
                <div>
                    <h1>Vehicle</h1>
                    <h4>Name: { data.name }</h4>
                    <h4>Model: { data.model }</h4>
                    <h4>Manufacturer: { data.manufacturer }</h4>
                    <h4>vehicle_class: { data.vehicle_class }</h4>
                </div>
            }
        </div>
    );

}
export default VehiclesDisplay;