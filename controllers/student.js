var StudentModel = require('./../models/student');
StudentModel = new StudentModel;

var StudentController = function (app) {

  this.selectTests = function (req, res) {
    StudentModel.selectAll().then(function (data) {
      res.json(data);
    });
  };


  app.get('/api/students', this.selectTests);
};

module.exports = StudentController;
