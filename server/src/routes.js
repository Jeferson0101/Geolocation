  
const express = require('express');
const router = express.Router();

const request = require('request');

router.get('/', (req, response) => {

    request('http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=umGVVUfQH7rNFfC5Y3f5dVYQH&rt=6&stpid=7137&format=json',{headers: {"Access-Control-Allow-Origin": '*'}},
    (err, res) => {
        response.status(200).send(res.body);
    })
 })

module.exports = router;