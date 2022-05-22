import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {

  return <sectiom>
    <div className='title'>
      <h2>tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour)=>{
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </div>
  </sectiom>
};

export default Tours;
