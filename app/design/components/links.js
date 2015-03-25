const React = require('react');


let StudyBook = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-3 col-md-7">
                    <div class="row">
                        <a href="http://www.alleng.ru/d/math-stud/math-st854.htm">Вся высшая математика. Том 1-7.  Краснов М.Л., Киселев А.И. и др.</a>
                    </div>
                    <div class="row">


                        <a href="http://www.for-stydents.ru/matematika/uchebniki/kurs-matematicheskogo-analiza-tom-2.html">Курс математического анализа. Том 2</a>
                    </div>
                    <div class="row">
                        <a href="http://www.twirpx.com/file/998531/">Мельников Д.А., Неклюдов А.В., Титов К.В. Криволинейные и
                            поверхностные интегралы</a>
                    </div>
                    <div class="row">
                        <a href="http://www.twirpx.com/file/998579/">Соболев С.К., Ильичев А.Т. Исследование и построение плоских кривых, заданных параметрически и в полярных координатах</a>
                    </div>
                    <div class="row">
                        <a href="http://www.alleng.ru/d/math/math361.htm">Кратные и криволинейные интегралы. Элементы теории поля. Гаврилов В.Р., Иванова Е.Е., Морозова В.Д. </a>
                    </div>
                    <div class="row">
                        <a href="http://www.ph4s.ru/book_mat_ryady.html">Литература про ряды Фурье</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = StudyBook;