'use strict';

/**
 * myself service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::myself.myself');
