import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className='row justify-content-center align-items-center'>
      <div className='col-md-10'>
        <img src={spinner} alt='Loading...' className='img-fluid' />
      </div>
    </div>
  );
};

export default Spinner;
