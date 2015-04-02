var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'vagrant',
        password : 'vagrant',
        database : 'state-exam'
    }
});


var TestModel = function () {
    this.selectAll = function () {
        return knex.select().table('single_ans');
    };
};

module.exports = TestModel;