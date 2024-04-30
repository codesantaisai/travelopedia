import React, { useState } from 'react'

function AddDestination() {
    const [newCity,setNewCity] = useState("");
    const [newCountry,setNewCountry] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        //add destination logic

        setNewCity('');
        setNewCountry('');
    }
  return (
    <div className='p-4 border'>
        <form onSubmit={handleSubmit}>
            <div className='row col-8 offset-2'>
                <h4>Enter the new destination</h4>
                <div className='col-5 p-1'>
                    <input 
                    type="text"
                    className='form-control'
                    placeholder='Enter City...'
                    value={newCity}
                    onChange={(e)=>setNewCity(e.target.value)}
                    />
                </div>
                <div className='col-5 p-1'>
                    <input 
                    type="text" 
                    className='form-control' 
                    placeholder='Enter Country..'
                    value={newCountry} 
                    onChange={(e)=>setNewCountry(e.target.value)}
                    />
                </div>
                <div className='col-2 p-1'>
                    <button className='btn btn-success form-control'>Add</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddDestination