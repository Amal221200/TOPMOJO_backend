'use strict';

/**
 * top-10 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-10.top-10');
