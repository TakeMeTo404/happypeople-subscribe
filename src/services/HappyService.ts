import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL, DEVICE_GLOBAL_ID} from "../constants";
import {RootState} from "../store";
import {AuthState} from "../store/reducers/authSlice";

type VerifyResponseData = AuthState;
type MeResponseData = {
    my_data: {
        full_name: string,
        avatars: {
            medium: string
        } | null,
        subscription_status: "Active" | undefined,
        subscription_started_at: string
    }
}
type CardsResponseData = {
    cards: Array<{
        CardLastFour: string,
        CardType: "Visa" | "Mastercard" | string
    }>
}


export const happyApi = createApi({
    reducerPath: 'happyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        prepareHeaders: (headers, api) => {
            const token = (api.getState() as RootState).auth.token;

            if (token) headers.set('Authorization', `Bearer ${token}`);

            return headers;
        }
    }),
    endpoints: (build) => ({
        me: build.query<MeResponseData, void>({
            query: () => ({
                url: 'auth/me',
                method: 'GET'
            })
        }),
        cards: build.query<CardsResponseData, void>({
            query: () => ({
                url: 'profile/cards',
                method: 'GET'
            })
        }),
        sendSMS: build.mutation({
            query: (phone: string) => ({
                url: 'auth/lor',
                method: 'POST',
                body: {
                    phone_number: phone,
                    device_global_id: DEVICE_GLOBAL_ID,
                    device_name: "Apple iPhone X",
                    device_info: "abc",
                    os: "ios or android"
                }
            })
        }),
        verify: build.mutation<VerifyResponseData, string>({
            query: (sms_code: string) => ({
                url: `auth/${DEVICE_GLOBAL_ID}/verify`,
                method: 'POST',
                body: {
                    sms_code
                }
            })
        }),
        setName: build.mutation({
            query: (name: string) => ({
                url: `profile/set/name`,
                method: 'POST',
                body: {
                    full_name: name
                }
            })
        })
    })
});
