'use client'

import React, {useState} from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel,
    Radio, MenuItem, InputLabel, Select, Typography, Button  } from '@mui/material';
import { User } from '../interfaces/User';
import { Album } from '../interfaces/Album';
import { useRouter } from 'next/navigation';
import NavBar from '../components/navBar';


const View_Photos_By = {
    ALBUMS: 'albums',
    ARTISTS: 'artists',
};

const Home = ({users, albums}: any) => {
    const router = useRouter();
    const [viewPhotosBy, setViewPhotosBy] = useState();
    const [selectedArtistsAlbums, setSelectedArtistsAlbums] = useState([]);
    const [albumId, setAlbumId] = useState();
    const albumUrlWithId = `photos/${albumId}`;

    const onUsersChanged = (event: any) => {
        const userId = event.target.value;
        setSelectedArtistsAlbums(albums.filter((album: Album) => album.userId === userId));
    };

    return (
        <>
            <NavBar />
            <div className="pt-10 m-10">
                <FormControl>
                    <FormLabel className="text-3xl font-bold">View Photos By:</FormLabel>
                    <RadioGroup
                        name="radio-buttons-group"
                        value={viewPhotosBy}
                        onChange={(event: any) => setViewPhotosBy(event.target.value)}
                    >
                        <FormControlLabel value="albums" control={<Radio />} label="Albums" />
                        <FormControlLabel value="artists" control={<Radio />} label="Artists" />
                    </RadioGroup>
                </FormControl>
                <div className="mt-5">
                    {
                        (viewPhotosBy === View_Photos_By.ALBUMS) ? 
                        <>
                            <Typography>Choose Album: </Typography>
                            <FormControl fullWidth>
                                <InputLabel>Albums</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-label"
                                    label="Album"
                                    onChange={(event: any) => setAlbumId(event.target.value)}
                                >
                                    {albums.map((album: Album) => (<MenuItem key={album.id} value={album.id}>{album.title}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </> : (viewPhotosBy === View_Photos_By.ARTISTS) ?
                        <>  
                            <Typography>Choose User: </Typography>
                            <FormControl fullWidth>
                                <InputLabel>Artists</InputLabel>
                                <Select
                                    required
                                    labelId="demo-simple-select-label"
                                    label="Artists"
                                    onChange={onUsersChanged}
                                >
                                    {users.map((user: User) => (<MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>))}
                                </Select>
                            </FormControl>

                            <div className="mt-5">
                                <Typography>Choose Album From Above User: </Typography>
                                <FormControl fullWidth>
                                    <InputLabel>Selected Artists Albums</InputLabel>
                                    <Select
                                        required
                                        labelId="demo-simple-select-label"
                                        label="Selected Artists Albums"
                                        onChange={(event: any) => setAlbumId(event.target.value)}
                                    >
                                        {selectedArtistsAlbums.map((album: Album) => (<MenuItem key={album.id} value={album.id}>{album.title}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </div>
                        </> : <> </>
                    }
                </div>
                <div className="mt-8">
                    <Button variant="contained" onClick={() => router.push(albumUrlWithId)}>View Photos</Button>
                </div>
            </div>
        </>
    )
}

export default Home;
