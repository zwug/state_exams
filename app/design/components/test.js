const React = require('react');
let Image5a = require("../../study-book-files/5-A.png");
let Image5b = require("../../study-book-files/5-B.png");
let Image5c = require("../../study-book-files/5-C.png");
let Image5d = require("../../study-book-files/5-D.png");


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
                                        <span>Кусочно-гладкая функция это функция, которая</span>
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
                                        В любой точке имеет производную, равную нулю
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
                                        <span>Выберите две функции, свойство ортогональности которых используется в ряде Фурье</span>
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

                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Соотнесите значения с формулами</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-7">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span>длина кривой</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span>площадь поверхности вращения</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span>площадь цилиндрической поверхности</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span>масса материально линии</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img src={Image5a} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="col-md-12">
                                                    <img src={Image5b} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="col-md-12">
                                                    <img src={Image5c} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="col-md-12">
                                                    <img src={Image5d} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" name="question-5" placeholder="Пример ответа: A-1 B-2 C-3 D-4" />
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