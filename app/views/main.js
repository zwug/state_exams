require('./less/main.less');

var React = require('react');
var AppComponent = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <button className="btn btn-danger">lohi</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AppComponent;

React.render(<AppComponent/>, document.body);