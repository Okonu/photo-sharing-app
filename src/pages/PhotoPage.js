import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './photoPage.css';

function PhotoPage(props) {
    const [photo, setPhoto] = useState({});
    const [title, setTitle] = useState({});

    useEffect(() =>{
        const fetchData = async ()=>{
            const result = await axios(`/api/photos/${props.match.params.id}`);
            setPhoto(result.data);
            setTitle(result.data.title);
        };
        fetchData();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.patch(`/api/photos/${photo.id}`, {title});
        setPhoto( {...photo, title});
    };

    return (
        <div>
            <h1>Photo Page</h1>
            <img src={photo.url} alt={photo.title}/>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default PhotoPage;