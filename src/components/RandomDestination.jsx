import React from 'react'
import { useGetRandomDestinationQuery } from '../api/randomDestinationApi'

function RandomDestination() {
    const {data,isLoading,isError,isSuccess,error}  = useGetRandomDestinationQuery()

    let content;
    console.log(data);
    if(isLoading){
        content = <p>Loading....</p>
    }else if(isSuccess){
        content = (
            <div className='text-center border p-3'>
                <h4 className='text-success'>Random Travel Suggestion:</h4>
                {data.city}, {data.country}, {data.id}
            </div>
        )
    }else if (isError){
        content = <p>{error}</p>
    }
  return (
    <div className='pt-3'>{content}</div>
  )
}

export default RandomDestination