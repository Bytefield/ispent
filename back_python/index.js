const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const options = {
    key: fs.readFileSync('/app/key.pem', 'utf8'),
    cert: fs.readFileSync('/app/cert.pem', 'utf8'),
    passphrase: process.env.PEM_PASSPHRASE
};

require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const AUTH = DB_USER + ':' + DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://' + AUTH + '@papi-cluster.fvf7ydk.mongodb.net/' + DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB database');
});

// const itemSchema = require('./schemas/item');
const Items = mongoose.model('Items', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ean: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    allergens: {
        type: String,
        default: ''
    },
    ingredients: {
        type: String,
        default: ''
    },
    thumbnail: {
        type: String,
        default: ''
    }
}));

// Items
// GET > All
app.get(
    '/items',
    async (req, res) => {
        try {
            res.header('Access-Control-Allow-Origin', '*');
            const data = await Items.find();
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    }
);
//POST
app.post(
    '/postItem',
    async(req, res) => {
        try {
            const item = new Item({
                name: req.body.name,
                description: req.body.description,
                ean: req.body.ean,
                brand: req.body.brand,
                allergens: req.body.allergens,
                ingredients: req.body.ingredients,
                thumbnail: req.body.thumbnail,
            });

            await product.save();
            res.status(201).json(item);

        } catch(error) {
            res.status(500).send('error: ' + error);
        }
    }
);

// Initializer
https.createServer(options, app).listen(3000, () => {
    console.log('API listening on port 3000 (HTTPS)');
});