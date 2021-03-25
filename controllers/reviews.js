const axios = require('axios');
const path = 'http://3.101.119.1/';



module.exports = {

    getReviews: (req, res, next) => {
        axios(path + req.url)
            .then(({ data }) => {
                res.send(data);
                next();
            })
            .catch((err) => {
                res.status(400);
                next();
            })
    },


    getReviewsMeta: (req, res, next) => {
        axios(path + req.url)
            .then(({ data }) => {
                res.send(data);
                next();
            })
            .catch((err) => {
                res.status(400);
                next();
            })
    },


    postReviews: (req, res, next) => {
        axios(path + req.url)
            .then(({ data }) => {
                res.send(data);
                next();
            })
            .catch((err) => {
                res.status(400);
                next();
            })
    },

    updateHelpful: (req, res, next) => {
        axios(path + req.url)
            .then(({ data }) => {
                res.send(data);
                next();
            })
            .catch((err) => {
                res.status(400);
                next();
            })
    },

    updateReport: (req, res, next) => {
        axios(path + req.url)
            .then(({ data }) => {
                res.send(data);
                next();
            })
            .catch((err) => {
                res.status(400);
                next();
            })
    },
}

