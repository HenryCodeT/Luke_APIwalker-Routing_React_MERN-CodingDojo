import React from 'react';

const FilmsDisplay = ({data}) => {
    // //// PROPS ///////////////////////////////////////////////////
    console.log(data);
    // //// FIELDS ///////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////
    
    return(
        <div>
            <div className=''>
                <h1>Film: {data?.title}</h1>            
                <h4 className='text-start'>Producer: {data?.producer}</h4>            
                <h4 className='text-start'>Director: {data?.director}</h4>            
                <h4 className='text-start'>Opening Crawl: {data?.opening_crawl}</h4>            
            </div>
        </div>
    );
}
export default FilmsDisplay;