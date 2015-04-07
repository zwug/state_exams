const React = require('react');

let MultipleAnswer = React.createClass({

  render() {
    return (
      <div className="row">
        <div className="question-block col-md-12">
          <div className="row">
            <div className="col-md-12">
              <span>{this.props.questionData.question}</span>
            </div>
          </div>
        {this.props.questionData.answers.map((answer, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-12">
                <input type="checkbox" name={"question-" + this.props.questionNum} value={index+1} />
                {answer}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
});

module.exports = MultipleAnswer;
