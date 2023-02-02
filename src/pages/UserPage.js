import React, { useState, useEffect } from 'react';

function UserPage({ userId}) {
    const [user, setUser ] = useState ([]);
    const [albums, setAlbums] = useState ([]);
    const [error, setError] = useEffect (null);

    useEffect(() => {
        fetch('/api/users/${userId}')
        .then(res => res.json())
        .then(user => {
            setUser(user);
            return fetch('/api/users/${userId}/albums');
        })
        .then(res => res.json())
        .then(albums => setAlbums(albums))
        .catch(err => setError);
    }, [userId]);

    if(error){
        return <p>An Error Occured: {error.message}</p>;
    }

    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <h2>Albums</h2>
            <ul>{albums.map(album =>(<li key={album.id}>{album.title}</li>))}</ul>
        </div>
    )
}

export default UserPage;