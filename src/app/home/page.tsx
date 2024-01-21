import React from 'react'
import { User } from '../interfaces/User';
import { Album } from '../interfaces/Album';
import Home from './home';

const HomePage = async () => {

    // fetch all albums
    const albumsApi = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums: Album[] = await albumsApi.json();

    // fetch all users
    const usersApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await usersApi.json();
    
    return (
        <Home users={users} albums={albums}></Home>
    )
}

export default HomePage;
