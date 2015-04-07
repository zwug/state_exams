var TestModel = require('./../models/test');
TestModel = new TestModel;

var TestController = function (app) {

  this.selectTests = function (req, res) {
    var result = {};
    TestModel.selectSingles().then(function (data) {
      result.singleAnswer = data;
    });

    TestModel.selectMultiples().then(function (data) {
      result.multipleAnswer = data;
    });

    TestModel.selectCompliances().then(function (data) {
      result.complianceAnswer = data;
    });

    TestModel.selectSequences().then(function (data) {
      result.conseqAnswer = data;
    });

    TestModel.selectAdditions().then(function (data) {
      result.additionalAnswer = data;
    }).then(function () {
      res.json(result);
    });
  };

  app.get('/api/tests', this.selectTests);
};

module.exports = TestController;
