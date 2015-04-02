const React = require('react');
let task2Image = require("../../exercises-files/task-2.png");
let task1Image = require("../../exercises-files/task-1.png");

let Hints = [
    {
        correct: 3,
        textCorrect: "Правильно",
        textWrong: "Неправильно, повторите раздел \" Формула Грина\" "
    },
    {
        correct: 2,
        textCorrect: "Правильно",
        textWrong: "Неправильно, повторите раздел \"Криволинейный интеграл первого рода\" "
    },
    {
        correct: 1,
        textCorrect: "Правильно",
        textWrong: "Неправильно, повторите раздел \"Определение ряда Фурье и принцип локализации\" "
    }
];

let Exercises = React.createClass({

    getInitialState() {
        let hintArr = [];
        for (let i = 0; i < 3; ++i) {
            hintArr.push({
                text: "",
                className: ""
            });
        }

        return {
            showHints: false,
            hints: hintArr
        };
    },
    submitAction(event) {
        event.preventDefault();
        this.setState({
            showHints: true
        });
    },

    radioChange(i, event) {
        let hintsCopy = this.state.hints;
        if (event.target.value == Hints[i].correct) {
            hintsCopy[i].text = Hints[i].textCorrect;
            hintsCopy[i].className = "bg-success";
        }
        else {
            hintsCopy[i].text = Hints[i].textWrong;
            hintsCopy[i].className = "bg-danger";
        }
        this.setState({
            hints: hintsCopy,
            showHints: false
        });
    },

    render() {

        let showHints = this.state.showHints;

        return (
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Выполните задания для проверки знаний. Если Вы ошибетесь, появится подсказка
                                    с указанем, что нужно повторить.</h3>
                            </div>
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
                                        <input type="radio" name="exercise-1" value="1" onChange={this.radioChange.bind(this, 0)} />
                                        Ротор векторного поля
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="2" onChange={this.radioChange.bind(this, 0)}/>
                                        Дивергенция векторного поля
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="3" onChange={this.radioChange.bind(this, 0)}/>
                                        Циркуляция векторного поля
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-1" value="4" onChange={this.radioChange.bind(this, 0)}/>
                                        Градиент скалярного поля
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <span className={!showHints ? "hidden" : this.state.hints[0].className} >{this.state.hints[0].text}</span>
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
                                        <input type="radio" name="exercise-2" value="1" onChange={this.radioChange.bind(this, 1)} />
                                        Криволинейный интеграл II рода
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="2" onChange={this.radioChange.bind(this, 1)}/>
                                        Криволинейный интеграл I рода
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="3" onChange={this.radioChange.bind(this, 1)}/>
                                        Поверхностный интеграл II рода
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-2" value="4" onChange={this.radioChange.bind(this, 1)}/>
                                        Поверхностный интеграл I рода
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <span className={!showHints ? "hidden" : this.state.hints[1].className} >{this.state.hints[1].text}</span>
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
                                        <input type="radio" name="exercise-3" value="1" onChange={this.radioChange.bind(this, 2)}/>
                                        Все коэффициенты b = 0
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="2" onChange={this.radioChange.bind(this, 2)}/>
                                        Все коэффициенты a = 0
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="3" onChange={this.radioChange.bind(this, 2)}/>
                                        Четные коэффициенты a = 0
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="radio" name="exercise-3" value="4" onChange={this.radioChange.bind(this, 2)}/>
                                        Четные коэффициенты b = 0
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <span className={!showHints ? "hidden" : this.state.hints[2].className} >{this.state.hints[2].text}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" className="btn form-control btn-success" value="Подтвердить"
                                onClick={this.submitAction} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Exercises;