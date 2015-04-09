var knex = require('./db-conf');


var StudentModel = function () {
  this.selectAll = function () {
    return knex.select().table('student');
  };


};

module.exports = StudentModel;
