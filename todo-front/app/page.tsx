"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import UsersReactQuery from "@/app/UsersReactQuery";
import {setBaseUrl} from "@todo-api-client/react-query/api/axios-client/helpers";
import UsersAxios from "@/app/UsersAxios";

setBaseUrl('http://localhost:3000')
const queryClient = new QueryClient({
    defaultOptions: {},
})

export default async function Home() {


    return (
        <QueryClientProvider client={queryClient}>
            <UsersAxios/>
            <UsersReactQuery/>
        </QueryClientProvider>

    )
}
