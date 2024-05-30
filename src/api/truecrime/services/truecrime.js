'use strict';

/**
 * truecrime service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::truecrime.truecrime');
