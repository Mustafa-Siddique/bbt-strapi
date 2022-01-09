'use strict';

/**
 *  trusted-dev controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trusted-dev.trusted-dev');
