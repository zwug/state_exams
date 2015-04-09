const React = require('react');

let ConseqAnswer = React.createClass({

  render() {

    let Imagea = require("../../study-book-files/" + this.props.questionNum + "-A.png");
    let Imageb = require("../../study-book-files/" + this.props.questionNum + "-B.png");
    let Imagec = require("../../study-book-files/" + this.props.questionNum + "-C.png");

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
                   (А)
                  <img src={Imagea} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                   (Б)
                    <img src={Imageb} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12">
                    (В)
                    <img src={Imagec} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input type="text" name={"question-" + this.props.questionNum} placeholder="Пример ответа: А,Б,В" onChange={this.props.onchange}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ConseqAnswer;
