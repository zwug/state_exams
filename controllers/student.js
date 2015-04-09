var StudentModel = require('./../models/student');
StudentModel = new StudentModel;

var StudentController = function (app) {

  this.selectTests = function (req, res) {
    StudentModel.selectAll().then(function (data) {
      res.json(data);
    });
  };

  this.sumMarksByTest = function (req, res) {
    StudentModel.getTotalForGroupByTest().then(function (data) {
      res.json(data);
    });
  };

  this.getGroups = function (req, res) {
    StudentModel.getAllGroups().then(function (data) {
      res.json(data);
    });
  };
  
  this.getMarksOnGroup = function(req, res) {
    StudentModel.getMarksOnGroup(req.body.group).then(function (data) {
      res.json(data);
    });
  };


  app.get('/api/students', this.selectTests);
  app.get('/api/groups', this.getGroups);
};

module.exports = StudentController;
