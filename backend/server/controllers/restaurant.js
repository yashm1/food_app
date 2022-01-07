const restaurant = require('../models').restaurant;

module.exports = {
    create(req, res) {
        return restaurant
            .create({
                title: req.body.title,
            })
            .then(restaurant => res.status(201).send(restaurant))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return restaurant
            .all()
            .then(restaurant => res.status(200).send(restaurant))
            .catch(error => res.status(400).send(error));
    },

};