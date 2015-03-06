var React = require('react');
var AppComponent = React.createClass({
    render: function () {
        return (
            <h1>Hello worldy!</h1>
        );
    }
});

module.exports = AppComponent;

React.render(<AppComponent/>, document.body);