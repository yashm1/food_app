const restuarantController = require('../controllers/restaurant');
const retaurantmenuController = require('../controllers/restaurantmenu');
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the restuarant API!',
    }));

    app.post('/api/restuarant', restuarantController.create);
    app.get('/api/restuarant', restuarantController.list);
    app.post('/api/restaurant/:restaurantId/menu', retaurantmenuController.create);
};