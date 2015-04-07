const React = require('react');

let AdditionalAnswer = React.createClass({

  render() {


    return (
      <div className="row">
        <div className="question-block col-md-12">
          <div className="row">
            <div className="col-md-12">
              <span>{this.props.questionData.question}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
              <div className="row">
                <div className="col-md-12">
                  <span className="cursive">{this.props.questionData.part_answer}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="text" name={"question-" + this.props.questionNum} placeholder="Ответ" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AdditionalAnswer;
