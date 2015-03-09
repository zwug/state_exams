require('./design/less/main.less');

const React = require('react');
const Router = require('react-router');
let {DefaultRoute, Link, Route, RouteHandler} = Router;
let Home = require('./design/components/home');

let routes = (
    <Route name="app" path="/" handler={Home}>
        <Route name="inbox" handler={Home}/>
        <Route name="calendar" handler={Home}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});