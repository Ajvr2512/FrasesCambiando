import React from 'react'
import './text.css'

const Phrases = ({text}) => {
  return (
    <div className='text'>{text.phrase}</div>
  );
};

export default Phrases;