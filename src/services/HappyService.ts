import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL, DEVICE_GLOBAL_ID} from "../constants";

export const happyApi = createApi({
    reducerPath: 'happyApi',
    baseQuery:  fetchBaseQuery({
        baseUrl: BASE_API_URL,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        prepareHeaders: (headers, {getState}) =>  {
            return headers;
        }
    }),
    endpoints: (build) => ({
        sendSMS: build.mutation({
            query: (phone_number: string) => ({
                url: 'auth/lor',
                method: 'POST',
                body: {
                    device_global_id: DEVICE_GLOBAL_ID,
                    phone_number
                }
            })
        }),
        verify: build.query({
            query: (sms_code: string) => ({
                url: `auth/${DEVICE_GLOBAL_ID}/verify`,
                method: 'POST',
                body: {
                    sms_code
                }
            })
        })
    })
});
