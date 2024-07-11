'use strict';

/**
 * event-time-slot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-time-slot.event-time-slot');
