const React = require('react');


let Test = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <form>
                        <div className="row">
                            <div className="question-block col-md-12">
                                <div className="row">
                                    <span>Что такое кусочно-гладкая функция?</span>
                                </div>
                                <div className="row">
                                    <input type="radio" name="question-1" value="1" />
                                </div>
                                <div className="row">
                                    <input type="radio" name="question-1" value="2" />
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