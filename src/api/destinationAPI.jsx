import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const destinationAPI = createApi({
    "reducerPath":"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
    endpoints:(builder)=>({
        getDestination:builder.query({
            query:()=>"destination"
        }),
        addDestination:bu
    })
})

export const {useGetDestinationQuery}  = destinationAPI;