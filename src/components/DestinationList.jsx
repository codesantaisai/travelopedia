import React from 'react'
import { useGetDestinationQuery } from '../api/destinationAPI'

function DestinationList() {

    const {data,isLoading,isError,isSuccess,error} = useGetDestinationQuery();
    let content;
    if(isLoading){
        content =<p>Loadig...</p>
    }else if(isSuccess){
        console.log(data);
        content = <p>Success...</p>
    }
    
  return (
    <div className='pt-3'>{content}</div>
  )
}

export default DestinationList