import React from 'react';

interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
    website: string;
}

const UsersPage = async () => {
    const usersApi = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await usersApi.json();

    return (
        users.map((user: User) => <div key={user.id}>{user.id} {user.name}</div>)
    )
}

export default UsersPage;
