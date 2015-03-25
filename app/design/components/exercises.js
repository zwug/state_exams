const React = require('react');


let Exercises = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <form>
                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Что такое кусочно-гладкая функция?</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-1" value="1" />
                                        При разбиении на N частей, все части ложатся на одну прямую
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-1" value="2" />
                                        Производная в любой точке этой функии равна нулю
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-1" value="3" />
                                        Дифференциируема на каждом из интервалов области определения
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-1" value="4" />
                                        Дифференциируема на некоторых интревалах области опрелеления
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Exercises;