import React from 'react'
import './Author.css'

const Author = ({penman}) => {
  return (
    <div className='Author'>{penman.author}</div>
  );
};

export default Author;