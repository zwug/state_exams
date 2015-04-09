const React = require('react');
let {Link, RouteHandler} = require('react-router');

let HomePage = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="app">Главная</Link>
                  </li>
                  <li>
                    <Link to="study-book" params={{id: 1}}>Учебник</Link>
                  </li>
                  <li>
                    <Link to="exercises">Упражнения</Link>
                  </li>
                  <li>
                    <Link to="test">Тест</Link>
                  </li>
                  <li>
                    <Link to="results">Результаты</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = HomePage;
