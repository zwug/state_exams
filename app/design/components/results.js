const React = require('react');
let $ = require('jquery');

let Results = React.createClass({

  getInitialState() {
    return {
      groups: [],
      selectedGroup: ''
    };
  },

  componentDidMount() {
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

  getDataByGroup() {
    console.log(this.state.selectedGroup);
    let data = {};
    data.group = this.state.selectedGroup;
    $.ajax({
      url: '/api/get-by-groups',
      data: data,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        this.setState({
         // groups: groups
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="row">
            <span className="btn btn-default" onClick={this.getDataByGroup}>По группе</span>
          </div>
          <div className="row">
            <select onChange={this.selectGroup}>
          {this.state.groups.map((group, i) => {
            return (<option key={i} value={group.study_group}>{group.study_group}</option>);
          })}
            </select>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;
