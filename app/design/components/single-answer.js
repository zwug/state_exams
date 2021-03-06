const React = require('react');

let SingleAnswer = React.createClass({

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
                <input type="radio" name={"question-" + this.props.questionNum} value={index+1}
                  onChange={this.props.onchange} />
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

module.exports = SingleAnswer;
