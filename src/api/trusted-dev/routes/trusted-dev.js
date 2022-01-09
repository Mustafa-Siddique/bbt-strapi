'use strict';

/**
 * trusted-dev router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trusted-dev.trusted-dev');
