var knex = require('./db-conf');


var TestModel = function () {

  var self = this;

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

  this.saveStudentResults = function(data){
    knex('student').where({
      first_name: data.student.name,
      last_name:  data.student.lastname,
      study_group: data.student.studyGroup
    }).select('id').then(function(res){
      if(!res.length){
        knex('student').insert({
          first_name: data.student.name,
          last_name:  data.student.lastname,
          study_group: data.student.studyGroup
        }).returning('id').then(function(id){
          self.saveTest(id[0], data);
        })
      }
      else{
        self.saveTest(res[0].id, data);
      }
    })
  };

  this.saveTest = function(studentId, data){
    knex('test_results').where({
      student_id: studentId
    }).select('id').then(function(res){

      if (!res.length){
        var query = "INSERT INTO test_results (student_id, results, total) VALUES (" + studentId + ", '{ " +
          data.results + "}', " + data.totalMark + ")";
        knex.raw(query).then(function(){
          console.log('Inserted into test_results');
        });
      }
    })
  }
};

module.exports = TestModel;
