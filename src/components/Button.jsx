import React from 'react';

export default function Button(props) {
  return (
    <div className='bg-pastel-pink text-white p-3 rounded-3xl text-center text-sm'>
      {props.title}
    </div>
  );
}
