require('./design/less/main.less');

const React = require('react');
const Router = require('react-router');
let {DefaultRoute, Route} = Router;
let App = require('./design/components/app');
let StudyBook = require('./design/components/study-book');
let Home = require('./design/components/home');

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="study-book" path="/study-book/:id" handler={StudyBook}/>
        <Route name="calendar" handler={StudyBook}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});