var express = require('express');
const redis = require("redis");
const client = redis.createClient("redis://redis:6379");

var app = express();

app.use(express.json());

var crypto = require('crypto')
app.post('/node/sha256', function (req, res) {
    // todo save the sha256 in db
    
    let str = req.body.string
    console.log("the request body is : "+ str);
    if (str.length < 8) {
        console.error('str(' + str + ') should be at least 8 characters')
        res.status(400).json({message: 'str should be at least 8 characters'})
    } else {
        sha256d = crypto.createHash('sha256').update(str).digest('base64')
        client.set(sha256d, str, function (err) {
            //redis.print();
            console.log(err)
        });
        res.json({[str]: sha256d})
    }
    
})

app.get('/node/sha256', function (req, res) {
    // todo get un-sha256 from db
    let sha256dInReq = req.query.sha256d
    console.log("the query parameter is :"+sha256dInReq)
    client.get(sha256dInReq, function (err, str) {
        console.log("the str is: "+str);
        if (str !== null) {
            res.json({[sha256dInReq]: str})
        } else {
            //console.error('no str found for sha256d')
            res.status(404).json({message: 'no str found for this sha256d'})
        }
    })
})

var server = app.listen(8080, () => {
    console.log("Example app listening at PORT=%d", server.address().port)
})

client.on("error", function (error) {
    console.error(error);
});

