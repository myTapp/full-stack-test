const redis = require("redis");

const client = redis.createClient({
    url: process.env.DATABASE_URL_CACHE
});

module.exports = client;