require('./design/less/main.less');

const React = require('react');
const Router = require('react-router');
let {DefaultRoute, Route} = Router;
let App = require('./design/components/app');
let StudyBook = require('./design/components/study-book');
let Test = require('./design/components/test');
let Home = require('./design/components/home');
let Links = require('./design/components/links');
let Exercises = require('./design/components/exercises');

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="study-book" path="/study-book/:id" handler={StudyBook}/>
        <Route name="links" path="/links" handler={Links}/>
        <Route name="test" handler={Test}/>
        <Route name="exercises" handler={Exercises}/>
        <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});