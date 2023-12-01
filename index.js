const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/api/users', (req, res) => {
    res.json({
        username: 'fcc_test',
        _id: '5fb5853f734231456ccb3b05'
    })
});

app.post('/api/users', (req, res) => {
    res.json({
        username: req.body.username,
        _id: req.body._id
    })
})

app.get('/api/users/:_id/logs', (req, res) => {
    res.json({
        _id: req.params._id,
        username: req.body.username,
        count: req.body.count,
        log: req.body.log
    })
})

app.post('/api/users/:_id/exercises', (req, res) => {
    res.json({
        _id: req.params._id,
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    })
})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port http://localhost:' + listener.address().port)
})
