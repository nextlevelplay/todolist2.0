const mongoose = require('mongoose')
const express = require('express');
const path = require('path');
const schema = require('./schema')
const app = express();
const PORT = process.env.PORT || 3000



app.use('/', express.static(__dirname + '/'));

//ROUTES GET
app.get('/', function (req, res) {
    res.status(200)
    res.sendFile(__dirname + 'index.html')
})


//CONNECT MONGODB
async function start() {
    try {
        await mongoose.connect('mongodb+srv://getlost:q1w2e3r4@cluster0.6yn1s.mongodb.net/list', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server has been started at http://localhost on ${PORT} port...`)
        })

    } catch (e) {
        console.log(e)
    }
}


start()






