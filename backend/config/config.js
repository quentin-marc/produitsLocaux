"use strict";
// This is the config structure filled with env variables

module.exports = {
    database: {
        // MongoDB Database Connection
        uri: process.env.DB_URL || 'mongodb://127.0.0.1/produitsLocaux',
    },
};
