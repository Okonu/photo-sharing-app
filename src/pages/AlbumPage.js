import React, {useState, useEffect } from "react";
import axios from "axios";

function AlbumPage({match}) {
    const [album, setAlbum ] = useState({});
    const [photos, setPhotos] = useState({});

    useEffect(() => {
        const fetchAlbum = async () => {
            const {data: album } = await axios.get(`/api/albums/${match.params.albumId}`);
            setAlbum(album);
        };

        const fetchPhotos = async () => {
            const {data: photos} = await axios.get(`/api/albums/${match.params.albumId}/photos`);
            setPhotos(photos);
        };

        fetchAlbum();
        fetchPhotos();
    }, [match.params.albumId]);

    return (
        <div>
            <h1>{album.title}</h1>
            <p>{album.description}</p>
            <h2>Photos</h2>
            <ul>
                {photos.map(photos => (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.title} />
                        {photos.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumPage;