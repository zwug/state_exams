const React = require('react');
let $ = require('jquery');

const SingleAnswer = require('./single-answer');
const MultipleAnswer = require('./multiple-answer');
const ComplianceAnswer = require('./compliance-answer');
const ConseqAnswer = require('./conseq-answer');
const AdditionalAnswer = require('./additional-answer');

let Test = React.createClass({

  componentDidMount: function () {
    $.ajax({
      url: '/api/tests',
      dataType: 'json',
      success: function (data) {
        this.setState({questionData: data, totalMark: 0, answers: {} });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  singleChange(i, event) {
    let answers = this.state.answers;
    let singleArr = [];
    singleArr[i] = event.target.value;
    answers.singleArr = singleArr;
    this.setState({
      answers: answers
    });
  },
  
  render() {
    let questionList = '';
    if(this.state){
      questionList =
        <form>
          <SingleAnswer questionData={this.state.questionData.singleAnswer[0] } questionNum={1} onchange={this.singleChange.bind(this, 0)}/>
          <SingleAnswer questionData={this.state.questionData.singleAnswer[1] } questionNum={2} onchange={this.singleChange.bind(this, 1)}/>
          <MultipleAnswer questionData={this.state.questionData.multipleAnswer[0] } questionNum={3} />
          <MultipleAnswer questionData={this.state.questionData.multipleAnswer[1] } questionNum={4} />
          <ComplianceAnswer questionData={this.state.questionData.complianceAnswer[0] } questionNum={5} />
          <ComplianceAnswer questionData={this.state.questionData.complianceAnswer[1] } questionNum={6} />
          <ConseqAnswer questionData={this.state.questionData.conseqAnswer[0] } questionNum={7} />
          <ConseqAnswer questionData={this.state.questionData.conseqAnswer[1] } questionNum={8} />
          <AdditionalAnswer questionData={this.state.questionData.additionalAnswer[0] } questionNum={9} />
          <AdditionalAnswer questionData={this.state.questionData.additionalAnswer[1] } questionNum={10} />
        </form>;
    }

    return (
      <div className="row">
        <div className="col-md-offset-2 col-md-8">
        {questionList}
        </div>
      </div>
    );
  }
});

module.exports = Test;
