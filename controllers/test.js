var TestModel = require('./../models/test');
TestModel = new TestModel;

var TestController = function(app){

    this.selectTests = function(req, res){
        TestModel.selectAll().then(function(data){
            res.json(data);
        });
    };

    app.get('', this.selectTests);
    app.use('/api/tests', function(req,res){});

};

module.exports = TestController;