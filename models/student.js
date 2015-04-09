var knex = require('./db-conf');


var StudentModel = function () {
  this.selectAll = function () {
    return knex.table('student').innerJoin('test_results', 'test_results.student_id', 'student.id');
  };

  this.getTotalForGroupByTest = function () {
    return knex.table('student').innerJoin('test_results', 'test_results.student_id', 'student.id');
  };

  this.getMarksOnGroup = function(group) {
    return knex.table('student').innerJoin('test_results', 'test_results.student_id', 'student.id')
      .where({study_group: group});
  };

  this.getAllGroups = function () {
    return knex.table('student').select('study_group').groupBy('study_group');
  };

};

module.exports = StudentModel;
