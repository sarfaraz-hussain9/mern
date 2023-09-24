import { apiSlice } from "./apiSlice";

const USERS_URL='/api/auth'

export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/signin`,
                method:'POST',
                body:data
            })
        })
    })
})

export const {useLoginMutation}=userApiSlice;