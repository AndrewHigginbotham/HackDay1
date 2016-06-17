var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/quotes';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllQuotes: getAllQuotes,
  getSingleQuote: getSingleQuote,
  createQuote: createQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
};