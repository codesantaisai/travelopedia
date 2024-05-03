import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const destinationAPI = createApi({
    "reducerPath":"destinationApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
    tagTypes:["Destination"],
    endpoints:(builder)=>({
        getDestination:builder.query({
            query:()=>"destination",
            providesTags:["Destination"],
            transformResponse:(res)=>res.sort((a,b)=>b.id - a.id),
        }),
        addDestination:builder.mutation({
            query:(destination)=>({
                url:"destination",
                method:"POST",
                body:destination
            }),
            invalidatesTags:["Destination"]
        }),
        updateDestination:builder.mutation({
            query:(destination)=>({
                url:`destination/${destination.id}`,
                method:"PUT",
                body:destination
            }),
            invalidatesTags:["Destination"]
        }),
        deleteDestination:builder.mutation({
            query:({id})=>({
                url:`destination/${id}`,
                method:"DELETE",
                body:{id}
            }),
            invalidatesTags:["Destination"]
        })
    })
})

export const {useGetDestinationQuery,useAddDestinationMutation,useUpdateDestinationMutation,useDeleteDestinationMutation}  = destinationAPI;