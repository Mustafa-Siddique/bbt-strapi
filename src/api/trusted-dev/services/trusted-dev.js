'use strict';

/**
 * trusted-dev service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trusted-dev.trusted-dev');
