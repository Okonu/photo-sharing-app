const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());

//mongodb connect
mongoose.connect('mongodb://localhost:27017/photobase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//user model
const User = mongoose.model('User', {
    email: String,
    password: String   
});

//album model
const Album = mongoose.model('Album', {
    title: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

//photo model
const Photo = mongoose.model('Photo',{
    title: String,
    url: String,
    albumId: {
        type: mongoose.Types.ObjectId,
        ref: 'Album'
    }
});

//Auth endpoint
app.post('/authenticate', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});

    if (!user) {
        return res.status(401).send({error: 'Incorrect email or password'});
    }

    const token = jwt.sign({id: user._id}, 'secret-key');

    res.send({token});
});

//Get all users endpoint
app.get('/users', async (req, res) => {
    const users = await User.find().populate({
        path: 'albums',
        model: 'Album'
    });

    res.send(users);
});

// get user by ID endpoint
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id).populate({
        path: 'albums',
        model: 'Album'
    });

    res.send(user);
});

//get album by ID endpoint
app.get('albums/:id', async (req, res) => {
    const album = await Album.findById(req.params.id).populate({
        path: 'photos',
        model: 'Photo'
    });

    res.send(album);
});

//get photo by ID endpoint
app.get('/photos/:id', async (req, res) => {
    const photo = await Photo.findById(req.params.id);

    res.send(photo);
});

//update photo title endpoint
app.put('/photos/:id', async (req, res) => {
    const { id } = req.params;
    const { title} = req.body;

    Photo.findByIdAndUpdate(id, {title}, (err, photo) => {
        if (err) {
            return res.status(500).send({ error: 'Error while trying to update photo' });
        }
         return res.status(200).send({message: 'Photo updated successfully', photo});
    });
    // const photo = await Photo.findByIdUpdate(req.params.id, {
    //     title: req.body.title
    // }, {new: true});

    // res.send(photo);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});