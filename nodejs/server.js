var express = require('express');
var app = express();

var sha256d = ''
var crypto = require('crypto')
app.post('/node/sha256', function (req, res) {
    // todo save the sha256 in db
    let str = req.headers.str
    if (str.length < 8) {
        console.error('str(' + str + ') should be at least 8 characters')
        res.status(400).send({message: 'str should be at least 8 characters'})
    } else {
        sha256d = crypto.createHash('sha256').update(str).digest('base64')
        console.log('hashed ' + str + ' = ' + sha256d)
        res.json({result: sha256d})
    }
})

app.get('/node/sha256', function (req, res) {
    // todo get un-sha256 from db
})

var server = app.listen(8081, () => {
    console.log("Example app listening at PORT=%d", server.address().port)
})
