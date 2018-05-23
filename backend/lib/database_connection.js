// This file is a connector to PostgreSQL

var promise = require('bluebird');
var settings = require('../settings.json');

var options = {
  // Initialization Options
  promiseLib: promise
};

module.exports = {
    database_connection : database_connection
}

var pgp = require('pg-promise')(options);
var connectionString = `postgres://${settings.database.user}:${settings.database.password}@${settings.database.host}:${settings.database.port}/${settings.database.name}`; //TODO: Refatorar
var db = pgp(connectionString);

function database_connection(){
    return db;
}