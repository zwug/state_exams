const React = require('react');
let {Link} = require('react-router');

let HomePage = React.createClass({
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to="app">Главная</Link></li>
                                <li><Link to="inbox">Учебник</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = HomePage;