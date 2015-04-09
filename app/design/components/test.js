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
        this.setState({
          questionData: data,
          totalMark: 0,
          answers: {
            singleArr: [
              0, 0
            ],
            multipleArr: [
              [false,false,false,false], [false,false,false,false]
            ],
            complianceArr: [
              ['', ''],
              ['', '']
            ],
            conseqArr: [
              [],[]
            ],
            additionalArr: []
          }
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  singleChange(i, event) {
    let answers = this.state.answers;
    answers.singleArr[i] = event.target.value;
    this.setState({
      answers: answers
    });
  },

  multipleChange(i, event) {
    let answers = this.state.answers;
    answers.multipleArr[i][event.target.value - 1] = !answers.multipleArr[i][event.target.value - 1];
    this.setState({
      answers: answers
    });
  },

  complianceChange(i, event) {
    let answers = this.state.answers;
    if(event.target.name.slice(-1) == 'A'){
      answers.complianceArr[i][0] = event.target.value;
    }
    else{
      answers.complianceArr[i][1] = event.target.value;
    }
    this.setState({
      answers: answers
    });
  },

  conseqChange(i, event) {
    let answers = this.state.answers;
    answers.conseqArr[i] = event.target.value.replace(/ /g,'').toUpperCase().split(',');
    this.setState({
      answers: answers
    });
  },

  additionalChange(i, event) {
    let answers = this.state.answers;
    answers.additionalArr[i] = event.target.value.trim().toLowerCase();
    this.setState({
      answers: answers
    });
  },

  render() {
    let questionList = '';

    if (this.state) {
      console.log(this.state.answers);
      questionList =
        <form>
          <SingleAnswer questionData={this.state.questionData.singleAnswer[0] } questionNum={1} onchange={this.singleChange.bind(this, 0)}/>
          <SingleAnswer questionData={this.state.questionData.singleAnswer[1] } questionNum={2} onchange={this.singleChange.bind(this, 1)}/>
          <MultipleAnswer questionData={this.state.questionData.multipleAnswer[0] } questionNum={3} onchange={this.multipleChange.bind(this, 0)}/>
          <MultipleAnswer questionData={this.state.questionData.multipleAnswer[1] } questionNum={4} onchange={this.multipleChange.bind(this, 1)}/>
          <ComplianceAnswer questionData={this.state.questionData.complianceAnswer[0] } questionNum={5} onchange={this.complianceChange.bind(this, 0)}/>
          <ComplianceAnswer questionData={this.state.questionData.complianceAnswer[1] } questionNum={6} onchange={this.complianceChange.bind(this, 1)}/>
          <ConseqAnswer questionData={this.state.questionData.conseqAnswer[0] } questionNum={7} onchange={this.conseqChange.bind(this, 0)}/>
          <ConseqAnswer questionData={this.state.questionData.conseqAnswer[1] } questionNum={8} onchange={this.conseqChange.bind(this, 1)}/>
          <AdditionalAnswer questionData={this.state.questionData.additionalAnswer[0] } questionNum={9} onchange={this.additionalChange.bind(this, 0)} />
          <AdditionalAnswer questionData={this.state.questionData.additionalAnswer[1] } questionNum={10} onchange={this.additionalChange.bind(this, 1)}/>
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
