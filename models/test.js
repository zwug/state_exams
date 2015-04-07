var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'vagrant',
    password: 'vagrant',
    database: 'state-exam'
  }
});


var TestModel = function () {
  this.selectSingles = function () {
    return knex.select().table('single_ans');
  };

  this.selectMultiples = function () {
    return knex.select().table('multiple_ans');
  };

  this.selectCompliances = function () {
    return knex.select().table('compliance_ans');
  };

  this.selectSequences = function () {
    return knex.select().table('conseq_ans');
  };

  this.selectAdditions = function () {
    return knex.select().table('additional_ans');
  };
};

module.exports = TestModel;
