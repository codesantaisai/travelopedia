import { useGetDestinationQuery } from '../api/destinationAPI'
import Destination from './Destination';

function DestinationList() {
    const {data,isLoading,isError,isSuccess,error} = useGetDestinationQuery();
    let content;
    if(isLoading){ 
    content= <p>Loading....</p>
  }else if(isSuccess){
    content = data.map((destination)=>{
        return(
          <Destination destination={destination} key={destination.id}/>
        )
    })
  }else if(isError){
    content = <p>{error.message}</p>
  }
    
    
      return (
        <div className='pt-3'>{content}</div>
      )
    

}

export default DestinationList