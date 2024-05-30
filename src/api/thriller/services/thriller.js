'use strict';

/**
 * thriller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thriller.thriller');
