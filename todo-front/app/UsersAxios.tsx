import React from 'react';
import {useGetAllUsersQuery} from "@todo-api-client/react-query/api/axios-client/UsersControllerQuery";
import {UsersApi} from "@todo-api-client/axios";


const UsersAxios = async () => {
    const usersApi = new UsersApi({
        basePath: "http://localhost:3000", accessToken: undefined, apiKey: undefined, baseOptions: undefined, formDataCtor: undefined, password: "", username: "", isJsonMime(mime: string): boolean {
            return false;
        }
    });
    const {data} = await usersApi.usersControllerGetAllUsers()
    console.log('axios', data)
    return (
        <main className="flex flex-col items-center p-24">
            <h1>Users Axios</h1>
            <div>{data?.map(({name}) => name)}</div>
        </main>
    );
};

export default UsersAxios;