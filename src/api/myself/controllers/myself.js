'use strict';

/**
 *  myself controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::myself.myself');
