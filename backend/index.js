const PORT = process.env.PORT || 8000;

const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const uri = 'mongodb+srv://hideAccount:Hide123@cluster0.8jv1a9b.mongodb.net/app-data?retryWrites=true&w=majority'
import Users from './models/Users';

mongoose.connect('mongodb+srv://hideAccount:Hide123@cluster0.8jv1a9b.mongodb.net/app-data?retryWrites=true&w=majority');

const UserModel = mongoose.model("users", UserSchema)

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
    const newUser = new Users({ ...req.body });
    const insertedUser = await newUser.save();
    return res.status(201).json(insertedUser);

})

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers);
    } finally {
        await client.close()
    }
})

//NODE_ENV === production

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
} else {

    //set static folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });

    /* app.get('/', (req, res) => {
     res.send('api is runing...')
     });*/
}

app.listen(PORT, () => console.log('server running on port' + PORT));