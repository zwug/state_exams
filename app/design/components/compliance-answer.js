const React = require('react');

let ComplianceAnswer = React.createClass({

  render() {

    let Imagea = require("../../study-book-files/" + this.props.questionNum + "-A.png");
    let Imageb = require("../../study-book-files/" + this.props.questionNum + "-B.png");
    let Imagec = require("../../study-book-files/" + this.props.questionNum + "-C.png");
    let Imaged = require("../../study-book-files/" + this.props.questionNum + "-D.png");

    return (
      <div className="row">
        <div className="question-block col-md-12">
          <div className="row">
            <div className="col-md-12">
              <span>{this.props.questionData.question}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-1 col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <span>А - {this.props.questionData.answers_left[0]}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <span>Б - {this.props.questionData.answers_left[1]}</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="row">
                <div className="col-md-12">
                  <img src={Imagea} />
                  (1)
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <img src={Imageb} />
                    (2)
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <img src={Imagec} />
                    (3)
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <img src={Imaged} />
                    (4)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="text" name={"question-" + this.props.questionNum} placeholder="Пример ответа: A-1 B-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ComplianceAnswer;
