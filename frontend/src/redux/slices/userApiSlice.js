import { apiSlice } from "./apiSlice";

const USERS_URL='/api/auth'


export const userApiSlice=apiSlice.injectEndpoints({

    endpoints:(builder)=>({
        login: builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/signin`,
                method:'POST',
                body:data
            })
        }),

        logout: builder.mutation({
            query:()=>({
                url:`${USERS_URL}/logout`,
                method:'POST',
            })
        }),

        update: builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/profile`,
                method:'PUT',
                body:data
            })
        }),
        signup: builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/signup`,
                method:'POST',
                body:data
            })
        }),
        delete: builder.mutation({
            query:(data)=>({
                url:`${USERS_URL}/delete`,
                method:'DELETE',
                body:data
            })
        }),
    })
})

export const {useLoginMutation,useLogoutMutation,useUpdateMutation,useSignupMutation,useDeleteMutation}=userApiSlice;