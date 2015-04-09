const React = require('react');
let $ = require('jquery');

let Results = React.createClass({

  getInitialState: function () {
    return {
      groups: [],
      selectedGroup: ''
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: '/api/groups',
      dataType: 'json',
      success: function (groups) {
        this.setState({
          groups: groups
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  selectGroup(event) {
    this.setState({
      selectedGroup: event.target.value
    });
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <select onChange={this.selectGroup}>
          {this.state.groups.map((group, i) => {
            return (<option key={i} value={group.study_group}>{group.study_group}</option>);
          })}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = Results;
