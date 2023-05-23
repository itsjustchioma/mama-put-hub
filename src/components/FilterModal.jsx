import React from 'react';
import leftarrow from "/assets/left arrow.png";
import FilterTags from './FilterTags';
import Button from './Button';

export default function FilterModal({closeModal, props}) {


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white  z-[9999]">
      <div className="modal-content p-5 overflow-scroll  h-[90vh]">
       <div className='flex justify-between'> 
       <button onClick={()=> {
            closeModal(false)
        }}>
            <img src={leftarrow} className='w-4' alt="" />
        </button>

        <button className='text-sm'>
            clear all
        </button>
       </div>
       <h1 className='text-lg font-semibold'>Filter</h1>
        <FilterTags/>
      </div>
      <div className='mb-20 absolute left-0 right-0 bottom-3'>
      <Button title='Showing 87 results'/>

      </div>

    </div>
  );
}
