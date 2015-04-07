const React = require('react');
let {Link, RouteHandler} = require('react-router');
const Router = require('react-router');

let StudyBook = React.createClass({
    mixins: [Router.State],

    render() {

        let Pdf = require(`../../study-book-files/${this.getParams().id}.pdf`);

        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <Link to="study-book" params={{id: 1}}>Криволинейные интегралы</Link>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <Link to="study-book" params={{id: 2}}>Ряд Фурье</Link>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <Link to="links">Ссылки</Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <iframe src={Pdf} className="pdf-frame col-md-10">
                    Ваш браузер не поддерживает плавающие фреймы!
                </iframe>
            </div>
        );
    }
});

module.exports = StudyBook;