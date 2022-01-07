const restuarantController = require('../controllers/restaurant');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the restuarant API!',
    }));

    app.post('/api/restuarant', restuarantController.create);
};