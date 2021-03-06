'use strict';
const controller = require('../handlers/controller');
const middleware = require('../middleware/api-key-auth');

/**
 * Exports app routes.
 * This convention enables developers to chain CRUD operations with distinct controllers to single routes.
 * @param app express
 */
module.exports = (app) => {
    app.route('/ping').get(controller.ping).post(controller.ping);
    app.route('/:id').get(controller.getProduct);
    app.route('/').get(controller.welcome).post(middleware.validateAdminApiKey, controller.addProductByValue).post(controller.addProductByLookup);
    app.route('/products/:id').get(controller.getTopManufacturers);
};
