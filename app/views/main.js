var React = require('react');
module.exports = React.createClass({
    render: function () {
        return (
            <h1>Hello world!</h1>
        );
    }
});

React.render(<AppComponent/>, document.body);