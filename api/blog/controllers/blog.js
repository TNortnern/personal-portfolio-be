"use strict";
const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
 async find() {
    const { data } = await axios.get(
      "https://dev.to/api/articles/me/published",
      {
        headers: {
          api_key: process.env.DEV_TO_API_KEY,
        },
      }
    );
    return data
  },
};
