import React from 'react'
import { Typography, Grid, Paper} from '@mui/material';
import { Photo } from '@/app/interfaces/Photo';

const Photos = async ({params}: any) => {
    // fetch photos by album Id;

    const photosApi = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`);
    const photos: Photo[] = await photosApi.json();

    return (
        <div className="m-5">
            <div className="mb-5">
                <Typography variant="h5">Welcome to Photo Gallery</Typography>
            </div>
            <Grid container spacing={4}>
            {
                photos.map((photo: Photo) => (<Grid item xs={12} sm={4} md={4} key={photo.id}>
                    <Paper>
                        <img
                            srcSet={`${photo.url}?w=140&h=140&fit=crop&auto=format&dpr=2 2x`}
                            src={`${photo.url}?w=140&h=140&fit=crop&auto=format`}
                            alt={photo.title}
                            loading="lazy"
                        />
                        {photo.title}
                    </Paper>
                </Grid>))
            }
            </Grid>
        </div>
    )
}

export default Photos;
