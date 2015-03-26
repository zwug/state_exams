const React = require('react');
let task2Image = require("../../exercises-files/task-2.png");
let task1Image = require("../../exercises-files/task-1.png");

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
                                        <span>Формула
                                            <img src={task1Image}/>
                                            определяет</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="1" />
                                        Ротор векторного поля
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="2" />
                                        Дивергенция векторного поля
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="3" />
                                        Циркуляция векторного поля
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="4" />
                                        Градиент скалярного поля
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Формула
                                            <img src={task2Image}/>
                                            определяет</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="1" />
                                        Криволинейный интеграл II рода
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="2" />
                                        Криволинейный интеграл I рода
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="3" />
                                        Поверхностный интеграл II рода
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="4" />
                                        Поверхностный интеграл I рода
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>При разложении четной функции в ряд Фурье</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="1" />
                                        Все коэффициенты b = 0
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="2" />
                                        Все коэффициенты a = 0
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="3" />
                                        Четные коэффициенты a = 0
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="4" />
                                        Четные коэффициенты b = 0
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" className="btn form-control btn-success" value="Подтвердить" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Exercises;