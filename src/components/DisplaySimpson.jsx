import React from 'react';

function DisplaySimpson({ simpson }) {
  return (
    simpson && (
      <div className='DisplayEmployee'>
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>quote: {simpson.quote}</li>
          <li>
            Name: {simpson.character}{' '}
          </li>
          <li>
            Direction: {simpson.characterDirection}{' '}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpson;