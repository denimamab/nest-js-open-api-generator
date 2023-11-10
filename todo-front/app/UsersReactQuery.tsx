import React, {Suspense} from 'react';
import {useGetAllUsersQuery} from "@todo-api-client/react-query/api/axios-client/UsersControllerQuery";


const UsersReactQuery = () => {
    const {data, isLoading} = useGetAllUsersQuery();
    console.log('react-query', data)
    return (
        <main className="flex flex-col items-center p-24">
            <h1>Users ReactQuery</h1>
            <Suspense fallback={<>Loading</>}>
                <div>{data?.map(({name}) => name)}</div>
            </Suspense>
        </main>
    );
};

export default UsersReactQuery;