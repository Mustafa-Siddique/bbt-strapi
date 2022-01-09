'use strict';

/**
 * trusted-project service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trusted-project.trusted-project');
