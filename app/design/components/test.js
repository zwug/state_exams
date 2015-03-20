const React = require('react');
require("../../study-book-files/5-A.png");


let Test = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
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

                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Свойство ортогональности каких двух функций используется в ряде Фурье?</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-2" value="1" />
                                        sin, cos
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-2" value="2" />
                                        tg, ctg
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-2" value="3" />
                                        sh, ch
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="question-2" value="4" />
                                        1/e, e
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Выберите свойства, относящиеся к интегралам по кривой</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-3" value="1" />
                                        аналитичность
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-3" value="2" />
                                        ортогональность
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-3" value="3" />
                                        линейность
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-3" value="4" />
                                        аддитивность
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Выберите теоремы, относящиеся к интегралам по кривой</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-4" value="1" />
                                        об оценке
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-4" value="2" />
                                        Вейерштраса
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-4" value="3" />
                                        о среднем
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="question-4" value="4" />
                                        Римана об осцилляции
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

module.exports = Test;